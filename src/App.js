import React, {forwardRef, useRef} from "react";

const App = () => {
    const buttonRef = useRef(null)
    return (
        <div>
            <Button ref={buttonRef}/>
        </div>
    )
}
const Button = forwardRef((props, ref) => {
    console.log(props)
    console.log(ref)
    return <button ref={ref}>按钮</button>
})
export default App