import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Measurement = ({ measurement, deleteMeasurement, editMeasurement }) => {
    return (
        <tr>
            <td>{measurement.id}</td>
            <td>{measurement.name}</td>
            <td>{measurement.unit}</td>
            <td>{measurement.refLow}</td>
            <td>{measurement.refHigh}</td>
            <td>
                <Button icon className="edit"
                    onClick={editMeasurement(measurement.id)}>
                    <Icon name='edit' />
                </Button>
            </td>
            <td>
                <Button icon className="delete" type="delete"
                    onClick={deleteMeasurement(measurement.id)}>
                    <Icon name='trash' />
                </Button>
            </td>
        </tr>
    )
}
export default Measurement