 
import './App.css';

import React, { Component } from 'react'
var { btnStyle } = require('./Styles');
class App extends Component {
  render() {
    return (
      <div>
        <h1>Style in React</h1>
        <button style={btnStyle}>Button Style</button>

      </div>
    )
  }
}

export default App;
