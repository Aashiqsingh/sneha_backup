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

    const deleteData = async(id)=>{
        // const red = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
        const res = await axios.delete("https://node5.onrender.com/user/user/"+id);
        console.log(res);
        if(res.status == 204)
        {
            getData();
        }
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
                    <th>Action</th>
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
                                <td><button onClick={()=>{deleteData(user._id)}} className='btn btn-danger'>DELETE</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}


// let users = {
//     id : 1,
//     name : "aashi",
//     email : "aashi@gmail.com",
//     password : "123456",
//     data:['sneha','aashi','ashish']
// }

// users.data[0]