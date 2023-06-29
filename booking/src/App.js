import React from "react";
import Signin from "./component/Usersignin";
import Service from "./component/service";
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
  <>
    <Router>
        <Routes>
            <Route exact path="/" Component={Signin}></Route>
            <Route exact path="/servicepage" Component={Service}></Route>
        </Routes>
    </Router>
  </>
  );
}

export default App;
