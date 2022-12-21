import React, { useState, useEffect } from "react";


export default function HookUseEffect() {
    const [count, setCount] = useState(1);
    //Sử dụng useEffect() như componentDidUpdate
    useEffect(() => {
        document.title = `ducdv đã click (${count}) lần`
    })
    return (
        <>
            <code>freetuts.net</code> <br />
            <h1>Bạn đã click {count} lần</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click me</button>
        </>
    );
}