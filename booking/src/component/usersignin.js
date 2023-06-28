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
                <form>
                <input type="text" placeholder="enter the name"></input>
                <input type="password" placeholder="enter the password"></input>
                <p>newuser create account?<button>sign in</button></p>
               </form>
            ):(
                <form>
                <input type="text" placeholder="enter your name" onChange={(event)=>setname(event.target.value)}></input>
                <input type="text" placeholder="enter your phoneNo:" onChange={(event)=>setphoneno(event.target.value)}></input>
                <input type="text" placeholder="enter your age" onChange={(event)=>setage(event.target.value)}></input>
                <input type="password" placeholder="enter your password" onChange={(event)=>setpassword(event.target.value)}></input>
                <label>
                 select your gender:   
                <input type="checkbox" value="male" className="checkbox" onChange={(event)=>setgender(event.target.value)}/> 
                <span>Male</span>
                <input type="checkbox" value="female" onChange={(event)=>setgender(event.target.value)}/> Female
                </label>
                <br/>
                <button onClick={handlesignin}>sign In</button>
                <p>already have an account?<button onClick={()=>setShowlogin(true)}>login</button></p>
                </form>
                )}
                
           </div>
        </React.Fragment>
    )
}

export default Signin;

