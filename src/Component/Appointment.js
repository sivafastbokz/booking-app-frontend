import React, {useState}from 'react'
 import './appointment.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Appointment(){
    const[service,setservices]=useState('')
    const[date,setdate]=useState('')
    const navigate = useNavigate();
    const handleback=()=>{
        navigate('/servicepage')
    }
    
    const conform=async(event)=>{
        event.preventDefault()
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/appointments',{
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
            <h1>Book Your Appointment NOW!</h1>
            <form className='appointmentfield'>
            <br/>
            <label className='choose'>Choose The Service You Want:</label>
            <select className='input'onChange={(event)=>setservices(event.target.value)}>
            <option value="Haircut">Haircut</option> 
            <option value="Facial">Facial</option> 
            <option value="Massage">Massage</option> 
            <option value="Hair colour">Hair colour</option> 
            <option value="Hair Straightening">Hair Straightening</option> 
            <option value="Hair Care And Washing">Hair Care And Washing</option> 
            </select>
            <label className='choose'>Choose Your Convenient Date:</label>
            <input className='input'  type='datetime-local'  onChange={(event)=>setdate(event.target.value)}></input>
            <button className='conformbtn' onClick={conform}>Conform</button>
            </form>
          <button className='servicebtn' onClick={handleback}>BACK</button>
          <button className='appointmentbtn'onClick={viewappointments}>View Appointments</button>
        </React.Fragment>
    )
}
export default Appointment;