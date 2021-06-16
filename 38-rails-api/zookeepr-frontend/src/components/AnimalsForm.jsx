import React, { useState } from 'react'
import { Form, Input, Button, Select } from 'semantic-ui-react';


export default function AnimalForm({addAnimal}) {
   
    const [values, setValues] = useState({
        name: '',
        gender: 2,
        species: ''
    })
    
    const genderOptions = [
        {key: 'm', text: 'Male', value: 0},
        {key: 'f', text: 'Female', value: 1},
        {key: 'nb', text: 'Nonbinary', value: 2},
    ]

    const handleChange = (e, data) => {
        setValues({...values, [data.name]: data.value})
    }
    
    const handleSubmit = () => {
        addAnimal(values)
        setValues({
            name: '',
            gender: 2,
            species: ''
        })
    }
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-name'
                    control={Input}
                    label='Name'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                 />
                <Form.Field
                    
                    control={Select}
                    options={genderOptions}
                    label={{children: 'Gender', htmlFor: 'form-select-control-gender'}}
                    value={values.gender}
                    name="gender"
                    onChange={handleChange}
                 />
                <Form.Field
                    id='form-input-control-species'
                    control={Input}
                    label='Species'
                    name='species'
                    value={values.species}
                    onChange={handleChange}
                 />
            </Form.Group>
            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Add Animal'
                // label='Label with htmlFor'
                onClick={handleSubmit}
            />
        </Form>
    )
}