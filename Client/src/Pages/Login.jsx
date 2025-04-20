import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Base_URL from "../config/BaseUrl";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const navigate = useNavigate();
  

    const handelSubmit = (e) => {
        e.preventDefault();
      let api=`${Base_URL}customer/login`;
      axios.post(api,{email:email,password:password}).then((res)=>{
        console.log(res.data);
            alert("Login Successfully");
            localStorage.setItem("token",res.data.token);
            navigate("/home");
        
      }
      ).catch((error)=>{
        console.log(error);
      })
    }


    return (
        <>
            <h1>Login</h1>
<div id="login">
Enter Your Email :<input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} /><br />
            Enter Your Password :<input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} /><br />
            <button onClick={handelSubmit}>Login</button>
            
            <p>Don't have an account? <a href="/register" onClick={()=>{navigate("/register")}}>Register here</a></p>
            </div> 
        </>
    );
}

export default Login