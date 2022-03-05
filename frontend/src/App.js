import React from 'react'

import {Admin, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import PostCreate from './components/post/PostCreate';
import PostEdit from './components/post/PostEdit';
import PostList from './components/post/PostList';
import UserCreate from './components/user/UserCreate';
import UserEdit from './components/user/UserEdit';
import UserList from './components/user/UserList';

function App() {
  return (
    <Admin dataProvider={jsonServerProvider('http://localhost:3000')}>
      <Resource 
        name='posts'
        create={PostCreate}
        edit={PostEdit}
        list={PostList}
      />
      <Resource 
        name='users'
        create={UserCreate}
        edit={UserEdit}
        list={UserList}
      />
    </Admin>
  );
}

export default App;
