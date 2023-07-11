import React, { useEffect, useState } from "react";
import { Outlet,Navigate } from "react-router-dom";

function Privateroutes(){
   const[authenticate,setauthenticate]=useState(true);
   const token = localStorage.getItem('token');
   useEffect(() => {
    if (token) {
      setauthenticate(true);
    }
  }, [token]);

  if (!authenticate || !token) {
    return <Navigate to="/loginpage" replace />;
  }

  return <Outlet />;
}
export default Privateroutes;