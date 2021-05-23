import React from "react";
import ReactDOM from 'react-dom';

let _state = []
let index = 0
const myUseState = (initialValue) => {
    const currentIndex = index
    _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
    const setState = (newValue) => {
        _state[currentIndex] = newValue
        render()
    }
    index += 1
    return [_state[currentIndex], setState]
}
const render = () => {
    index = 0 //这是最重要的一步!!!!!
    ReactDOM.render(<App/>, document.getElementById('root'))
}

const App = () => {
    const [n, setN] = myUseState(0)
    const [m, setM] = myUseState(0)
    const addOne = () => {
        setN(n + 1)
    }
    const addOneM = () => {
        setM(m + 1)
    }
    return (
        <>
            <div>
                <span>{n}</span>
                <hr/>
                <button onClick={addOne}>+1</button>
            </div>
            <div>
                <span>{m}</span>
                <hr/>
                <button onClick={addOneM}>+1</button>
            </div>
        </>
    )
}
export default App