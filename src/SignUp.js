import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super()

    this.state={
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      fName: false,
      lName: false,
      pass: false,
      rpass: false
    }

  }

  handleSubmit = () => {
    if(this.state.firstName!==""){
      console.log(this.state.firstName)
      this.setState({fName:true})
    }
    if(this.state.firstName===""){
      console.log("Blank")
    }

    if(this.state.lastName!==""){
      this.setState({lName:true})
    }
    if(this.state.password!==""){
      this.setState({pass:true})
    }
    if(this.state.repeatPassword!=="" && this.state.reapeatPassword===this.state.password){
      this.setState({rpass:true})
    }
  }

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value})
  }

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value})
  }

  handleRepeatPassword = (e) => {
    this.setState({
      repeatPassword: e.target.value})
  }

  render() { //none for render bec built in na sa render that they get access to this
    return (
      <div>
        <legend> Sign Up </legend>
        <div className="input-row">
          <input
          label="First Name"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleFirstName}/>
        </div>
        <div className="input-row">
          <input
          label="Last Name"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleLastName}/>
        </div>
        <div className="input-row">
          <input
          label="Password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePassword}/>
        </div>
        <div className="input-row">
          <input
          label="Repeat Password"
          placeholder="Repeat Password"
          value={this.state.repeatPassword}
          onChange={this.handleRepeatPassword}/>
        </div>
        <legend> Birthday </legend>
        <form className="input-row">
          <input type="date" name="bday"/>
        </form>
        <div>
        <button onClick={this.handleSubmit} className="signup-button"> SUBMIT </button>
        <div className="error-message">
          {
            !this.fName? 'F EXISTS':''
          }
        </div>
        <p className="error-message"></p>
        <p className="error-message"></p>
        <p className="error-message"></p>
        </div>


      </div>
    );
  }
}

export default SignUp;
