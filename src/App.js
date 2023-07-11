import React from "react";
import Signin from './Usersignin';
import Service from './service';
import Login from './userlogin';
import Appointment from './appointment';
import Apppointmentdetails from './appoinntmentdetails';
import Privateroutes from './privateroutes';
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
