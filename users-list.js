import React from 'react'
import Users from './users.js'
const APIList = [
  'https://reqres.in/api/users?page=1',
  'https://reqres.in/api/users?page=2',
  'https://reqres.in/api/users?page=3',
  'https://reqres.in/api/users?page=4'
]

export const instruments = ['Guitar', 'Drums', 'Keys', 'Bass Guitar', 'Vocals']
const locations = ['Anaheim', 'Brea', 'Fullerton', 'Irvine']

export default class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      hasSearched: this.props.status,
      selectedInstrument: this.props.match
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
      this.props.getUsers([...allUsers])
    })
  }
  createUser(user) {
    var selectInstrument =
      instruments[Math.floor(Math.random() * instruments.length)]
    var selectLocation = locations[Math.floor(Math.random() * locations.length)]
    const $user = {
      firstName: user.first_name,
      lastName: user.last_name,
      photo: user.avatar,
      location: selectLocation + ', CA',
      instrument: selectInstrument,
      map:
        'https://maps.googleapis.com/maps/api/staticmap?center=' +
        selectLocation +
        '+CA&zoom=13&size=350x200&maptype=roadmap&key=AIzaSyAUlIqQSrS2xt-aAvD3ve4LAMmH1-jKMO0',
      id: user.id
    }
    return $user
  }
  render() {
    const $instrument = this.props.match
    const $users = this.state.users
    let matchedUsers = $users.filter(
      user => user.instrument === this.props.match
    )
    const hasSearched = this.state.hasSearched
    if ($instrument === 'All') {
      matchedUsers = $users
    }
    return (
      <div className="container">
        {hasSearched ? (
          <Users
            selector={this.props.selector}
            width="150px"
            count={matchedUsers.length}
            users={matchedUsers}
            margin="45px"
          />
        ) : (
          <div>
            <h2 className="text-center my-5">Featured Users</h2>
            <Users
              selector={this.props.selector}
              width="200px"
              count="4"
              margin="42px"
              users={this.state.users}
            />
          </div>
        )}
      </div>
    )
  }
}
