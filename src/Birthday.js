import React, { Component } from 'react';

class Birthday extends Component {
  constructor() { 
    super()
    
    this.state = {
      month: 0,
      day: 0,
      year: 0
    }
  }
  
  render() { //none for render bec built in na sa render that they get access to this
    return (
      <div className = "input-row">
        <legend> Birthday </legend>
        <form className = "input-row">
          <input type="date" name="bday"/>
        </form>
      </div>
    );
  }
}

export default Birthday;
