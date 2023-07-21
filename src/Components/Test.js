import React, { useContext } from 'react';
import { MyContext } from './UseContextExample';


const Test = () => {
    const user = useContext(MyContext);
    return (
        <>
            <h1>test files</h1>
            <h1>{`hello ${user.firstName}`}</h1>
        </>
    );
}




export default Test  