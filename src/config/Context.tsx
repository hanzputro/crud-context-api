import React, { createContext, useReducer } from 'react';
import { reducer, initialState, GetToDo } from './Api';

export const Context = createContext({})

export function test(data: any) { const valueData = data };

const valueData = test().valueData;

type valueProps = {
  // todo: any,
  album: string
}

const value: valueProps = {
  // todo: GetToDo,
  album: 'aaa'
}

export const ContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={state}>
      {props.children}
    </Context.Provider>
  )
}
