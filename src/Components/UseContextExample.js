import React, { useContext, useState, createContext } from 'react';
import Test from './Test'

export const MyContext = createContext();

const UseContextHook = () => {
    const data = {
        "firstName": "Anandhan",
        "lastName": "V"
    }
    const user = data;
    console.log(user)
    return (
        <MyContext.Provider value={user}>
            <Component1 />
            <Component2 />
            <Test />
        </MyContext.Provider>
    );
};

const Component1 = () => {
    const users = useContext(MyContext);
    return (
        <>
            <h1>haii</h1>
            <h1>{`user is ${users.firstName}`}</h1>
            {/* <Component2 /> */}
        </>
    );
};

const Component2 = () => {
    const user = useContext(MyContext);
    return (
        <>
            <h1>2</h1>
            <h1>{`user is ${user.lastName}`}</h1>
        </>
    );
};

export default UseContextHook;
