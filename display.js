import React from 'react'
import UsersList from './users-list.js'
import Heading from './heading.js'
import Search from './search.js'
import { instruments } from './users-list.js'
import MusicianDetails from './musician-details.js'

export default class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearched: false,
      selectedInstrument: '',
      selectedMusician: null,
      users: []
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.instrumentFilter = this.instrumentFilter.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.selectMusician = this.selectMusician.bind(this)
  }
  handleReset() {
    this.setState({ hasSearched: false })
    this.setState({ selectedInstrument: '' })
  }
  handleSearch() {
    this.setState({ hasSearched: true })
  }
  instrumentFilter(event) {
    this.setState({ selectedInstrument: event.target.textContent })
  }
  selectMusician(event) {
    const $id = event.target.id
    const selectedMusician = this.state.users.filter(user => user.id == $id)
    this.setState({
      selectedMusician: selectedMusician
    })
    console.log(this.state.selectedMusician)
  }
  getUsers(users) {
    this.setState({ users: users })
  }
  render() {
    const hasSearched = this.state.hasSearched
    return (
      <div>
        {hasSearched ? (
          <div>
            <Heading reset={this.handleReset} />
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <Search
                    filter={this.instrumentFilter}
                    search={this.handleSearch}
                    status={this.state.hasSearched}
                  />
                </div>
                <div className="col">
                  <h3 className="text-center"> Nearby Musicians </h3>
                  <UsersList
                    selector={this.selectMusician}
                    match={this.state.selectedInstrument}
                    status={this.state.hasSearched}
                    getUsers={this.getUsers}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Heading reset={this.handleReset} />
            <h3 className="text-center my-5"> Search Nearby Musicians </h3>
            <Search
              filter={this.instrumentFilter}
              search={this.handleSearch}
              status={this.state.hasSearched}
            />
            <UsersList
              selector={this.selectMusician}
              match={this.state.selectedInstrument}
              status={this.state.hasSearched}
              getUsers={this.getUsers}
            />
          </div>
        )}
      </div>
    )
  }
}
