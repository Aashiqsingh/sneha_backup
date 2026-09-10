import axios from 'axios'
import React, { useEffect } from 'react'

export const DeleteApi1 = () => {

    const deleteData = async()=>{
        const res = await axios.delete("https://node5.onrender.com/user/user/6aa13dc284e99eb081bdceb5");
        console.log(res);
    }

    // useEffect(()=>{
    //     deleteData();
    // })


  return (
    <div style={{textAlign:"center"}}>
        <h1>DeleteApi1</h1>

        <button onClick={()=>{deleteData()}}>Delete Data</button>
    </div>
  )
}
