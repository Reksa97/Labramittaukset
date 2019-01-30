import React, { Component } from 'react'
import { mount } from 'enzyme'
import MeasurementForm from './MeasurementForm'

class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newName: '',
            newUnit: '',
            newRefLow: '',
            newRefHigh: '',
            editMeasurementId: null
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <MeasurementForm
                submitMeasurementForm={this.props.onSubmit}
                handleFieldChange={this.onChange}
                name={this.state.name}
                unit={this.state.unit}
                refLow={this.state.refLow}
                refHigh={this.state.refHigh}
                editMeasurementId={this.state.editMeasurementId}
            />
        )
    }
}

describe('<MeasurementForm />', () => {
    let wrapper, mockOnSubmit
    beforeEach(() => {
        mockOnSubmit = jest.fn()
        wrapper = mount(<Wrapper onSubmit={mockOnSubmit} />)
    })

    it('renders all input fields', () => {
        const inputs = wrapper.find('input')
        expect(inputs.length).toEqual(4)
    })

    it('name input changes state', () => {
        const nameInput = wrapper.find({ name: 'newName' })
        nameInput.first().simulate('change', {
            target: {
                name: 'newName',
                value: 'Hemoglobiini'
            }
        })
        expect(wrapper.state().newName).toBe('Hemoglobiini')
    })
    it('unit input changes state', () => {
        const unitInput = wrapper.find({ name: 'newUnit' })
        unitInput.first().simulate('change', {
            target: {
                name: 'newUnit',
                value: 'g/mol'
            }
        })
        expect(wrapper.state().newUnit).toBe('g/mol')
    })
    it('refLow input changes state', () => {
        const refLowInput = wrapper.find({ name: 'newRefLow' })
        refLowInput.first().simulate('change', {
            target: {
                name: 'newRefLow',
                value: '134'
            }
        })
        expect(wrapper.state().newRefLow).toBe('134')
    })
    it('rewHigh input changes state', () => {
        const refHighInput = wrapper.find({ name: 'newRefHigh' })
        refHighInput.first().simulate('change', {
            target: {
                name: 'newRefHigh',
                value: '160'
            }
        })
        expect(wrapper.state().newRefHigh).toBe('160')
    })
    it('submit calls handler', () => {
        const submitButton = wrapper.find('button')
        submitButton.simulate('submit')
        expect(mockOnSubmit.mock.calls.length).toBe(1)
    })
})