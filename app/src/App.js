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
            newRefHigh: '',
            editMeasurementId: null
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

        const name = this.state.newName
        const unit = this.state.newUnit
        const refLow = this.state.newRefLow
        const refHigh = this.state.newRefHigh

        const editing = (this.state.editMeasurementId !== null)
        if (editing) {
            const id = this.state.editMeasurementId
            this.updateMeasurement(id, name, unit, refLow, refHigh)
        } else {
            this.createMeasurement(name, unit, refLow, refHigh)
        }

    }

    updateMeasurement = async (id, name, unit, refLow, refHigh) => {
        await measurementService.update(id, { name, unit, refLow, refHigh })

        this.setState({
            measurements: this.state.measurements.map(measurement => {
                if (measurement.id === id) {
                    measurement.name = name
                    measurement.unit = unit
                    measurement.refLow = refLow
                    measurement.refHigh = refHigh
                }
                return measurement
            }),
            editMeasurementId: null,
            newName: '',
            newUnit: '',
            newRefHigh: '',
            newRefLow: ''
        })
    }

    createMeasurement = async (name, unit, refLow, refHigh) => {
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
        this.setState({
            measurements: this.state.measurements.concat(newMeasurement),
            editMeasurementId: null,
            newName: '',
            newUnit: '',
            newRefLow: '',
            newRefHigh: ''
        })
    }

    deleteMeasurementClick = (id) => {
        return async () => {
            if (window.confirm('Poistetaanko mittaus ' + id + '?')) {
                await measurementService.remove(id)
                this.setState({
                    measurements: this.state.measurements.filter(measurement => measurement.id !== id)
                })
            }
        }
    }

    editMeasurementClick = (id) => {
        return () => {
            const m = this.state.measurements.find(m => m.id === id)
            this.setState({
                newName: m.name,
                newUnit: m.unit,
                newRefLow: m.refLow,
                newRefHigh: m.refHigh,
                editMeasurementId: m.id
            })
        }
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
                    refHigh={this.state.newRefHigh}
                    editMeasurementId={this.state.editMeasurementId} />
                <Measurements measurements={this.state.measurements}
                    editMeasurement={this.editMeasurementClick}
                    deleteMeasurement={this.deleteMeasurementClick} />
            </div>
        );
    }
}

export default App;