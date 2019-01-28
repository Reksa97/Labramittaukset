import React, { Component } from 'react';
import './App.css';
import Measurements from './components/Measurement'

const measurements = [
    {
      id: 1,
      name: "Hemoglobiini",
      unit: "g/l",
      refLow: 134,
      refHigh: 160
    },
    {
      id: 2,
      name: "LDL-kolesteroli",
      unit: "mmol/l",
      refLow: 0,
      refHigh: 3
    },
    {      
      id: 3,
      name: "Natrium (P-Na)",
      unit: "mmol/l",
      refLow: 137,
      refHigh: 145
    }
  ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Labramittaukset</h1>
        <Measurements measurements={measurements} />
      </div>
    );
  }
}

export default App;