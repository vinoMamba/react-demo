import React, {useReducer} from "react";

/**
 * useState 的复杂版
 * 事不过三，复杂的时候使用reducer
 * 例如在给表单赋值的时候可以用reducer
 */

const initial = {
    n: 0
}
const reducer = (state, action) => {
    if (action.type === 'add') {
        return {n: state.n + action.number}
    } else if (action.type === 'multi') {
        return {n: state.n * action.number}
    } else {
        throw new Error('unknown Type')
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initial)
    const addOne = () => {
        dispatch({type: 'add', number: 1})
    }
    const addTwo = () => {
        dispatch({type: 'add', number: 2})
    }
    return (
        <div>
            <span>{state.n}</span>
            <hr/>
            <button onClick={addOne}>+1</button>
            <button onClick={addTwo}>+2</button>
        </div>
    )
}
export default App