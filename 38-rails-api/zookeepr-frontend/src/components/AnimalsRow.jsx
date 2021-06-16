import React from 'react'
import {Table} from 'semantic-ui-react'


export default function AnimalsRow({animal}) {
    return (
        <Table.Row>
            <Table.Cell>{animal.name}</Table.Cell>
            <Table.Cell>{animal.gender}</Table.Cell>
            <Table.Cell>{animal.species.name}</Table.Cell>
        </Table.Row>
    )
}
