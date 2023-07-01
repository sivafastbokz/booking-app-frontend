import React, { useState } from "react";
import "/home/siva/Documents/booking-app-frontend/booking/src/component/usersignin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin(){
   const[Name,setname]=useState('');
   const[phoneno,setphoneno]=useState('')
   const[age,setage]=useState('')
   const[gender,setgender]=useState('')
   const[password,setpassword]=useState('')

   const navigate = useNavigate();
   
   const handlesignin = ()=>{
    navigate("/servicepage");
    axios.post("http://localhost:5000/customersignin", {
      customerName: Name,
      customerPhoneNo: phoneno,
      customerAge: age,
      customerGender: gender,
      customerPassword: password,
    }).then(() => {
       alert("account created sucessfully") 
    }).catch((error) => {
      console.log(error);
    });
};

   const loginpage=()=>{
    navigate('/loginpage')
   }

    return(
        <React.Fragment>
           <div className="signInForm">
                <form className="signin">
                    <h1>CREATE ACCOUNT</h1>
                <input type="text" placeholder="enter your name" className="input" onChange={(event)=>setname(event.target.value)}></input>
                <input type="text" placeholder="enter your phoneNo" className="input" onChange={(event)=>setphoneno(event.target.value)}></input>
                <input type="text" placeholder="enter your age" className="input" onChange={(event)=>setage(event.target.value)}></input>
                <input type="password" placeholder="enter your password" className="input" onChange={(event)=>setpassword(event.target.value)}></input>
                <label className="label1">
                 Select YourGender:  
                 </label>  
                <input type="checkbox" value="male"  className="checkbox" onChange={(event)=>setgender(event.target.value)}/> 
                <label className="label2">MALE</label>
                <input type="checkbox" value="female" className="checkbox" onChange={(event)=>setgender(event.target.value)}/> 
                <label className="label3">FEMALE</label>
                <br/>
                <br/>
                <button className="signinbtn" onClick={handlesignin}>signUp</button>
                <br/>
                <br/>
                <p>Already Have An Account?<button className="loginbtn" onClick={loginpage}>LOGIN</button></p>
                </form>
           </div>
        </React.Fragment>
    )
}

export default Signin;

