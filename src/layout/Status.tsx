import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useStyles } from '../styles';
import Paper from '@material-ui/core/Paper';

import { Context } from '../Context';
import { GetUsers, GetStatus, PostStatus } from '../api';


const Status = (props: any) => {
  const [user, setGetUser, status, setGetStatus, statusPost, setPostStatus] = useContext<any>(Context);
  const classes = useStyles();

  useEffect(() => {
    GetUsers('', setGetUser)
    GetStatus('', setGetStatus)
  }, [])

  useEffect(() => {
    !!statusPost && addStatus(statusPost)
  }, [statusPost])

  const [postBody, setPostBody] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostBody(event.target.value);
  };

  const handleSubmit = () => {
    PostStatus('', {
      title: 'qweeee',
      body: postBody,
      userId: 10
    }, setPostStatus)
  };

  const addStatus = (value: any) => {
    setGetStatus((values: any) => ([
      ...values,
      value
    ]))
  }

  return (
    <>
      {console.log(statusPost)}
      {console.log(status)}
      {/* POST STATUS */}
      <div>
        <TextField
          id="body-status"
          label="Status"
          multiline
          rowsMax="4"
          placeholder="write your status here :)"
          value={postBody}
          onChange={handleChange}
        />
        <Button color="primary" onClick={() => handleSubmit()}>Publish</Button>
      </div>

      {/* POST STATUS OF USER */}
      {/* {user.map((user: any) => {
        return statusPost.map((status: any, idx: number) => (
          user.id === status.userId && (
            <Paper key={idx} className={classes.paper}>
              <Typography component="h6" gutterBottom>
                {user.name}
              </Typography>
              {status.body}
            </Paper>
          )))
      })} */}

      {/* GET STATUS OF USER */}
      {user?.reverse().map((user: any) => {
        return status?.reverse().map((status: any, idx: number) => (
          user.id === status.userId && (
            <Paper key={idx} className={classes.paper}>
              <Typography component="h6" gutterBottom>
                {user.name}
              </Typography>
              {status.body}
            </Paper>
          )))
      })}
    </>
  );
}

export default Status;
