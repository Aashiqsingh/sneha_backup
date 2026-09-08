import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    let name = useParams().name;


  return (
    <div>
        <h1>Watch = {name}</h1>
    </div>
  )
}
