import React from 'react'
import { Create, DateInput, SimpleForm, TextInput } from 'react-admin'

export default function PostCreate(props) {
  return (
    <Create title="Create New Post" {...props}>
        <SimpleForm>
            <TextInput source='title' />
            <TextInput multiline source='body' />
            <DateInput label='Published' source='publishedAt' />
        </SimpleForm>
    </Create>
  )
}
