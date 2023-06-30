import React, { useState } from "react";
import "/home/siva/Documents/booking-app-frontend/booking/src/component/userlogin.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const[loginname,setloginname]=useState('')
    const[loginpassword,setloginpassword]=useState('')
     
    const navigate = useNavigate();

    const login = () => {
        navigate("/servicepage");
        axios.post("http://localhost:5000/customerlogin", {
            customerName: loginname,
            customerPassword: loginpassword,
        }).then(() => {
            alert("Login successful");
        }).catch((error) => {
            console.log(error);
        });
    };
  
     const signup=()=>{
        navigate('/')
     }

    return(
        <React.Fragment>
            <form className="loginfield">
                    <h1>LOGIN</h1>
                <input type="text" className="input" placeholder="enter the name" value={loginname} onChange={(event)=>setloginname(event.target.value)}></input>
                <input type="password" className="input" placeholder="enter the password" value={loginpassword} onChange={(event)=>setloginpassword(event.target.value)}></input>
                <p>Don't have an account?<button onClick={signup}>SIGN UP</button></p>
                <br/>
                <button className="loginbtn2" onClick={login}>LOGIN</button>
               </form>
        </React.Fragment>
    )
}
export default Login;