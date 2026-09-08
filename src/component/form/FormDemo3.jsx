import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    const refCodeList = ["fb","google","insta"]
    const {register,handleSubmit,formState:{errors}} = useForm();

    const submitHandler = (data)=>{
        console.log(data);
    }

    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"*please enter name"
            },
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
        },
        refCodeValidator:{
            required:{
                value:true,
                message:"*please enter ref code"
            },
            validate:(params)=>{
                console.log("params....",params);
                return refCodeList.includes(params) || "*please enter valid ref code"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 3</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register("name",validationSchema.nameValidator)} />
                {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age && errors.age.message}
            </div>
            <div>
                <label htmlFor="">Ref Code</label>
                <input type="text" {...register("refCode",validationSchema.refCodeValidator)} />
                {errors.refCode && <span style={{color:"red"}}>{errors.refCode.message}</span>}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
