import React from 'react'
import Measurement from './Measurement'

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

export default Measurements