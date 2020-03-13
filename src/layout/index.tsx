import React, { useState, useEffect, useContext } from 'react';
import { GetToDo } from '../config/Api';
import { Context } from '../config/Context';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Main = () => {
  const [count, setCount] = useState(1);
  const value = useContext(Context);

  useEffect(() => {
    GetToDo(count)
  }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <button onClick={() => setCount(count + 1)}>Get ToDo</button>
      <h1>{value}</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;