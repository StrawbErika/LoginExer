import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: ""
    }
    this.handleFirstName=this.handleFirstName.bind(this)
    this.handleLastName=this.handleLastName.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.handleRepeatPassword=this.handleRepeatPassword.bind(this)

  }

  handleFirstName(e){
    this.setState({
      firstName: e.target.value})
  }
  handleLastName(e){
    this.setState({
      lastName: e.target.value})
  }
  handlePassword(e){
    this.setState({
      password: e.target.value})
  }
  handleRepeatPassword(e){
    this.setState({
      repeatPassword: e.target.value})
  }

  render() { //none for render bec built in na sa render that they get access to this
    return (
      <div>
        <legend> Sign Up </legend>
        <div className= "input-row">
          <input
          label ="First Name"
          placeholder="First Name"
          // value={this.state.firstName}
          handler={this.handleFirstName}/>
        </div>
        <div className= "input-row">
          <input
          label ="Last Name"
          placeholder="Last Name"
          value={this.state.lastName}
          handler={this.handleLastName}/>
        </div>
        <div className= "input-row">
          <input
          label ="Password"
          placeholder="Password"
          value={this.state.password}
          handler={this.handlePassword}/>
        </div>
        <div className= "input-row">
          <input
          label ="Repeat Password"
          placeholder="Repeat Password"
          value={this.state.repeatPassword}
          handler={this.handleRepeatPassword}/>
        </div>

      </div>
    );
  }
}

export default SignUp;
