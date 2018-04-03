import React from 'react'
import ReactDOM from 'react-dom'
import UsersList from './users-list.js'
import Heading from './background.js'
import Search from './search.js'
import { instruments } from './users-list.js'

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearched: false,
      selectedInstrument: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.instrumentFilter = this.instrumentFilter.bind(this)
  }
  handleReset() {
    this.setState({ hasSearched: false })
  }

  handleSearch() {
    this.setState({ hasSearched: true })
  }
  instrumentFilter(event) {
    this.setState({ selectedInstrument: event.target.textContent })
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
                  <UsersList
                    match={this.state.selectedInstrument}
                    status={this.state.hasSearched}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Heading reset={this.handleReset} />
            <Search
              filter={this.instrumentFilter}
              search={this.handleSearch}
              status={this.state.hasSearched}
            />
            <UsersList
              match={this.state.selectedInstrument}
              status={this.state.hasSearched}
            />
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<Display />, document.querySelector('#app'))
