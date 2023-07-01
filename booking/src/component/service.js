import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '/home/siva/Documents/booking-app-frontend/booking/src/component/service.css'
import axios from "axios";

function Service(){
    const[services,setservices]=useState([]);
    const servicelist = () =>{
        axios.get('http://localhost:5000/servicelist').then((res)=>{
            setservices(res.data)
        })
    }
    useEffect(()=>{
       servicelist();
    },[])

    const navigate = useNavigate();
    
    const Homepage =()=>{
        navigate("/")
    }

    const booknow=()=>{
        navigate('/appointmentpage')
    }

    return(
        <React.Fragment>
          <h1>SERVICE LIST</h1>
           <table>
            <tr>
                <th>SERVICE NAME</th>
                <th>SERVICE CHARGE</th>
                <th>ACTION</th>
            </tr>
            
            {services.map((service,index)=>(
                <tr key={index}>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceCharge}</td>
                    <td><button className="bookbtn" onClick={()=>booknow(service)}>BOOK NOW!</button></td>
                </tr>
            ))}
            
           </table>
          <button className="btn" onClick={Homepage}>BACK TO HOME</button>
        </React.Fragment>
    )
}
export default Service;