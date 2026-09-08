import React, { useMemo, useState } from 'react'

export const UseMemo1 = () => {

    const [Count, setCount] = useState(0);
    const [item, setitem] = useState(5);

    const test = useMemo(()=>{
        console.log("hello");
        
        return Count*Count;
    },[Count]);

  return (
    <div>
        <h1>UseMemo1</h1>

    <h2>Function Count = {test}</h2>

    <h2>count = {Count}</h2>
    <button onClick={()=> setCount(Count+1)}>Update count</button>

    <h2>item = {item}</h2>
    <button onClick={()=> setitem(item*5)}>Update Item</button>

    </div>
  )
}
