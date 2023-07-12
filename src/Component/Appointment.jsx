import React, {useEffect, useState}from 'react'
import './appointment.css'
import { useNavigate } from 'react-router-dom'
import AxiosClient from '../Api'
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';
import AppointmentOptionReuse from '../reUseComponent/AppointmentOptionReuse';

function Appointment(){
    const[service,setservices]=useState('')
    const[date,setdate]=useState('')
    const[appointmentData,setAppointmentData]=useState([])
    const navigate = useNavigate();
  
    const conform=async(event)=>{
        event.preventDefault()
        try {
            const token = localStorage.getItem('token');
            await AxiosClient.post('/appointments',{
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
    
    const appointmentlist = async()=>{
       try {
        await AxiosClient.get('/servicelist').then((res)=>{
            setAppointmentData(res.data)
        })
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(()=>{
        appointmentlist();
    },[])

    return(
        <React.Fragment>
            <TagReUse label='Book Your Appointment NOW!'/>
            <form className='appointmentfield'>
            <br/>
            <label className='choose'>Choose The Service You Want:</label>
            <select className='input'onChange={(event)=>setservices(event.target.value)}>
                <AppointmentOptionReuse label='Select Down The List'/>
                {appointmentData.map((data)=>(
                <AppointmentOptionReuse label={data.serviceName}/>
                ))}
            </select>
            <label className='choose'>Choose Your Date&Time:</label>
            <input className='input'  type='datetime-local'  onChange={(event)=>setdate(event.target.value)}></input>
            <ReUseButton className='conformbtn' onClick={conform} label='Conform'/>
            </form>
            <ReUseButton className='servicebtn' onClick={()=>navigate('/servicepage')} label='BACK'/>
            <ReUseButton className='appointmentbtn' onClick={()=>navigate('/appointmentdetails')} label='View Appointments'/>
        </React.Fragment>
    )
}
export default Appointment;