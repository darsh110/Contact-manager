import React, { useState,useEffect } from "react";
import Header from "./Header";
import{ v4 as uuid} from"uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]= useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ??[]); 

  const addContactHandler=(contact)=>{
    console.log(contacts);
  setContacts([...contacts,{id:uuid(),...contact}]);
  };
const removeContactHandler=(id)=>{
  const newContactList=contacts.filter((contact)=>{
    return contact.id!==id;
});
setContacts(newContactList);
};

 
  


  useEffect(()=>{
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
   <div>
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>  
    <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}


export default App;
