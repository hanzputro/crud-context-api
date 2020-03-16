import React, { createContext, useState } from 'react';

export const Context = createContext({});

export const ContextProvider = (props: any) => {
    const [user, setGetUser] = useState(null)
    const [status, setGetStatus] = useState(null)
    const [statusPost, setPostStatus] = useState(null)

    return (
        <Context.Provider value={[user, setGetUser, status, setGetStatus, statusPost, setPostStatus]}>
            {props.children}
        </Context.Provider>
    )
}