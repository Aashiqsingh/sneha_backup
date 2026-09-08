import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {

    const [users, setusers] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const getData = async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/");
        console.log(res.data.data);
        setusers(res.data.data);
        setisLoading(true);
    }



  return (
    <div style={{textAlign:'center'}}>
        <h1>ApiDemo2</h1>
        <button className='btn btn-primary' onClick={()=>{getData()}}>Get Data</button>

        <table className='table table-primary'>
            <thead>
                {
                    isLoading && (
                        <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Age</th>
                </tr>
                    )
                }
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
