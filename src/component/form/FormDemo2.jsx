import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register, handleSubmit,formState:{errors}} = useForm();

    console.log("error...",errors);
    
    const submitHandler = (data)=>{
        console.log(data);
    }



    const validatorSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"*please enter name"
            },
            minLength:{
                value:3,
                message:"*name should be greater than 3"
            },
            maxLength:{
                value:10,
                message:"*name should be less than 10"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"*please enter age"
            },
            min:{
                value:18,
                message:"*age should be greater than 18"
            },
            max:{
                value:60,
                message:"*age should be less than 60"
            }
        }
    }


  return (
    <div>
        <h1>FormDemo2</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            {/* <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register("name",{required:{value:true,message:"please enter name"}})} />
                {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
            </div> */}
            <div>
                <label htmlFor="">Name</label>
                <input  type="text" {...register("name",validatorSchema.nameValidator)} />
                {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="text" {...register("age",validatorSchema.ageValidator)} />
                {
                    errors.age && <span style={{color:"red"}}>{errors.age.message}</span>
                }
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>

    </div>
  )
}
