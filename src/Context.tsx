import React, { createContext, useState } from 'react';

export const Context = createContext({});

export const ContextProvider = (props: any) => {
    const [user, setUser] = useState([])
    const [post, setPost] = useState([])

    return (
        <Context.Provider value={[user, setUser, post, setPost]}>
            {props.children}
        </Context.Provider>
    )
}