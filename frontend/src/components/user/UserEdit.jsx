import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

export default function PostEdit(props) {
  return (
    <Edit title="Edit Post" {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
            <TextInput source="email"/>
        </SimpleForm>
    </Edit>
  )
}
