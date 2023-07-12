import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'
import AxiosClient from '../Api';
import ReUseButton from '../reUseComponent/ReUseButton';
import TagReUse from '../reUseComponent/TagReUse';
import TableReUse from '../reUseComponent/TableReUse';

const table = ['SERVICE NAME','SERVICE PRICE','ACTION']

function Service(){
    const[services,setservices]=useState([]);
    const servicelist = () =>{
        try {
            AxiosClient.get('/servicelist').then((res)=>{
            setservices(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
       servicelist();
    },[])

    const navigate = useNavigate();
    
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
                    <td><ReUseButton onClick={()=>navigate('/appointmentpage')} className='bookbtn' label='BOOK NOW!'/></td>
                </tr>
            ))}
           </table>
          <ReUseButton className='btn' onClick={logOut} label='LOGOUT'/>
        </React.Fragment>
    )
}
export default Service;