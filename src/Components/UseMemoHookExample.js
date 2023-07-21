import React, { useMemo, useState } from 'react';

const UseMemoHook = () => {
    const [count, setCount] = useState(1);

    const Print = useMemo(() => {
        console.log('Running MEMO...' + count);
        return 10 * (count)
    }, [count]);
    // const Print = () => {
    //     console.log('Running MEMO...' + count);
    //     return 10 * (count)
    // };



    const Inc = () => {
        setCount(count + 1);
    }

    // return (
    //     <div>
    //         <p>{Print()}</p>
    //         <button onClick={Inc}>Increment</button>
    //         <p>{Print()}</p>
    //         <p>{Print()}</p>

    //     </div>
    // );
    return (
        <div>
            <p>{Print}</p>
            <button onClick={Inc}>Increment</button>
            <p>{Print}</p>
            <p>{Print}</p>

        </div>
    );
};

export default UseMemoHook;
