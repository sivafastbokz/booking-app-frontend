import React, { useState } from 'react';
import SideBar from './SideBar';
import TagReUse from '../reUseComponent/TagReUse';
import ReUseButton from '../reUseComponent/ReUseButton';
import axiosClient from '../axiosClient';
import './addService.css';


function AddService(){
     const[serviceName,setServiceName]=useState('');
     const[servicePrice,setServicePrice]=useState('');
     const[error,setError]=useState('');

     const addServcie=async()=>{
         if(!serviceName || !servicePrice){
            setError('Please Fill In All The Fields')
            return;
         }
         try {
            await axiosClient.post('/services',{
                serviceName:serviceName,
                serviceCharge:servicePrice
            })
         } catch (error) {
            console.log(error)
         }
     }

    return(
        <React.Fragment>
        <SideBar/>
        <TagReUse label='Add Service'/>
        <form className='addservicefield'>
           <input type='text' className='input-box' placeholder='service name' onChange={(event)=>setServiceName(event.target.value)}></input>
           <input type='number' className='input-box' placeholder='service price'onChange={(event)=>setServicePrice(event.target.value)}></input>
           <ReUseButton className='add-btn' label='ADD' onClick={addServcie}/>
           <br/>
           {error&&<small className='error-msg'>{error}</small>}
        </form>
        </React.Fragment>
    )
}

export default AddService;