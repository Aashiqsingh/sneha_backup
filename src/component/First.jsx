import React from 'react'

export const First = () => {

  let a = 10;
  let isActive = true;
  let age = 19;



  return (
    <div>
        <h1>Hello</h1>

        <p>a = {a}</p>
        <p>isActive = {isActive == true ? "true" : "false"}</p>
        <h1>Age = {age}</h1>
    </div>
  )
}
