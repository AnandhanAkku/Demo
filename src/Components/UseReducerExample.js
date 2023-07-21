import { useReducer } from 'react';


const reducer = (state1, action1) => {
    if (action1.types === "plus") {
        return state1 + 1;
    }
    else {
        return state1 - 1;
    }
}


const ReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <button onClick={() => dispatch({ types: "plus" })}>Plus</button>
            <h1>Count - {count}</h1>
            <button onClick={() => dispatch({ types: "minus" })}>Minus</button>
        </div>
    )
}
export default ReducerHook