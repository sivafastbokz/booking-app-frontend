import React, { useEffect, useState } from 'react';
import './appointmentDetails.css'
import { useNavigate } from 'react-router-dom'
import AxiosClient from '../Api';
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';
import TableReUse from '../reUseComponent/TableReUse';

function Apppointmentdetails(){
    const[appointments,setappointments]=useState([])
    const navigate = useNavigate();
    const handleback=()=>{
        navigate('/appointmentpage')
    }
     
    const appointmentDetails = async()=>{
        try {
            const token = localStorage.getItem('token');
            const response = await AxiosClient.get('/appointmentlist',{
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
          <TagReUse label='YOUR APPOINTMENTS'/>
          <table>
            <tr>
                <TableReUse label='SERVICE NAME'/>
                <TableReUse label='SERVICE DATE&TIME'/>
            </tr>
            {appointments.map((appointment)=>(
                <tr key={appointment._id}>
                    <td>{appointment.appointmentBookedFor}</td>
                    <td>{appointment.appointmentDate}</td>
                </tr>
            ))}
          </table>
          <ReUseButton className='backbtn' onClick={handleback} label='BACK'/>
        </React.Fragment>
    )
}
export default Apppointmentdetails;