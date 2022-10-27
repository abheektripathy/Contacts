
import { useState } from 'react';
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



  return (
    <>
      <Header />
      <Addcontact/>
      <Contactlist Contactsprops ={Contacts}></Contactlist>
    </>
   
  );
}

export default App;
