import React from 'react'
import Measurement from './Measurement'
import { Table, Header } from 'semantic-ui-react'

const Measurements = ({ measurements, editMeasurement, deleteMeasurement }) => {
    return (
        <div>
            <Header as='h2' style={{marginTop: '2em'}} textAlign='center'>Mittaukset</Header>
            <Table striped bordered="true" hover="true" unstackable>
                <thead>
                    <tr>
                        <th>Tunnus</th>
                        <th>Nimi</th>
                        <th>Mittayksikkö</th>
                        <th>Viitearvo (ala)</th>
                        <th>Viitearvo (ylä)</th>
                        <th>Muokkaa</th>
                        <th>Poista</th>
                    </tr>
                </thead>
                <tbody>
                    {measurements.map(measurement =>
                        <Measurement key={measurement.id}
                            measurement={measurement}
                            editMeasurement={editMeasurement}
                            deleteMeasurement={deleteMeasurement} />)}
                </tbody>
            </Table>
        </div>
    )
}

export default Measurements