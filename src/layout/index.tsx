import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../styles';
import Posts from './Posts';
import Users from './Users';


const Main = (props: any) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Posts />
        </Grid>
        <Grid item xs={4}>
          <Users />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;