import React, { Component } from 'react';
import './App.css';
import Measurements from './components/Measurement'
import MeasurementForm from './components/MeasurementForm'
import measurementService from './services/measurements'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            measurements: [],
            newName: '',
            newUnit: '',
            newRefLow: '',
            newRefHigh: ''
        }
        console.log('constructor')
    }

    async componentDidMount() {
        const response = await measurementService.getAll()
        await this.setState({ measurements: response })
        console.log('did mount')
    }

    handleFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitMeasurementForm = async (event) => {
        event.preventDefault()
        const measurements = this.state.measurements
        const name = this.state.newName
        const unit = this.state.newUnit
        const refLow = this.state.newRefLow
        const refHigh = this.state.newRefHigh

        const measurementObject = {
            name: name,
            unit: unit,
            refLow: refLow,
            refHigh: refHigh
        }
        const response = await measurementService.create(measurementObject)
        const newMeasurement = {
            name: response.data.name,
            unit: response.data.unit,
            refLow: response.data.refLow,
            refHigh: response.data.refHigh,
            id: response.data.id
        }
        await this.setState({
            measurements: measurements.concat(newMeasurement),
            newName: '',
            newUnit: '',
            newRefLow: '',
            newRefHigh: ''
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Labramittaukset</h1>
                <MeasurementForm
                    handleFieldChange={this.handleFieldChange}
                    submitMeasurementForm={this.submitMeasurementForm}
                    name={this.state.newName}
                    unit={this.state.newUnit}
                    refLow={this.state.newRefLow}
                    refHigh={this.state.newRefHigh} />
                <Measurements measurements={this.state.measurements} />
            </div>
        );
    }
}

export default App;