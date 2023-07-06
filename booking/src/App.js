import React from "react";
import Signin from "./component/Usersignin";
import Service from "./component/service";
import Login from "./component/userlogin";
import Appointment from "./component/appointment";
import Apppointmentdetails from "./component/appoinntmentdetails";
import Privateroutes from "./component/privateroutes";
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
