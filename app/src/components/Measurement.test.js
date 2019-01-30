import React from 'react'
import { shallow } from 'enzyme'
import Measurement from './Measurement'

const measurement = {
    name: 'Natrium',
    unit: 'mmol/l',
    refLow: '137',
    refHigh: '145',
    id: 1
}
describe('<Measurement />', () => {
    let measurementComponent, mockEditHandler, mockDeleteHandler
    beforeEach(() => {
        mockEditHandler = jest.fn()
        mockDeleteHandler = jest.fn()
        measurementComponent = shallow(
            <Measurement measurement={measurement}
                editMeasurement={mockEditHandler}
                deleteMeasurement={mockDeleteHandler} />)
    })

    it('renders name', () => {
        expect(measurementComponent.contains(measurement.name)).toEqual(true)
    })
    it('renders unit', () => {
        expect(measurementComponent.contains(measurement.unit)).toEqual(true)
    })
    it('renders low limit of reference values', () => {
        expect(measurementComponent.contains(measurement.refLow)).toEqual(true)
    })
    it('renders high limit of reference values', () => {
        expect(measurementComponent.contains(measurement.refHigh)).toEqual(true)
    })
    it('renders id', () => {
        expect(measurementComponent.contains(measurement.id)).toEqual(true)
    })

    it('edit button calls handler', () => {
        const editButton = measurementComponent.find('.edit')
        editButton.simulate('click')
        expect(mockEditHandler.mock.calls.length).toBe(1)
    })

    it('delete button calls handler', () => {
        const deleteButton = measurementComponent.find('.delete')
        deleteButton.simulate('click')
        expect(mockDeleteHandler.mock.calls.length).toBe(1)
    })
})