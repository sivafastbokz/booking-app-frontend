import React, { useEffect, useState } from 'react';
import TagReUse from '../reUseComponent/TagReUse';
import SideBar from './SideBar';
import axiosClient from '../axiosClient';
import TableReUse from '../reUseComponent/TableReUse';
import './userList.css';

const table = ['CustomerName','CustomerPhoneNo','CustomerAge','CustomerGender']

function UserList(){
  const[customerList,setCustomerList]=useState([]);

  const customerData = () =>{
    try {
       axiosClient.get('/customerlist').then((res)=>{
        setCustomerList(res.data)
       })
    } catch (error) {
      console.log(error)
    } 
  } 
  useEffect(()=>{
    customerData();
  },[])

    return(
     <React.Fragment>
      <SideBar/>
      <div className='box'>
       <TagReUse label='CustomerList'className='userlist-h1'/>
        <table>
          <tr>
           {table.map((Heading)=>{
             return(
              <TableReUse label={Heading}/>
             )
           })}
          </tr>
         {customerList.map((data,index)=>(
           <tr key={index}>
           <td>{data.customerName}</td>
           <td>{data.customerPhoneNo}</td>
           <td>{data.customerAge}</td>
           <td>{data.customerGender}</td>
         </tr>
         ))}
        </table>
      </div>
     </React.Fragment>
    )
}
export default UserList;