import React from 'react'

const MeasurementForm = ({ handleFieldChange, submitMeasurementForm, name, unit, refLow, refHigh }) => {
    return (
        <div>
            <h3>Lisää uusi mittaus</h3>
            <form onSubmit={submitMeasurementForm}>
                <div>
                    nimi:
                        <input value={name} name='newName'
                        onChange={handleFieldChange} />
                </div>
                <div>
                    mittayksikkö:
                        <input value={unit} name='newUnit'
                        onChange={handleFieldChange} />
                </div>
                <div>
                    viitearvo (ala):
                        <input value={refLow} name='newRefLow'
                        onChange={handleFieldChange} />
                </div>
                <div>
                    viitearvo (ylä):
                        <input value={refHigh} name='newRefHigh'
                        onChange={handleFieldChange} />
                </div>
                <div>
                    <button type="submit">Lisää</button>
                </div>
            </form>
        </div >
    )
}
export default MeasurementForm