import React from 'react'
import User from './logo192.png';

const Contactcard = (props) => {

    const deletewoho = (propps) => {
        

    }
  return (
    <div className='item'>
        <img className='ui avatar image' src={User} />
    <div className='content'>
      <div className="header">{props.contact.name}</div>
      <div>{props.contact.email}</div>
  </div>
  <i className="trash alternate outline icon"
  style={{ color: "red", marginTop: "7px" }} onClick = {deletewoho}></i>
  </div>
  )
}

export default Contactcard

