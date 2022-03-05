import React from 'react'
import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin'


export default function PostList(props) {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="title"/>
            <DateField source="publishedAt"/>
            <EditButton basePath="/posts"/>
            <DeleteButton basePath="/posts"/>
        </Datagrid>
    </List>
  )
}
