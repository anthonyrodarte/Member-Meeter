import React from 'react'
import ReactDOM from 'react-dom'
import UsersList from './users-list.js'
import Heading from './background.js'
import Search from './search.js'

ReactDOM.render(
  <div>
    <Heading />
    <Search />
    <UsersList />
  </div>,
  document.querySelector('#app')
)
