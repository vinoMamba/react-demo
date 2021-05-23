import React, {memo, useCallback, useMemo, useState} from "react";


const App = () => {
    const [n, setN] = useState(0)
    const [m] = useState(0)
    const addOne = () => {
        setN(i => i + 1)
    }
    const onClickChild = useCallback(() => {
        console.log(m)
    }, [m])
    /**
     * 等价于下面的useMemo
     */
    // const onClickChild = useMemo(() => {
    //     return () => {
    //         console.log(m)
    //     }
    // }, [m])
    return (
        <div>
            <span>{n}</span>
            <hr/>
            <button onClick={addOne}>+1</button>
            <hr/>
            <Child data={m} onClick={onClickChild}/>
        </div>
    )
}
const Child = memo((props) => {
    console.log('child 执行了')
    console.log('假设这里有大量代码')
    return (
        <div onClick={props.onClick}>child: {props.data}</div>
    )
})

export default App