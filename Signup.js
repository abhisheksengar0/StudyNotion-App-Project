import React from "react";
import signupImg from"../assets/signup.png"
import Template from "../components/Template";

const Signup=({setIsLoggedIn})=>{
    return(
        <Template
        title="Join the Millions learning to code with studyNotion for free"
        desc1="Buid skills for today, tommarow and beyond."
        desc2="Education to future-proof your career"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Signup;