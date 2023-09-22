import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';
import LabelReUse from '../reUseComponent/LabelReUse';
import './userSignIn.css';

function Signin({buttonLabel='SIGNUP',navigateTo='/loginpage',style={cursor:'pointer'},stylingP={fontStyle:'oblique'}}){
  const[name,setName]=useState('');
  const[phoneno,setPhoneNo]=useState('')
  const[age,setAge]=useState('')
  const[gender,setGender]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState('')
  const[phoneNoError,setPhonenoError]=useState('')
  
  const navigate = useNavigate();
   
  const userSignIn = async (e) => {
    e.preventDefault();
    if (!name || !phoneno || !age || !gender || !password) {
      setError('Please Fill In All The Fields');
      return;
    }
    try {
      if(phoneno.length !== 10){
        setPhonenoError('enter a valid phonenumber');
        return;
       }
      const response = await axiosClient.post('/customersignin', {
        customerName: name,
        customerPhoneNo: phoneno,
        customerAge: age,
        customerGender: gender,
        customerPassword: password,
      });
      
      if (response.data === 'phone number already exists') {
         alert('phonenumber already exists.');
         return;
       }
        else {
        alert('Account created successfully');
        navigate(navigateTo);
       }
    } catch (error) {
      console.log('something went worng');
    }
  };
  
    return(
        <React.Fragment>
           <div className='signInForm'>
                <form className='signin'>
                <TagReUse label='CREATE ACCOUNT' className='signin-h1'/>
                <input type='text' placeholder='enter your name' className='input'  onChange={(event)=>setName(event.target.value)}></input>
                <input type='number' placeholder='enter your phoneNo'  className='input' pattern='[0-10]'  onChange={(event)=>{setPhoneNo(event.target.value)}}></input>
                {phoneNoError && <h6>{phoneNoError}</h6>}
                <input type='number' placeholder='enter your age' className='input'  onChange={(event)=>setAge(event.target.value)}></input>
                <input type='password' placeholder='enter your password' className='input'  onChange={(event)=>setPassword(event.target.value)}></input>
                <LabelReUse className='label1' label='Select YourGender:'/>  
                <input type='checkbox' value='male' className='checkbox'  onChange={(event)=>setGender(event.target.value)}/> 
                <LabelReUse className='label2'label='MALE'/>
                <input type='checkbox' value='female' className='checkbox' onChange={(event)=>setGender(event.target.value)}/> 
                <LabelReUse className='label3' label='FEMALE'/>
                <br/>
                {error && <small>{error}</small>}
                <br/>
                <br/>
                <ReUseButton onClick={userSignIn} label={buttonLabel}  className='signin-btn'/>
                <br/>
                <br/>
                <p style={stylingP}>Already Have An Account?<ReUseButton onClick={()=>navigate('/loginpage')} label='LOGIN' className='login-btn'style={style}/></p>
                </form>
           </div>
        </React.Fragment>
    )
}

export default Signin;

