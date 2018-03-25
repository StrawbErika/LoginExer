import React, { Component } from 'react';

class Location extends Component {
  constructor() { 
    super()
    
    this.state = {
    }
  }
  
  render() { //none for render bec built in na sa render that they get access to this
    return (
      <div>
        <div >
          <dropdown name="bday" placeholder="h"/>
        </div>    
      </div>
      // <div>
      // </div>
    );
  }
}

export default Location;
