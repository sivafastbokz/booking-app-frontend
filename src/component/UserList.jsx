import React from 'react';
import TagReUse from '../reUseComponent/TagReUse';
import SideBar from './SideBar';
import './userList.css';

function UserList(){
    return(
     <React.Fragment>
        <SideBar/>
       <TagReUse label='UserList'/>
     </React.Fragment>
    )
}
export default UserList;