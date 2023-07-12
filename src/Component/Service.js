import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'
import AxiosClient from '../Api';
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';
import TableReUse from '../reUseComponent/TableReUse';


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
    
    const logOut =()=>{
        localStorage.removeItem('token')
        navigate("/")

    }

    const bookNow=()=>{
        navigate('/appointmentpage')
    }

    return(
        <React.Fragment>
          <TagReUse label='SERVICE LIST'/>
           <table>
            <tr>
                <TableReUse  label='SERVICE NAME'/>
                <TableReUse  label='SERVICE CHARGE'/>
                <TableReUse  label='ACTION'/>
            </tr>
            
            {services.map((service,index)=>(
                <tr key={index}>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceCharge}</td>
                    <td><ReUseButton onClick={bookNow} className='bookbtn' label='BOOK NOW!'/></td>
                </tr>
            ))}
            
           </table>
          <ReUseButton className='btn' onClick={logOut} label='LOGOUT'/>
        </React.Fragment>
    )
}
export default Service;