import React from "react";
import Signin from './Component/Usersignin';
import Service from './Component/Service';
import Login from './Component/Userlogin';
import Appointment from './Component/Appointment';
import Apppointmentdetails from './Component/Appoinntmentdetails';
import Privateroutes from "./privateroutes";
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="/loginpage" element={<Login/>}></Route>
            <Route element={<Privateroutes/>}>
             <Route path="/servicepage" element={<Service />}></Route>
             <Route path="/appointmentpage" element={<Appointment/>}></Route>
             <Route path="/appointmentdetails" element={<Apppointmentdetails/>}></Route>
            </Route>
        </Routes>
    </Router>

  );
}

export default App;
