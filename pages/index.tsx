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
    <Page title="Welcome to Github Profile viewer tool" backButton={false}>
      <Typography component="h1" variant="h5" align="center">
      </Typography>
      <Typography component="p" variant="body1">
        this form will ask you for some details regarding the profile you want to retreive
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
