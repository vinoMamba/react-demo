import React, {useState} from "react";
import useUpdate from "./useUpdate";


const App = (props) => {
    const [n, setN] = useState(0)
    const addOne = () => {
        setN(n + 1)
    }
    useUpdate(() => {
        console.log('n变了')
    }, n)

    return (
        <div>
            <span>{n}</span>
            <hr/>
            <button onClick={addOne}>+1</button>
        </div>
    )
}
export default App