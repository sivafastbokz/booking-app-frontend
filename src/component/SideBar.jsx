import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './sideBar.css';

function SideBar(){
    const navigate = useNavigate();
    const location = useLocation();
    return(
         <React.Fragment>
             <div className='sideBar'>
                <ul>
                    <li><button className={`icon ${location.pathname === '/servicepage' ? 'active':''}`} title='servicepage' onClick={()=>navigate('/servicepage')}><i class="fa-solid fa-house fa-xl"></i></button></li>
                    <br/>
                    <li><button className={`icon ${location.pathname === '/addservice' ? 'active':''}`} title='AddService' onClick={()=>navigate('/addservice')}><i class="fa-solid fa-square-plus fa-2xl"></i></button></li>
                    <br/>
                    <li><button className={`icon ${location.pathname === '/userlist' ? 'active':''}`} title='UserList' onClick={()=>navigate('/userlist')}><i class="fa-solid fa-users fa-xl"></i></button></li>
                    <br/>
                    <li><button className={`icon ${location.pathname === '/createuser' ? 'active':''}`} title='createUser' onClick={()=>navigate('/createuser')}><i class="fa-solid fa-user-plus fa-xl"></i></button></li>
                </ul>
            </div>
         </React.Fragment>
    )
}
export default SideBar;