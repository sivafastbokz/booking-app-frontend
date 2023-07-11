import React, { useState } from "react";
import "/home/siva/Documents/booking-app-frontend/src/Component/Usersignin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin(){
   const[Name,setname]=useState('');
   const[phoneno,setphoneno]=useState('')
   const[age,setage]=useState('')
   const[gender,setgender]=useState('')
   const[password,setpassword]=useState('')
   const[error,seterror]=useState('')
   const[phoneNoError,setphonenoError]=useState('')
  

  const navigate = useNavigate();
   
  const handlesignin = async (e) => {
    e.preventDefault();
    if (!Name || !phoneno || !age || !gender || !password) {
      seterror("Please Fill In All The Fields");
      return;
    }
    try {
      if(phoneno.length !== 10){
        setphonenoError('enter a valid phonenumber');
        return;
       }
      const response = await axios.post("http://localhost:5000/customersignin", {
        customerName: Name,
        customerPhoneNo: phoneno,
        customerAge: age,
        customerGender: gender,
        customerPassword: password,
      });
      
      if (response.data === "user name already exists") {
         alert("Username already exists. Please choose a different name.");
         return;
       }
        else {
        alert("Account created successfully");
        navigate(`/loginpage?name=${encodeURIComponent(Name)}`);
       }
    } catch (error) {
      console.log('something went worng');
    }
  };
  
   const loginpage=()=>{
    navigate('/loginpage')
   }
    return(
        <React.Fragment>
           <div className="signInForm">
                <form className="signin">
                    <h1>CREATE ACCOUNT</h1>
                <input type="text" placeholder="enter your name" className="input"  onChange={(event)=>setname(event.target.value)}></input>
                <input type="text" placeholder="enter your phoneNo"  className="input" pattern="[0-10]"  onChange={(event)=>{setphoneno(event.target.value)}}></input>
                {phoneNoError && <h6>{phoneNoError}</h6>}
                <input type="number" placeholder="enter your age" className="input"  onChange={(event)=>setage(event.target.value)}></input>
                <input type="password" placeholder="enter your password" className="input"  onChange={(event)=>setpassword(event.target.value)}></input>
                <label className="label1">
                 Select YourGender:  
                 </label>  
                <input type="checkbox" value='male' className="checkbox"  onChange={(event)=>setgender(event.target.value)}/> 
                <label className="label2">MALE</label>
                <input type="checkbox" value='female' className="checkbox" onChange={(event)=>setgender(event.target.value)}/> 
                <label className="label3">FEMALE</label>
                <br/>
                {error && <small>{error}</small>}
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

