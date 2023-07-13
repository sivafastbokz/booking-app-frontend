import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';
import TableReUse from '../reUseComponent/TableReUse';
import './service.css'

const table = ['SERVICE NAME','SERVICE PRICE','ACTION']

function Service(){

    const navigate = useNavigate();
    const[services,setServices]=useState([]);

    const servicelist = () =>{
        try {
            axiosClient.get('/servicelist').then((res)=>{
            setServices(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
       servicelist();
    },[])

    const logOut =()=>{
        localStorage.removeItem('token')
        navigate('/')

    }

    return(
        <React.Fragment>
          <TagReUse label='SERVICE LIST'/>
           <table>
            <tr>
                {table.map((Heading)=>{
                    return(
                        <TableReUse label={Heading}/>
                    )
                })}
            </tr>
            {services.map((service,index)=>(
                <tr key={index}>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceCharge}</td>
                    <td><ReUseButton onClick={()=>navigate('/appointmentpage')} className='book-btn' label='BOOK NOW!'/></td>
                </tr>
            ))}
           </table>
          <ReUseButton className='btn' onClick={logOut} label='LOGOUT'/>
        </React.Fragment>
    )
}
export default Service;