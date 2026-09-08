import React from 'react'
import { Link } from 'react-router-dom'

export const Shows = () => {

    const showList = [
        {
            id:101,name:"Breaking Bad"
        },
        {
            id:102,name:"Game of Thrones"
        },
        {
            id:103,name:"The Walking Dead"
        }
    ]


  return (
    <div>
        <h1>Shows</h1>
        <ul>
            {
                showList.map((list)=>{
                    return <li><Link to={`/watch/${list.name}`}>{list.name}</Link></li>
                })
            }
        </ul>
    </div>
  )
}
