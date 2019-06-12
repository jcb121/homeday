import { Fragment } from "react";
import { CssBaseline, AppBar, Toolbar, Typography, Paper, makeStyles, Button } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  }
}));

function Page({ children, backButton, title }: {
  children?: React.ReactNode,
  title?: React.ReactNode,
  backButton: false | string,
}) {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <div className={classes.header}>
            <Typography variant="h6" color="inherit" noWrap>
              Homeday
            </Typography>
            {backButton && (
              <Link href={backButton}>
                <Button>Back</Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {title && (
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
          )}
          {children && children} 
        </Paper>
      </main>
    </Fragment>
  )
}

export default Page;