import Link from 'next/link'
import { makeStyles, Button, Typography } from '@material-ui/core';
import Page from '../components/Page';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Page title="Welcome to the Form to end all forms" backButton={false}>
      <Typography component="h1" variant="h5" align="center">
      </Typography>
      <Typography component="p" variant="body1">
        this will ask for some info from you. <br/>
        <small>
          I promise that all data gathered will be used for evil
        </small>
      </Typography>
      <Link href="/step2">
        <Button
          fullWidth
          color="primary"
          className={classes.submit}
          variant="contained"
        >
          Lets GO!
        </Button>
      </Link>
    </Page>

  )
}

export default (Home);
