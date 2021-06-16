import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default function PageHeader() {
    return (
        <Header style={{backgroundColor: 'orange', width: '100%'}} as='h2' icon>
            <Icon name='paw' />
            Zookeepr
            <Header.Subheader>
                Keep track of your animals
            </Header.Subheader>
        </Header>
    )
}
