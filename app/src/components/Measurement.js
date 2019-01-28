import React from 'react'

const Measurements = ({ measurements }) => {
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
                        <Measurement key={measurement.id} measurement={measurement} />)}
                </tbody>
            </table>
        </div>
    )
}

const Measurement = ({ measurement }) => {
    return (
        <tr>
            <td>{measurement.id}</td>
            <td>{measurement.name}</td>
            <td>{measurement.unit}</td>
            <td>{measurement.refLow}</td>
            <td>{measurement.refHigh}</td>
        </tr>
    )
}
export default Measurements