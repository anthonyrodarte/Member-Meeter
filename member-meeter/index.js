import React from 'react'
import ReactDOM from 'react-dom'

const APIList = [
  'https://reqres.in/api/users?page=1',
  'https://reqres.in/api/users?page=2',
  'https://reqres.in/api/users?page=3',
  'https://reqres.in/api/users?page=4'
]

const instruments = [
  'Guitar',
  'Drums',
  'Keyboard',
  'Piano',
  'Bass Guitar',
  'Vocals'
]
const distances = [3, 5, 10, 15, 25, 40, 50]

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    const API = APIList.map(x => x)
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
    var selectInstrument =
      instruments[Math.floor(Math.random() * instruments.length)]
    var selectDistance = distances[Math.floor(Math.random() * distances.length)]
    const $user = {
      firstName: user.first_name,
      lastName: user.last_name,
      photo: user.avatar,
      location: selectDistance + ' miles',
      instrument: selectInstrument,
      id: user.id
    }
    return $user
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-between">
          {this.state.users.map($user => (
            <div key={$user.id} className="card" style={{ width: '200px' }}>
              <img
                className="card-img-top"
                src={$user.photo}
                alt="User Photo"
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
      </div>
    )
  }
}

ReactDOM.render(<Users />, document.querySelector('#app'))
