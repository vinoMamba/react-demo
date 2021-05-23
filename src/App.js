import React, {useEffect, useState} from "react";


const App = (props) => {
    const [n, setN] = useState(0)
    const addOne = () => {
        setN(n + 1)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('n 变化了')
        }, 1000)
        return () => {
            window.clearInterval(timer)
        }
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