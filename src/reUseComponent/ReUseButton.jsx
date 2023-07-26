import React from 'react';

function ReUseButton({onClick ,label ,className,style}){
    return(
        <>
         <button onClick={onClick}  className={className} style={style}>{label}</button>
        </>
    )
}
export default ReUseButton;