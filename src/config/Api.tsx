import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Context, ContextProvider } from './Context';

// custom hook to handle api
function useApi(req: any) {
  const [res, setRes] = useState({
    data: null,
    pending: false,
    error: false,
    complete: false
  })

  useEffect(() => {
    setRes({
      data: null,
      pending: true,
      error: false,
      complete: false
    })
    axios(req).then(res => setRes({
      data: res.data,
      pending: false,
      error: false,
      complete: true
    })).catch(() => {
      setRes({
        data: res.data,
        pending: false,
        error: true,
        complete: true
      })
    })
  }, []);

  return res;
}


// type of data api
type ApiProps = {
  count: number
}

const BaseApi = "https://jsonplaceholder.typicode.com/todos";

export const GetToDo = (count: any) => {
  // const [count, setCount] = useState(1);
  const Data: any = useApi({
    method: 'GET',
    url: `${BaseApi}/${count}`
  })

  return (Data.pending && 'Loading...') ||
    (Data.complete && Data.data.title)
  // return <Context.Provider value='aba' /> // console.log('aaa')
}

export const initialState = {
  count1: 0,
  count2: 0,
};
export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GETTODO': return { ...state, count1: state.count1 + 1 };
    default: throw new Error('Unexpected action');
  }
};
