import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export const Update1 = () => {
    const id = useParams().id;
    const navigate = useNavigate();

    const {register,handleSubmit} = useForm({defaultValues:async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        return {
          name:res.data.data.name,
          email:res.data.data.email,
          password:res.data.data.password,
          age:res.data.data.age
        }
    }});


    const submitHandler = async(data)=>{
      console.log(data);
      const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data);
      console.log(res);
      
      if(res.status == 200)
      {
        navigate('/api2')
      }
    }

  return (
    <div>
        <h1>Update1</h1>
        <h1>{id}</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" name="name" {...register("name")} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name="email" {...register("email")} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" name="password" {...register("password")} />
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input type="text" name="age" {...register("age")} />
          </div>
          <div>
            <input type="submit" value="Update" />
          </div>
        </form>
    </div>
  )
}
