import React from 'react'
import Contactcard from './Contactcard'

const Contactlist = (props) => {
    console.log(props);

    const renderContacts = props.Contactsprops.map((contact) => {
      return(
        <Contactcard contact={contact}></Contactcard>

      );
    })
  return (
    <div className='ui celled list'>
      {renderContacts}
    </div>
  )
}

export default Contactlist

