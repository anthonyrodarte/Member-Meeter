import React from 'react'
import ReactDOM from 'react-dom'

const API = 'https://reqres.in/api/users'

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch(API)
      .then(response => {
        return response.json()
      })
      .then(users => {
        users.data.map(this.createUser).forEach($user => {
          this.setState({ users: [...this.state.users, $user] })
        })
      })
  }
  createUser(user) {
    const $user = {
      firstName: user.first_name,
      lastName: user.last_name,
      photo: user.avatar,
      location: 'Anaheim, CA',
      instrument: 'Guitar',
      id: user.id
    }
    return $user
  }
  render() {
    return (
      <div>
        {this.state.users.map($user => (
          <div key={$user.id} className="card" style={{ width: '200px' }}>
            <img
              className="card-img-top"
              src={$user.photo}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">
                {$user.firstName} {$user.lastName}
              </h5>
              <p className="card-text">{$user.location}</p>
              <p className="card-text">{$user.instrument}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

ReactDOM.render(<Users />, document.querySelector('#app'))
