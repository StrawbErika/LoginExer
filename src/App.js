import React, { Component } from 'react';
import SignUp from './SignUp'
import Birthday from './Birthday'
import Location from './Location'
import './SignUpForm.css'

class App extends Component {
  render() {
    return (
      <div>
        <SignUp/>
        <Birthday/>
        <Location/>
      </div>
    );
  }
}

export default App;
