import React from 'react'

import {Admin, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/People';

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
        icon={PostIcon}
        create={PostCreate}
        edit={PostEdit}
        list={PostList}
      />
      <Resource 
        name='users'
        icon={UserIcon}
        create={UserCreate}
        edit={UserEdit}
        list={UserList}
      />
    </Admin>
  );
}

export default App;
