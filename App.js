 
import './App.css';

import React, { Component } from 'react'

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

const btnStyle = {
  color: "white",
  background: 'red',
  padding: '10px',
  borderRadius: '3px',
  border:'none'
}
export default App;
