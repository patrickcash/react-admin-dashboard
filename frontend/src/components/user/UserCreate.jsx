import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

export default function UserCreate(props) {
  return (
    <Create title="Create New User" {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='email' />
        </SimpleForm>
    </Create>
  )
}
