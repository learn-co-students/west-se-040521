import React from 'react'
import {Table} from 'semantic-ui-react'
import AnimalRow from './AnimalsRow'

export default function AnimalsTable({animals}) {

    const renderRows = () => animals.map(a => <AnimalRow key={a.id} animal={a}/>)
    return (
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                    <Table.HeaderCell>Species</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {renderRows()}
            </Table.Body>
        </Table>
    )
}
