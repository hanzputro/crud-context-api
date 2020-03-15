import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../styles';
import Paper from '@material-ui/core/Paper';

import { Context } from '../Context';
import { GetUsers, GetPosts } from '../api';


const Todo = (props: any) => {
  const [user, setUser, post, setPost] = useContext<any>(Context);
  const classes = useStyles();

  useEffect(() => {
    GetUsers('', setUser)
    GetPosts('', setPost)
  }, [])

  return (
    <>
      {user.map((user: any) => {
        return post.map((post: any, idx: number) => (
          user.id === post.userId && (
            <Paper key={idx} className={classes.paper}>
              <Typography component="h6" gutterBottom>
                {user.name}
              </Typography>
              {post.body}
            </Paper>
          )))
      })}
    </>
  );
}

export default Todo;
