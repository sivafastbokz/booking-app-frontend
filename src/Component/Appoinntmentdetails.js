import React, { useEffect, useState } from "react";
// import '/home/siva/Documents/booking-app-frontend/src/Component/Appointmentdetails.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Apppointmentdetails(){
    const[appointments,setappointments]=useState([])
    const navigate = useNavigate();
    const handleback=()=>{
        navigate('/appointmentpage')
    }
     
    const appointmentDetails = async()=>{
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/appointmentlist',{
                headers:{
                  'Content-type':'application/json',
                   Authorization: `Bearer ${token}`,
                },
            });
            const appointmentList =response.data;
            setappointments(appointmentList);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
       appointmentDetails();
    },[])

    return(
        <React.Fragment>
          <h1>Your Appointments</h1>
          <table>
            <tr>
                <th>SERVICE NAME</th>
                <th>SERVICE DATE & TIME</th>
            </tr>
            {appointments.map((appointment)=>(
                <tr key={appointment._id}>
                    <td>{appointment.appointmentBookedFor}</td>
                    <td>{appointment.appointmentDate}</td>
                </tr>
            ))}
          </table>
          <button className="backbtn" onClick={handleback}>BACK</button>
        </React.Fragment>
    )
}
export default Apppointmentdetails;