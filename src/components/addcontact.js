import React, { Component } from 'react'

export default class Addcontact extends Component {

  state= {
    name: "",
    email: ""
  }

  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("All the fields are mandatory!");
      return;
    }
    console.log(this.state);
    this.props.addcontacthandler(this.state);
    this.setState({name: "", email: ""});
  }

  

  render() {
  
    return (
      <div className='ui main' style={{padding: 7}}>
         <h2>Add Contacts</h2> 
        <form className='ui form' onSubmit={this.add} style={{padding: 6}}>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' placeholder='Name' 
                value={this.state.name} 
                onChange={(e) => this.setState({name: e.target.value})}/>
            </div>          
            <div className='field'>
                <label>Email</label>
                <input type='text' name='email' placeholder='Email'
                value={this.state.email} 
                onChange={(e) => this.setState({email: e.target.value})}/>
            </div>

            <button className='ui button blue' >Add</button>
            </form>
        </div>
    )
  }
}


                
      
    