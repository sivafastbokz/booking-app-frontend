import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import TagReUse from '../reUseComponent/TagReUse';
import ReUseButton from '../reUseComponent/ReUseButton';
import axiosClient from '../axiosClient';
import './addService.css';


function AddService(){
     const[serviceName,setServiceName]=useState('');
     const[servicePrice,setServicePrice]=useState('');
     const[error,setError]=useState('');
     const navigate =useNavigate();

     const addServcie=async(event)=>{
      event.preventDefault()
         if(!serviceName || !servicePrice){
            setError('Please Fill In All The Fields')
            return;
         }
         try {
               const response = await axiosClient.post('/services',{
                serviceName:serviceName,
                serviceCharge:servicePrice
            })
            if(response.data === 'service already exists'){
               alert('service already exists')
               return;
            }else{
               alert('service added successfully')
               navigate('/servicepage')
            }
         } catch (error) {
            console.log(error)
         }
     }

    return(
        <React.Fragment>
        <SideBar/>
        <div className='container'>
        <TagReUse label='Add Service'className='addservicepage-h1'/>
        <form className='addservicefield'>
           <input type='text' className='input-box' placeholder='service name' onChange={(event)=>setServiceName(event.target.value)}></input>
           <input type='number' className='input-box' placeholder='service price'onChange={(event)=>setServicePrice(event.target.value)}></input>
           <ReUseButton className='add-btn' label='ADD' onClick={addServcie}/>
           <br/>
           {error&&<small className='error-msg'>{error}</small>}
        </form>
        </div>
       
        </React.Fragment>
    )
}

export default AddService;