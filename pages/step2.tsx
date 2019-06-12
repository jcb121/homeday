import React from "react";
import Router from 'next/router';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Page from "../components/Page";
import { connect } from 'react-redux';

import { setFirstName, setLastName, setGitUserName } from '../store'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface IProps {
  firstName: string
  lastName: string
  gitUserName: string
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
  setGitUserName: (value: string) => void
}

function Home({
  firstName, lastName, gitUserName, setFirstName, setLastName, setGitUserName
}: IProps) {
  const classes = useStyles();
  const handleSubmit = (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    Router.push(`/step3`)
  };

  return (
    <Page title="Please enter the details of the user you want to retreive" backButton={`/`}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              autoComplete="lname"
              onChange={e => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="gitHubUserName"
              label="Github User Name"
              name="gitHubUserName"
              value={gitUserName}
              onChange={e => setGitUserName(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Next
        </Button>
      </form>  
    </Page>
  );
}

const mapDispatchToProps = { setFirstName, setLastName, setGitUserName };

export default connect(
  state => state,
  mapDispatchToProps
)(Home)