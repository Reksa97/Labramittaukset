import React from 'react'
import { Form, Button, Segment, Header, Divider, Label } from 'semantic-ui-react'

const MeasurementForm = ({ cancelEdit, handleFieldChange, submitMeasurementForm, name, unit, refLow, refHigh, editMeasurementId }) => {
    const editing = (editMeasurementId !== null)
    const aFieldIsEmpty = (name==='' || unit==='' || refLow==='' || refHigh==='')

    if (editing) {
        return (
            <Segment stacked>
                <Header size='large'>{`Muokkaa mittausta ${editMeasurementId}`}</Header>
                <Divider />
                <Form onSubmit={submitMeasurementForm}>
                    <Form.Field>
                        <label>Nimi:</label>
                        <input value={name} name='newName'
                            onChange={handleFieldChange}
                            placeholder='nimi' />
                    </Form.Field>
                    <Form.Field>
                        <label>Mittayksikkö:</label>
                        <input value={unit} name='newUnit'
                            onChange={handleFieldChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Viitearvo (ala):</label>
                        <input value={refLow} name='newRefLow'
                            onChange={handleFieldChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Viitearvo (ylä):</label>
                        <input value={refHigh} name='newRefHigh'
                            onChange={handleFieldChange} />
                    </Form.Field>
                    {aFieldIsEmpty ?
                        <Label pointing>
                            Mikään kenttä ei voi olla tyhjä
                        </Label> :
                        <Button type="submit">Muokkaa</Button> }
                    
                    <Button onClick={cancelEdit}>Peru</Button>
                </Form>
            </Segment>
        )
    }

    return (
        <Segment>
            <Header size='large'>Lisää uusi mittaus</Header>
            <Divider />
            <Form onSubmit={submitMeasurementForm}>
                <Form.Field>
                    <label>Nimi:</label>
                    <input value={name} name='newName'
                        onChange={handleFieldChange} />
                </Form.Field>
                <Form.Field>
                    <label>Mittayksikkö:</label>
                    <input value={unit} name='newUnit'
                        onChange={handleFieldChange} />
                </Form.Field>
                <Form.Field>
                    <label>Viitearvo (ala):</label>
                    <input value={refLow} name='newRefLow'
                        onChange={handleFieldChange} />
                </Form.Field>
                <Form.Field>
                    <label>Viitearvo (ylä):</label>
                    <input value={refHigh} name='newRefHigh'
                        onChange={handleFieldChange} />
                </Form.Field>
                {aFieldIsEmpty ?
                    <Label pointing>
                        Mikään kenttä ei voi olla tyhjä
                    </Label> :
                    <Button type="submit">Lisää</Button> }
            </Form>
        </Segment>
    )
}
export default MeasurementForm