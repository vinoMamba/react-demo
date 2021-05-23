import React, {createContext, useContext, useState} from "react";

const C = createContext(null)

const App = () => {
    const [n, setN] = useState(0)
    const [x, setX] = useState(0)
    return (
        <C.Provider value={{n, setN, x, setX}}>
            <Father/>
        </C.Provider>
    )
}

const Father = () => {
    const {x, setX} = useContext(C)
    const addOne = () => {
        setX(x => x + 1)
    }
    return (
        <>
            <div>我是爸爸的N: {x}</div>
            <button onClick={addOne}>爸爸+1</button>
            <Son/>
        </>
    )
}

const Son = () => {
    const {n, setN} = useContext(C)
    const addOne = () => {
        setN(i => i + 1)
    }
    return (
        <>
            <div>我是儿子 得到了n : {n}</div>
            <button onClick={addOne}>+1</button>
        </>

    )

}

export default App