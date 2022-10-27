
import { useState,useEffect } from 'react';
import Addcontact from './Addcontact';
import './App.css';
import Contactlist from './Contactlist';
import Header from './Header';

function App() {

  const [Contacts, setContacts] = useState([])

  // const Contacts = [
  //   {
  //     sno: 1,
  //     name: "Rahul",
  //     email: "bruh@gmail.com"
  //   },
  //   {
  //     sno: 2,
  //     name: "Rahulxx",
  //     email: "jdbc@gmail.com"
  //   },
  //   {
  //     sno: 3,
  //     name: "kkkk",
  //     email: "skcn@gmail.com"
  //   }
  // ]

  const addcontacthandler = (contact) => {
    console.log(contact);
   
    setContacts([...Contacts, contact]);
  }

  const LOCAL_STORAGE_KEY = "contacts";

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Contacts))
  },[Contacts]);

  useEffect(() => {
    let retrive = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retrive);
  },[]);
  
  


  return (
    <>
      <Header/>
      <Addcontact addcontacthandler = {addcontacthandler}/>
      <Contactlist Contactsprops ={Contacts}></Contactlist>
    </>
   
  );
}

export default App;
