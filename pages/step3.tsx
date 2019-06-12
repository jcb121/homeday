import React, { useEffect } from "react";
import Router from 'next/router';
import { Grid, FormControlLabel, Checkbox, Button, makeStyles } from "@material-ui/core";
import Page from "../components/Page";
import { connect } from "react-redux";
import { setAgreed } from '../store';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  value: {
    fontWeight: 'bold',
  }
}));

interface IProps {
  firstName: string
  lastName: string
  gitUserName: string
  agreed: boolean
  setAgreed: (value: boolean) => void

}

function Home({ firstName, lastName, gitUserName, agreed, setAgreed }: IProps) {
  const classes = useStyles();
  const handleSubmit = (form: any) => {
    form.preventDefault();
    Router.push(`/step4`)
  };

  useEffect(() => {
    if(gitUserName === ''){
      Router.push(`/`)
      return;
    }
  }, []);

  return (
    <Page title="Please Agree to the terms" backButton="/step2">
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            The name: <span className={classes.value}>{firstName} {lastName}</span>
            <br />
            The Github username: <span className={classes.value}>{gitUserName}</span>
          </p>
        </div>
        <Grid container>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox required value="allowExtraEmails" color="primary" onChange={e => setAgreed(e.target.checked)} checked={agreed} />}
              label="I agree with having this profile retreived"
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

export default connect(
  state => state,
  { setAgreed }
)(Home)