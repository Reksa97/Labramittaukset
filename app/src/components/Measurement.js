import React from 'react'

const Measurement = ({ measurement, deleteMeasurement, editMeasurement }) => {
    return (
        <tr>
            <td>{measurement.id}</td>
            <td>{measurement.name}</td>
            <td>{measurement.unit}</td>
            <td>{measurement.refLow}</td>
            <td>{measurement.refHigh}</td>
            <td>
                <button className="edit" onClick={editMeasurement(measurement.id)}>Muokkaa</button>
            </td>
            <td>
                <button className="delete" onClick={deleteMeasurement(measurement.id)}>POISTA</button>
            </td>
        </tr>
    )
}
export default Measurement