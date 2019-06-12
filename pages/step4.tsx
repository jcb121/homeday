import React, { useEffect, Fragment } from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
import Page from "../components/Page";
import { connect } from "react-redux";
import { IProfile, setProfile, clearData } from "../store";
import Router from "next/router";
import Link from "next/link";

const gif = require('../assets/powerRangers.gif');

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    fontWeight: 'bold',
  },
  headerText: {

  },
  right: {
    marginLeft: '16px;',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  image: {
    display: 'block',
    width: '100%',
  },
  button: {
    marginTop: '16px'
  }
}));

interface IProps {
  firstName: string
  lastName: string
  gitUserName: string
  profile: IProfile | false
  setProfile: (profile: IProfile) => void
  clearData: () => void
}

function Home({ firstName, lastName, gitUserName, profile, setProfile, clearData }: IProps) {
  const classes = useStyles();

  async function fetchUrl() {
    const response = await fetch(`https://api.github.com/users/${gitUserName}`);
    const json: IProfile = await response.json();
    setProfile(json)
  }

  useEffect(() => {
    if (gitUserName === '') {
      Router.push(`/`)
      return;
    }
    fetchUrl();
  }, []);

  return (
    <Page title={`The requested profile of '${firstName} ${lastName}'`} backButton="/step3">

      {profile === false && (
        <div>loading</div>
      )}


      {profile !== false && (
        <Fragment>
          {profile.message === 'Not Found' ? (
            <Fragment>
              <p>The profile was not found, is the username <span className={classes.label}>{gitUserName}</span> correct?</p>
              <img className={classes.image} src={gif} alt="two confused Power Rangers" />
            </Fragment>
          ) : (
            <Fragment>
              <div className={classes.header}>
                {profile.name && (
                  <h2 className={classes.headerText}>{profile.name} -&nbsp;</h2>
                )}
                <h3 className={classes.headerText}>{profile.login}</h3>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <img className={classes.image} alt="Github avatar" src={profile.avatar_url} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.right}>
                    <p>
                      {profile.bio ? profile.bio : 'I have no bio because I am either too cool or too mysterious. Sometimes both'}
                    </p>
                    <p>
                      <span className={classes.label}>Followers:</span> {profile.followers}
                      <br />
                      <span className={classes.label}>Location:</span> {profile.location}
                      <br />
                      <span className={classes.label}>Repos:</span> {profile.public_repos}
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Fragment>
          )}
          <Link href="/">
            <Button
              onClick={clearData}
              fullWidth
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Start Over
            </Button>
          </Link>
        </Fragment>
      )}
    </Page>
  );
}


export default connect(
  state => state,
  { setProfile, clearData }
)(Home)