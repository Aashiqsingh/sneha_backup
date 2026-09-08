import axios from 'axios'
import React, { useEffect } from 'react'

export const ApiDemo1 = () => {


    const getData = async ()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/");
        console.log(res);
        // console.log(res.data);
        // console.log(res.data.data);
        
    }


    // getData();
    useEffect(()=>{
        getData();
    })


  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo1</h1>
    </div>
  )
}
