import React, {useState} from "react";
import ReactDOM from 'react-dom';

let _state
const myUseState = (initialValue) => {
    _state = _state === undefined ? initialValue : _state
    const setState = (newValue) => {
        _state = newValue
        render()
    }
    return [_state, setState]
}
const render = () => {
    ReactDOM.render(<App/>, document.getElementById('root'))
}

const App = () => {
    const [n, setN] = myUseState(0)
    const addOne = () => {
        setN(n + 1)
    }
    return (
        <div>
            <span>{n}</span>
            <hr/>
            <button onClick={addOne}>+1</button>
        </div>
    )
}
export default App