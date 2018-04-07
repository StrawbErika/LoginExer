import React, { Component } from 'react';
import './SignUpForm.css'
import {provinces} from './provinces'
class SignUp extends Component {
  constructor() {
    super()

    this.state={
      firstName: "",
      lastName: "",

      password: "",
      repeatPassword:"",

      birthday: "",
      province: null,
      municipalities: "",

      noFName: true,
      noLName: true,
      noPass: true,
      noRPass: true,
      eqRPass: true,
      noBirthday: true,

      noProvince: true
    }
  }

  handleSubmit=() => {
    if(this.state.firstName===""){
      this.setState({noFName:false})
    }
    if(this.state.lastName===""){
      this.setState({noLName:false})
    }
    if(this.state.password===""){
      this.setState({noPass:false})
    }
    if(this.state.repeatPassword===""){
      this.setState({noRPass:false})
    }else if(this.state.repeatPassword!==this.state.password){
      this.setState({eqRPass:false})
    }
    if(this.state.birthday===""){
      this.setState({noBirthday:false})
    }else{
      var splitted=this.state.birthday.split("-");
      var age=2018-splitted[0];
      if(age < 18){
        this.setState({noBirthday:false})
      }
    }
    if(this.state.province===null){
      this.setState({noProvince:false})
    }
  }

  handleProvince=(e) => {
    this.setState({
      province: e.target.value})
  }

  handleMunicipalities=(e) => {
    this.setState({
      municipalities: e.target.value})
  }

  handleBirthday=(e) => {
    this.setState({
      birthday: e.target.value})
  }

  handleFirstName=(e) => {
    this.setState({
      firstName: e.target.value})
  }

  handleLastName=(e) => {
    this.setState({
      lastName: e.target.value})
  }

  handlePassword=(e) => {
    this.setState({
      password: e.target.value})
  }

  handleRepeatPassword=(e) => {
    this.setState({
      repeatPassword: e.target.value})
  }

  render() {
    return (
      <div className="body-placement">
        <legend> Sign Up </legend>

        <div className="input-row">
          <input
          label="First Name"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleFirstName}
          className="input"/>

          <div className="error-message">
          {
            this.state.noFName === false? 'First name is required':''
          }
          </div>
        </div>

        <div className="input-row">
          <input
          label="Last Name"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleLastName}
          className="input"/>

          <div className="error-message">
          {
            this.state.noLName === false? 'Last name is required':''
          }
          </div>
        </div>

        <div className="input-row">
          <input
          label="Password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePassword}
          className="input"
          type="password"/>

          <div className="error-message">
          {
            this.state.noPass === false? 'Password is required':''
          }
          </div>
        </div>

        <div className="input-row">
          <input
          label="Repeat Password"
          placeholder="Repeat Password"
          value={this.state.repeatPassword}
          onChange={this.handleRepeatPassword}
          className="input"
          type="password"/>

          <div className="error-message">
          {
            this.state.noRPass === false? 'Please repeat password':''
          }
          {
            this.state.eqRPass === false? "Passwords don't match":""
          }
          </div>
        </div>
        <legend> Birthday </legend>
        <div className="input-row">
          <input
          className="input"
          type="date"
          name="bday"
          value={this.state.birthday}
          onChange={this.handleBirthday}/>

          <div className="error-message">
          {
            this.state.noBirthday === false? 'You have to be at least 18 to sign up':''
          }
          </div>
        </div>
        <div className="input-row">
          <select className="dropdown" onChange={this.handleProvince}>
            <option> Province </option>
            {
              provinces.map((province, index) => {
                return(<option  key={province.id} value={province.id}>{province.name} </option>)
              })
            }
          </select>

        </div>

        <div className="input-row">
          <select className="dropdown" onChange={this.handleMunicipalities}>
            {
                this.state.province !== null ?
                provinces[this.state.province].municipalities.map((municipality, index) => {
                  return(<option key={index} value={municipality}>{municipality} </option>)
                })
                : <option>Municipality </option>

              }
            }
          </select>

        </div>


        <button onClick={this.handleSubmit}  className="input-row" id="signup-button"> SUBMIT </button>
      </div>
    );
  }
}

export default SignUp;
