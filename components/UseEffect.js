import React, { useState, useEffect } from 'react';

export default function UseEffectA() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("UseEffect");
    },[count]);
    
    // const countHandler = () => {
    //     setCount(count + 1);
    // }
    return (
        <div>
            {console.log("Rendering")}
            <h1>Count { count }</h1>
            <button onClick={ () => { setCount(count+1)}}>+</button> 
        </div>
    )
}
