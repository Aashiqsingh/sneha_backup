import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast, ToastContainer } from "react-toastify";

export const FormDemo1 = () => {

    const {register,handleSubmit} = useForm();
    const [details, setdetails] = useState({});
    const [isSubmitted, setisSubmitted] = useState(false);

    const submitHandler = (data)=>{
        console.log(data);
        setdetails(data);

        setisSubmitted(true);

         toast.success('Login succeffully...', {
position: "top-right",
autoClose: 967,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }

    

  return (
    <div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
        <h1>FormDemo1</h1>
       


        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" {...register("email")} />
                </div>
                <div>
                    <label htmlFor="">Gender</label>
                    Male <input type="radio"  value="male" {...register("gender")} />
                    Female <input type="radio" value="female" {...register("gender")} />
                    Other <input type="radio" value="other" {...register("gender")} />
                </div>

                <div>
                    <label htmlFor="">City</label>
                    <select {...register("city")}>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="submit" name="" id="" />
                </div>
                
            </form>
        </div>
        <div>
           {
            isSubmitted == true &&
            <div>
                <h2>Details</h2>

                <h4>Name = {details.name}</h4>
                <h4>Email = {details.email}</h4>
                <h4>City = {details.city}</h4>
            </div>
           }
        </div>
    </div>
  )
}
