import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';

function App() {
  const contacts=[
    {
      id:"1",
      name:"Rahul",
      email:"rahul@gmail.com",
    },

    {
      id:"2",
      name:"Dravid",
      email:"dravid@gmail.com",
    }

  ];
  return (
   <div>
    <Header/>
    <AddContact/>  
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
