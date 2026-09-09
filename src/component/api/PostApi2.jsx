import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export const PostApi2 = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    console.log(data);
    const res = await axios.post("https://node5.onrender.com/user/user/", data);
    // console.log(res.data.message);
    if (res.status == 200) {
      toast.success("Data Submitted Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
   
  };

  return (
    <div style={{ textAlign: "center" }}>
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
      />
      <h1>PostApi2</h1>

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
          <label htmlFor="">Password</label>
          <input type="password" {...register("password")} />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="number" {...register("age")} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
