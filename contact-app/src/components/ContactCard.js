import React from "react";
import tag from "../images/tag.png";

const ContactCard=(props)=>{
    const {id, name, email}= props.contacts;
    return(
        <div className="item"> 
        <img className="ui avatar image" src={tag} alt="tag"/>
           <div className="content">
               <div className="header">{name}</div>
               <div >{email} </div>
            </div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"1rem"}} onClick={()=> props.clickHandler(id)}></i>
            </div>
    );
       
};
export default ContactCard;