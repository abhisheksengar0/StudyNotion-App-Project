import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignupForm =({setIsLoggedIn})=>{
    const navigate =useNavigate();

    const[formData,setformData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event){
        setformData((prevData)=>(

          { 
            ...prevData,[event.target.name]: event.target.value
          }

        ) )
    }
     const[showPassword,setshowPassword]=useState(false);
     const[accountType,setaccountType]=useState("student");
        function submitHandler(event){
            event.preventDefault();
            if(formData.password != formData.confirmPassword){
                toast.error("Password do not match");
                return;
            }
            setIsLoggedIn(true);
            toast.success("Account is created");
            navigate("/dashboard")
        }

    return(
       <div>
          {/* student-instructor tab  */}
          <div className="flex bg-richblack-800 gap-x-1 my-6 p-1 rounded-full max-w-max">
            <button className={`${accountType==="student"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setaccountType("student")}>Student</button>
            <button  className={`${accountType==="instructor"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}onClick={()=>setaccountType("instructor")}>Instructor</button>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex  justify-between gap-x-3"> 
         <label >
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                <input    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" required type="text" name="firstname" value={formData.firstname} onChange={changeHandler} placeholder="Enter First Name"/>
         </label>

         <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                <input    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" required type="text" name="lastname" value={formData.lastname} onChange={changeHandler} placeholder="Enter Last Name"/>
        </label>
             </div>
             <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                <input    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"  required type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Enter Your Email"/>
        </label>

        {/* create password and confirm password */}
        <div className="flex gap-x-3 justify-between">
            
            <label className="relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                <input   className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" required type={showPassword?("text"):("password")} name="password" value={formData.password} onChange={changeHandler} placeholder="Enter Password"/>
                <span className="absolute right-3 top-[38px] cursor-pointer"  onClick={()=>setshowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                </span>
        </label>

        <label className="relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                <input    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" required type={showPassword?("text"):("password")} name="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} placeholder="Confirm Password"/>
                <span className="absolute right-3 top-[40px] cursor-pointer"  onClick={()=>setshowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                </span>
        </label>
        </div>
        
        <button  className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] mt-5 py-[8px] w-full">
            Create Account
        </button>

          
          </form>
       </div>
    )
}
export default SignupForm; 