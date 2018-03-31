import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super()

    this.state={
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword:"",
      noFName: true,
      noLName: true,
      noPass: true,
      noRPass: true
    }

  }

  handleSubmit = () => {
    if(this.state.firstName===""){
      console.log(this.state.firstName)
      this.setState({noFName:false})
    }

    if(this.state.lastName===""){
      this.setState({noLName:false})
    }
    if(this.state.password===""){
      this.setState({noPass:false})
    }
    if(this.state.repeatPassword==="" && this.state.reapeatPassword!==this.state.password){
      this.setState({noRPass:false})
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
        <div className="error-message">
        {
          this.state.noFName === false? 'Input something':''
        }
        </div>

        <div className="input-row">
          <input
          label="Last Name"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleLastName}/>
        </div>
        <div className="error-message">
          {
            this.state.noLName === false? 'Input something':''
          }
        </div>

        <div className="input-row">
          <input
          label="Password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePassword}/>
        </div>
        <div className="error-message">
          {
            this.state.noPass === false? 'Input something':''
          }
        </div>

        <div className="input-row">
          <input
          label="Repeat Password"
          placeholder="Repeat Password"
          value={this.state.repeatPassword}
          onChange={this.handleRepeatPassword}/>
        </div>
        <div className="error-message">
          {
            this.state.noRPass === false? 'Input something':''
          }
        </div>

        <legend> Birthday </legend>
        <form className="input-row">
          <input type="date" name="bday"/>
        </form>
        <button onClick={this.handleSubmit} className="signup-button"> SUBMIT </button>




      </div>
    );
  }
}

export default SignUp;
