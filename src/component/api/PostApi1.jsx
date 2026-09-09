import axios from 'axios'
import React from 'react'

export const PostApi1 = () => {

    const user = {
        name:"dhruvil",
        email:"dhruvil@gmail.com",
        password:"123456",
        age:25
    }

    const postData = async()=>{
        const res = await axios.post('https://node5.onrender.com/user/user/',user);
        console.log(res);
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>PostApi1</h1>

        <button onClick={()=>{postData()}}>Post Data</button>
    </div>
  )
}
