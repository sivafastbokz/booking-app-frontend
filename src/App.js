import React from 'react';
import Signin from './component/UserSignIn';
import Service from './component/Service';
import Login from './component/UserLogin';
import Appointment from './component/Appointment';
import Apppointmentdetails from './component/AppoinntmentDetails';
import Privateroutes from './privateroutes';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
             <Route path='/' element={<Signin />}></Route>
             <Route path='/loginpage' element={<Login/>}></Route>
             <Route element={<Privateroutes/>}>
             <Route path='/servicepage' element={<Service />}></Route>
             <Route path='/appointmentpage' element={<Appointment/>}></Route>
             <Route path='/appointmentdetails' element={<Apppointmentdetails/>}></Route>
            </Route>
        </Routes>
    </Router>

  );
}

export default App;
