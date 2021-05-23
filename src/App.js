import React, {useEffect, useRef, useState} from "react";

const App = () => {
    const [n, setN] = useState(0)
    const count = useRef(0) // count = {current:0}
    const addOne = () => {
        setN(i => i + 1)
    }
    useEffect(() => {
        count.current += 1
        console.log(count.current)
    })
    return (
        <div>
            <span>{n}</span>
            <hr/>
            <button onClick={addOne}>+1</button>
        </div>
    )
}
export default App