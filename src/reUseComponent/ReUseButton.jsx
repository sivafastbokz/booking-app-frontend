import React from 'react';

function ReUseButton({onClick ,label ,className}){
    return(
        <>
         <button onClick={onClick}  className={`${className}`}>{label}</button>
        </>
    )
}
export default ReUseButton;