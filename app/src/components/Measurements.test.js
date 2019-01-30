import React from 'react'
import { shallow } from 'enzyme'
import Measurements from './Measurements'
const measurements = [
    {
        name: 'Natrium',
        unit: 'mmol/l',
        refLow: '137',
        refHigh: '145',
        id: 1
    }, 
    {
        name: 'Hemoglobiini',
        unit: 'g/l',
        refLow: '134',
        refHigh: '160',
        id: 2
    }, 
    {
        name: 'LDL-kolesteroli',
        unit: 'mmol/l',
        refLow: '0',
        refHigh: '3',
        id: 3
    }
]
describe('<Measurements />', () => {
    let measurementsComponent, mockEditHandler, mockDeleteHandler
    beforeEach(() => {
        mockEditHandler = jest.fn()
        mockDeleteHandler = jest.fn()
        measurementsComponent = shallow(
            <Measurements measurements={measurements}
                editMeasurement={mockEditHandler}
                deleteMeasurement={mockDeleteHandler} />)
    })
    it('renders all measurements passed to it', () => {
        expect(measurementsComponent.find('Measurement').length).toEqual(3)
    })

    it('has column for all measurement fields', () => {
        expect(measurementsComponent.find('th').length).toEqual(5)
    })
})