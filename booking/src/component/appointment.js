import React, {useState}from 'react'
import '/home/siva/Documents/booking-app-frontend/booking/src/component/appointment.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Appointment(){
    const[Name,setname]=useState('');
    const[service,setservices]=useState('')
    const[date,setdate]=useState('')
    const navigate = useNavigate();
    const handleback=()=>{
        navigate('/servicepage')
    }
    
    const conform=async(event)=>{
        event.preventDefault()
        try {
            await axios.post('http://localhost:5000/appointments',{
                appointmentBookedBy:Name,
                appointmentBookedFor:service,
                appointmentDate:date
            })
            alert("appointment booked successfully")
        } catch (error) {
            console.log(error)
        }
    }
   
    return(
        <React.Fragment>
            <h1>Book Your Appointment NOW!</h1>
            <form className='appointmentfield'>
            <input className='input' type='text' placeholder='enter your name'onChange={(event)=>setname(event.target.value)}></input>
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
            <input className='input'  type='date'  onChange={(event)=>setdate(event.target.value)}></input>
            <button className='conformbtn' onClick={conform}>Conform</button>
            </form>
          <button className='servicebtn' onClick={handleback}>BACK</button>
        </React.Fragment>
    )
}
export default Appointment;