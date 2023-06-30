import React from "react";
import Signin from "./component/Usersignin";
import Service from "./component/service";
import Login from "./component/userlogin";
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
  <>
    <Router>
        <Routes>
            <Route  path="/" element={<Signin />}></Route>
            <Route  path="/servicepage" element={<Service />}></Route>
            <Route path="/loginpage" element={<Login/>}></Route>
        </Routes>
    </Router>
  </>
  );
}

export default App;
