import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'


export default function PostList(props) {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="email"/>
            <EditButton basePath="/users"/>
            <DeleteButton basePath="/users"/>
        </Datagrid>
    </List>
  )
}
