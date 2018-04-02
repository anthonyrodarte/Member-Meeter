import React from 'react'
import ReactDOM from 'react-dom'
import UsersList from './users-list.js'
import Heading from './background.js'
import Search from './search.js'

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearched: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleReset() {
    this.setState({ hasSearched: false })
  }

  handleSearch() {
    this.setState({ hasSearched: true })
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
                    search={this.handleSearch}
                    status={this.state.hasSearched}
                  />
                </div>
                <div className="col">
                  <UsersList status={this.state.hasSearched} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Heading reset={this.handleReset} />
            <Search
              search={this.handleSearch}
              status={this.state.hasSearched}
            />
            <UsersList status={this.state.hasSearched} />
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<Display />, document.querySelector('#app'))
