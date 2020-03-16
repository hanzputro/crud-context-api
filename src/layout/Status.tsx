import React, { useContext, useEffect, useState, useCallback } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useStylesGlobal } from '../styles';
import Paper from '@material-ui/core/Paper';

import { Context } from '../Context';
import { GetUsers, GetStatus, PostStatus } from '../api';


const useStyles = makeStyles((theme) =>
  createStyles({
    thumb: {
      width: '24px',
      height: '24px',
      marginRight: '5px'
    }
  }),
);

const Status = (props: any) => {
  const [user, setGetUser, status, setGetStatus, statusPost, setPostStatus] = useContext<any>(Context);
  const classesGlobal = useStylesGlobal();
  const classes = useStyles();

  useEffect(() => {
    GetUsers('', setGetUser)
    GetStatus('', setGetStatus)
  }, [])

  useEffect(() => {
    !!statusPost && addStatus(statusPost)
  }, [statusPost])

  const addStatus = useCallback((value: any) => {
    setGetStatus((values: any) => ([
      ...values,
      value
    ]))
  }, [])

  const SubmitStatus = (props: any) => {
    const [postBody, setPostBody] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPostBody(event.target.value);
    };

    const handleSubmit = () => {
      PostStatus('', {
        title: '',
        body: postBody,
        userId: 10
      }, setPostStatus)
    };

    return (
      <form className={classesGlobal.form} noValidate autoComplete="off">
        <div>
          <TextField
            id="body-status"
            label="Status"
            variant="outlined"
            placeholder="write your status here :)"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={postBody}
            onChange={handleChange}
          />
          <Button color="primary" onClick={() => handleSubmit()}>Publish</Button>
        </div>
      </form>
    )
  }

  return (
    <>
      {/* {console.log(statusPost)}
      {console.log(status)} */}

      {/* POST STATUS */}
      <SubmitStatus />

      {/* GET STATUS OF USER */}
      {
        user?.reverse().map((user: any) => {
          return status?.reverse().map((status: any, idx: number) => (
            user.id === status.userId && (
              <Paper key={idx} className={classesGlobal.paper}>
                <Grid container alignItems="center">
                  <Grid item><Avatar alt={user.name} src={user.img} className={classes.thumb} /></Grid>
                  <Grid item><Typography component="h6">{user.name}</Typography></Grid>
                </Grid>
                {status.body}
              </Paper>
            ))
          )
        })
      }
    </>
  );
}

export default Status;
