import React from 'react'
import ReactDOM from 'react-dom'
import Users from './users.js'
import Heading from './background.js'
import Search from './search.js'

ReactDOM.render(<Search />, document.querySelector('#search'))
ReactDOM.render(<Heading />, document.querySelector('#header'))
ReactDOM.render(<Users />, document.querySelector('#app'))
