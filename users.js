import React from 'react'

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

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    const memberPromises = APIList.map(function(url) {
      return fetch(url).then(res => res.json())
    })
    Promise.all(memberPromises).then(bandMembers => {
      const allMembers = {
        users: bandMembers.reduce((allMembers, members) => {
          return (allMembers = [...allMembers, ...members.data])
        }, [])
      }
      const allUsers = allMembers.users.map(this.createUser)
      this.setState({
        users: [...allUsers]
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
        <div className="row justify-content-between" style={{}}>
          {this.state.users.map($user => (
            <div
              key={$user.id}
              className="card"
              style={{ width: '200px', margin: '30px' }}
            >
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
