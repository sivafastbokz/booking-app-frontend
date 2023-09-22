import React, {useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../axiosClient'
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';
import AppointmentOptionReuse from '../reUseComponent/AppointmentOptionReuse';
import LabelReUse from '../reUseComponent/LabelReUse';
import './appointment.css'


function Appointment(){
    const[service,setServices]=useState('')
    const[date,setDate]=useState('')
    const[serviceData,setServiceData]=useState([])
    const[error,serError]=useState('');
    const navigate = useNavigate();
  
    const conform=async(event)=>{
        event.preventDefault()
         if(!service ||!date){
            serError('Please Fill In All The Fields')
            return;
         }
        try {
            const token = localStorage.getItem('token');
            await axiosClient.post('/appointments',{
                appointmentBookedFor:service,
                appointmentDate:date,
            },{
                headers:{
                    'Content-Type':'application/json',
                     Authorization: `Bearer ${token}`
                }
            })
            alert('appointment booked successfully')
        } catch (error) {
            console.log(error)
        }
    }
    
    const serviceList = async()=>{
       try {
        await axiosClient.get('/servicelist').then((res)=>{
            setServiceData(res.data)
        })
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(()=>{
        serviceList();
    },[])

    return(
        <React.Fragment>
            <TagReUse label='Book Your Appointment NOW!' className='appointmentpage-h1'/>
            <form className='appointmentfield'>
            <br/>
            <LabelReUse className='choose' label='Choose The Service You Want:'/>
            <select className='input'onChange={(event)=>setServices(event.target.value)} required>
                <AppointmentOptionReuse label='Select Down The List'/>
                {serviceData.map((data)=>(
                <AppointmentOptionReuse label={data.serviceName}/>
                ))}
            </select>
            <LabelReUse className='choose' label='Choose Your Date&Time:'/>
            <input className='input'  type='datetime-local'  onChange={(event)=>setDate(event.target.value)} required></input>
            {error &&<small>{error}</small>}
            <ReUseButton className='conform-btn' onClick={conform} label='Conform'/>
            </form>
            <ReUseButton className='service-btn' onClick={()=>navigate('/servicepage')} label='BACK'/>
            <ReUseButton className='appointment-btn' onClick={()=>navigate('/appointmentdetails')} label='View Appointments'/>
        </React.Fragment>
    )
}
export default Appointment;