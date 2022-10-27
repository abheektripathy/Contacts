import React, { Component } from 'react'

export default class Addcontact extends Component {
  render() {

    
    


    return (
      <div className='ui main' style={{padding: 7}}>
         <h2>Add Contacts</h2>
     
        
        <form className='ui form' style={{padding: 6}}>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' placeholder='Name'/>
            </div>
           
          
            <div className='field'>
                <label>Email</label>
                <input type='text' name='email' placeholder='Email'/>
            </div>

            <button className='ui button blue' >Add</button>
            </form>
        </div>
    )
  }
}


                
      
    