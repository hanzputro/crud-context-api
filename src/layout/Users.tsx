import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../styles';
import Paper from '@material-ui/core/Paper';

import { Context } from '../Context';
import { GetUsers } from '../api';


const Todo = (props: any) => {
  const [user, setUser] = useContext<any>(Context);
  const classes = useStyles();

  useEffect(() => {
    GetUsers('', setUser)
  }, [])

  return (
    <>
      {user?.map((user: any, idx: number) => (
        <Paper key={idx} className={classes.paper}>
          <Typography variant="subtitle1" component="h6" gutterBottom>
            {user.name}
          </Typography>
          <small>Phone: {user.phone}</small><br />
          <small>From :{user.address.city}</small><br />
          <small>Website :{user.website}</small>
        </Paper>
      ))}
    </>
  );
}

export default Todo;
