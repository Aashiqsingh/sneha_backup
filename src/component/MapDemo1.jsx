import React from 'react'

export const MapDemo1 = () => {
  
    let names = ["tejas","rahul","aman","om","priya"];
  
  
  
    return (
    <div>
        {
            names.map((name)=>{
                return (
                    <h1>{name}</h1>
                )
            })
        }
    </div>
  )
}
