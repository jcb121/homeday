import { createStore } from "redux";

export interface IStoreState {
  firstName: string
  lastName: string
  gitUserName: string
  profile: boolean | IProfile
  agreed: boolean
}

const initialState: IStoreState = {
  firstName: '',
  lastName: '',
  gitUserName: '',
  profile: false,
  agreed: false,
}

export const actionTypes = {
  SET_FIRST_NAME: 'SET_FIRST_NAME',
  SET_LAST_NAME: 'SET_LAST_NAME',
  SET_GIT_USERNAME: 'SET_GIT_USERNAME',
  SET_PROFILE: 'SET_PROFILE',
  SET_AGREED: 'SET_AGREED',
  CLEAR_DATA: 'CLEAR_DATA'
}

type IAction = {
  type: 'SET_FIRST_NAME' | 'SET_LAST_NAME' | 'SET_GIT_USERNAME',
  payload: string
} | {
  type: 'CLEAR_DATA'
} | {
  type: 'SET_AGREED',
  payload: boolean
} | {
  type: 'SET_PROFILE',
  payload: IProfile
}
export interface IProfile {
  avatar_url: string
  followers: number
  public_repos: number
  location: string
  bio: string
  login: string
  name: string
  message? : 'Not Found'
}

// create a simple reducer
const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return { ...state, firstName: action.payload };
    case 'SET_LAST_NAME':
      return { ...state, lastName: action.payload };
    case 'SET_GIT_USERNAME':
      return { ...state, gitUserName: action.payload };
    case 'SET_PROFILE':
      return { ...state, profile: action.payload };
    case 'SET_AGREED':
      return { ...state, agreed: action.payload };
    case 'CLEAR_DATA':
      return initialState
    default:
      return state
  }
};

export const setAgreed = (value: boolean) => {
  return {
    type: actionTypes.SET_AGREED,
    payload: value
  }
}
export const clearData =() => {
  return {
    type: actionTypes.CLEAR_DATA,
  }
}
export const setProfile = (value: IProfile) => {
  return {
    type: actionTypes.SET_PROFILE,
    payload: value
  }
}
export const setFirstName = (value: string) => {
  return {
    type: actionTypes.SET_FIRST_NAME,
    payload: value
  }
}
export const setLastName = (value: string) => {
  return {
    type: actionTypes.SET_LAST_NAME,
    payload: value
  }
}
export const setGitUserName = (value: string) => {
  return {
    type: actionTypes.SET_GIT_USERNAME,
    payload: value
  }
}

export function initializeStore(_initialState: IStoreState = initialState) {
  return createStore(
    reducer,
    _initialState,
  )
}