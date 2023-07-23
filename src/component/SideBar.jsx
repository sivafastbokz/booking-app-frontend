import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sideBar.css';

function SideBar(){
    const navigate = useNavigate();
    return(
         <React.Fragment>
             <div className='sideBar'>
                <ul>
                    <li><button className='icon' title='servicepage' onClick={()=>navigate('/servicepage')}><i class="fa-solid fa-house fa-xl"></i></button></li>
                    <li><button className='icon' title='AddService' onClick={()=>navigate('/addservice')}><i class="fa-solid fa-list fa-xl"></i></button></li>
                    <li><button className='icon' title='UserList' onClick={()=>navigate('/userlist')}><i class="fa-solid fa-users fa-xl"></i></button></li>
                </ul>
            </div>
         </React.Fragment>
    )
}
export default SideBar;