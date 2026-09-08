import React, { useState } from 'react'

export const UseState1 = () => {

    // let count = 0;
    const [count, setcount] = useState(0);

    const increment = ()=>{
        console.log(count);
        
        // count++;
        setcount(count+1);
    }


  return (
    <div>
        <h1>UseState1</h1>

        <p>count = {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}
