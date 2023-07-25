import React from 'react';
import SideBar from './SideBar';
import Signin from './UserSignIn';



function CreateUser(){
   return(
    <React.Fragment>
      <SideBar/>
      <Signin />
    </React.Fragment>
   ) 
}
export default CreateUser;