import React, { useState, useEffect } from "react"
import { Button } from "antd";
function Exmple(props) {
    const [count, setCount] = useState(10);
    useEffect(() => {
        console.log(count, props)
    })
    return (
        <div>
            <p>{count}</p>
            <Button onClick={(e) => setCount(count + 1)}>按钮加一</Button>
        </div>
    )
}

export default Exmple


