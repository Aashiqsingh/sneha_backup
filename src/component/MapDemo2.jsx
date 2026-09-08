import React from 'react'

export const MapDemo2 = () => {
    let users = [
        {
            id:1,
            name:"tejas",
            age:19,
            isActive:true
        },
        {
            id:2,
            name:"pradeep",
            age:20,
            isActive:true
        },
        {
            id:3,
            name:"priya",
            age:20,
            isActive:true
        }
    ]
  return (
    <div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.isActive ? "Active" : "Inactive"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
