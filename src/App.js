import React, {useEffect, useState} from "react";


const App = () => {
    const [n, setN] = useState(0)
    const addOne = () => {
        setN(i => i + 1)
    }
    useEffect(() => {
        console.log('n 变化了')
    }, [n])
    return (
        <div>
            <span>{n}</span>
            <hr/>
            <button onClick={addOne}>+1</button>
        </div>
    )
}
export default App