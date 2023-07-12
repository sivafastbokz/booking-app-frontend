import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './service.css'
import AxiosClient from "../Api";


function Service(){
    const[services,setservices]=useState([]);
    const servicelist = () =>{
        AxiosClient.get('/servicelist').then((res)=>{
            setservices(res.data)
        })
    }
    useEffect(()=>{
       servicelist();
    },[])

    const navigate = useNavigate();
    
    const Logout =()=>{
        localStorage.removeItem('token')
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
                    <td><button className="bookbtn" onClick={booknow}>BOOK NOW!</button></td>
                </tr>
            ))}
            
           </table>
          <button className="btn" onClick={Logout}>LOGOUT</button>
        </React.Fragment>
    )
}
export default Service;