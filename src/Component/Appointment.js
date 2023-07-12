import React, {useState}from 'react'
import './appointment.css'
import { useNavigate } from 'react-router-dom'
import AxiosClient from '../Api'
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';

function Appointment(){
    const[service,setservices]=useState('')
    const[date,setdate]=useState('')
    const navigate = useNavigate();
    const handleback=()=>{
        navigate('/servicepage')
    }
    console.log(service)
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
            alert("appointment booked successfully")
        } catch (error) {
            console.log(error)
        }
    }
    const viewappointments=()=>{
        navigate('/appointmentdetails')
    }
   
    return(
        <React.Fragment>
            <TagReUse label='Book Your Appointment NOW!'/>
            <form className='appointmentfield'>
            <br/>
            <label className='choose'>Choose The Service You Want:</label>
            <select className='input'onChange={(event)=>setservices(event.target.value)}>
            <option>Select Down The List</option>
            <option value="Haircut">Haircut</option> 
            <option value="Facial">Facial</option> 
            <option value="Massage">Massage</option> 
            <option value="Hair colour">Hair colour</option> 
            <option value="Hair Straightening">Hair Straightening</option> 
            <option value="Hair Care And Washing">Hair Care And Washing</option> 
            </select>
            <label className='choose'>Choose Your Date&Time:</label>
            <input className='input'  type='datetime-local'  onChange={(event)=>setdate(event.target.value)}></input>
            <ReUseButton className='conformbtn' onClick={conform} label='Conform'/>
            </form>
          <ReUseButton className='servicebtn' onClick={handleback} label='BACK'/>
          <ReUseButton className='appointmentbtn' onClick={viewappointments} label='View Appointments'/>
        </React.Fragment>
    )
}
export default Appointment;