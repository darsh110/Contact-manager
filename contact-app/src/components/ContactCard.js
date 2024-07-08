import React from "react";


const ContactCard=(props)=>{
    const {id, name, email}= props.contacts;
    return(
        <div className="item">
           
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"0.5rem"}}></i>
           
            </div>
            </div>
    );
       
};
export default ContactCard;