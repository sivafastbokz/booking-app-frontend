import React, { useState } from 'react';
import './userlogin.css'
import AxiosClient from '../Api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';

function Login(){
    const[loginname,setloginname]=useState('')
    const[loginpassword,setloginpassword]=useState('')
     
    const navigate = useNavigate();

    const login = async(event)=>{
        event.preventDefault();
        try {
            
            const response = await AxiosClient.post('/customerlogin',{
            customerName:loginname,
            customerPassword:loginpassword
       });
        const{status,data}=response;
        if(status === 200){
            const{status:loginstatus,data:token}=data;
            if(loginstatus === 'loged in sucessfully'){
                Cookies.set('token',token,{secure:true,sameSite:"Strict"});
                localStorage.setItem('token',token)
                const tokendecode = jwtDecode(token)
                const userId = tokendecode.userId
                alert('login successfull');
                navigate(`/servicepage?name=${encodeURIComponent(loginname)}&userid=${userId}`)
            }
        }
        } catch (error) {
            console.log(error)
            alert('invalid username or password')
        }
    }
  
     const signup=()=>{
        navigate('/')
     }

    return(
        <React.Fragment>
            <form className='loginfield'>
                <TagReUse label='LOGIN'/>
                <input type='text' className='input' placeholder='enter the name' value={loginname} onChange={(event)=>setloginname(event.target.value)}></input>
                <input type='password' className='input' placeholder='enter the password' value={loginpassword} onChange={(event)=>setloginpassword(event.target.value)}></input>
                <p>Don't have an account?<ReUseButton onClick={signup} label='SIGNUP'/></p>
                <br/>
                <ReUseButton className='loginbtn2' onClick={login} label='LOGIN'/>
               </form>
        </React.Fragment>
    )
}
export default Login;