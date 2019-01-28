import React, { Component } from 'react';
import './App.css';
import Measurements from './components/Measurement'
import measurementService from './services/measurements'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        measurements: []
    }
    console.log('constructor')
}

async componentDidMount() {
    console.log('did mount')

    const response = await measurementService.getAll()
    this.setState({ measurements: response })
    console.log(this.state.measurements)
}

  render() {
    return (
      <div className="App">
        <h1>Labramittaukset</h1>
        <Measurements measurements={this.state.measurements} />
      </div>
    );
  }
}

export default App;