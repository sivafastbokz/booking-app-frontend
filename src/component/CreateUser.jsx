import React from 'react';
import SideBar from './SideBar';
import Signin from './UserSignIn';


function CreateUser(){
   return(
    <React.Fragment>
      <SideBar/>
      <Signin buttonLabel='CREATE' navigateTo='/userlist'style={{display:'none'}} stylingP={{display:'none'}}/>
    </React.Fragment>
   ) 
}
export default CreateUser;