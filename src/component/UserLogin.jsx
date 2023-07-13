import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';
import jwtDecode from 'jwt-decode';
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';
import './userLogin.css'

function Login(){
    const[loginname,setLoginName]=useState('')
    const[loginpassword,setLoginPassword]=useState('')
    const[error,setError]=useState('');
     
    const navigate = useNavigate();

    const login = async(event)=>{
        event.preventDefault();
        if(!loginname||!loginpassword){
            setError('Please Fill In All The Fields')
            return;
        }
        try {
            const response = await axiosClient.post('/customerlogin',{
            customerName:loginname,
            customerPassword:loginpassword
       });
        const{status,data}=response;
        if(status === 200){
            const{status:loginstatus,data:token}=data;
            if(loginstatus === 'loged in sucessfully'){
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
  
    return(
        <React.Fragment>
            <form className='loginfield'>
                <TagReUse label='LOGIN'/>
                <input type='text' className='input' placeholder='enter the name' value={loginname} onChange={(event)=>setLoginName(event.target.value)}></input>
                <input type='password' className='input' placeholder='enter the password' value={loginpassword} onChange={(event)=>setLoginPassword(event.target.value)}></input>
                <p>Don't have an account?<ReUseButton onClick={()=>navigate('/')} label='SIGNUP'/></p>
                <br/>
                <ReUseButton className='login-btn2' onClick={login} label='LOGIN'/>
                {error&&<small className='error-msg'>{error}</small>}
            </form>
        </React.Fragment>
    )
}
export default Login;