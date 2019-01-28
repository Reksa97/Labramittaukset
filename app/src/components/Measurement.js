import React from 'react'

const Measurements = ({ measurements, editMeasurement, deleteMeasurement }) => {
    return (
        <div>
            <h2>Mittaukset</h2>
            <table>
                <thead>
                    <tr>
                        <th>tunnus</th>
                        <th>nimi</th>
                        <th>mittayksikkö</th>
                        <th>viitearvo (ala)</th>
                        <th>viitearvo (ylä)</th>
                    </tr>

                </thead>
                <tbody>
                    {measurements.map(measurement =>
                        <Measurement key={measurement.id} 
                            measurement={measurement}
                            editMeasurement={editMeasurement}
                            deleteMeasurement={deleteMeasurement} />)}
                </tbody>
            </table>
        </div>
    )
}

const Measurement = ({ measurement, deleteMeasurement, editMeasurement }) => {
    return (
        <tr>
            <td>{measurement.id}</td>
            <td>{measurement.name}</td>
            <td>{measurement.unit}</td>
            <td>{measurement.refLow}</td>
            <td>{measurement.refHigh}</td>
            <td>
                <button onClick={editMeasurement(measurement.id)}>Muokkaa</button>
            </td>
            <td>
                <button onClick={deleteMeasurement(measurement.id)}>POISTA</button>
            </td>
        </tr>
    )
}
export default Measurements