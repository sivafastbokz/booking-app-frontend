import React, { useState } from "react";
import "/home/siva/Documents/booking-app-frontend/booking/src/component/usersignin.css";
import axios from "axios";

function Signin(){
   const[name,setname]=useState('');
   const[phoneno,setphoneno]=useState('')
   const[age,setage]=useState('')
   const[gender,setgender]=useState('')
   const[password,setpassword]=useState('')
   const[Showlogin,setShowlogin]=useState(false)

   const handlesignin = async()=>{
        await axios.post("http://localhost:5000/customersignin",{
            customerName:name,
            customerPhoneNo:phoneno,
            customerAge:age,
            customerGender:gender,
            customerPassword:password
        })
   }

    return(
        <React.Fragment>
           <div className="signInForm">
                { Showlogin ?(
                <form className="loginfield">
                    <h1>Login</h1>
                <input type="text" className="input" placeholder="enter the name"></input>
                <input type="password" className="input" placeholder="enter the password"></input>
                <p>NewUser?Create Account<button>SIGN IN</button></p>
               </form>
            ):(
                <form className="signin">
                    <h1>Sign In</h1>
                <input type="text" placeholder="enter your name" className="input" onChange={(event)=>setname(event.target.value)}></input>
                <input type="text" placeholder="enter your phoneNo:" className="input" onChange={(event)=>setphoneno(event.target.value)}></input>
                <input type="text" placeholder="enter your age" className="input" onChange={(event)=>setage(event.target.value)}></input>
                <input type="password" placeholder="enter your password" className="input" onChange={(event)=>setpassword(event.target.value)}></input>
                <label className="label1">
                 Select Your Gender: 
                 </label>  
                <input type="checkbox" value="male"  className="checkbox" onChange={(event)=>setgender(event.target.value)}/> 
                <label className="label2">MALE</label>
                <input type="checkbox" value="female" className="checkbox" onChange={(event)=>setgender(event.target.value)}/> 
                <label className="label3">FEMALIE</label>
                <br/>
                <br/>
                <button className="signinbtn" onClick={handlesignin}>sign In</button>
                <br/>
                <br/>
                <p>Already Have An Account?<button className="loginbtn" onClick={()=>setShowlogin(true)}>login</button></p>
                </form>
                )}
           </div>
        </React.Fragment>
    )
}

export default Signin;

