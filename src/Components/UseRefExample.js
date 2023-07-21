
import React, { useRef } from 'react';

const UseRefHook = () => {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};



export default UseRefHook;
