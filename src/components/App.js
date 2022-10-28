
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


import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

export const App = () => (
  <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign=''>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
)
