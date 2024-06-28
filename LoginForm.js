import React, { useState } from "react";
// import {AiOutlineEye,AiOutlineEyeInvisisble} from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";


const LoginForm =({setIsLoggedIn})=>{
    const navigate = useNavigate();

    const [formData,setFormData]=useState({
        email:"", password:""
    })

    function changeHandler(event){
        setFormData((prevData)=>(

          { 
            ...prevData,[event.target.name]: event.target.value
          }

        ) )
    }

    const [showPassword,setshowPassword] =useState(false);

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
       toast.success("Logged In");
       navigate("/dashboard");
    }
    return(
        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6" >

            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                <input
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                 required type="email" value={formData.email} name="email" onChange={changeHandler} placeholder="Enter Email Id"/>
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>
                <input
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                required type={showPassword ? ("text"):("password")} value={formData.password} name="password" onChange={changeHandler} placeholder="Enter Password"/>

                <span className="absolute right-3 top-[38px] cursor-pointer" 
                 onClick={()=>setshowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>
               <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                        Forgot Passwod
                    </p>
                </Link>
                
               
            </label>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] mt-5 py-[8px]">
                    Sign In
            </button>
        </form>
    )
}
export default LoginForm 