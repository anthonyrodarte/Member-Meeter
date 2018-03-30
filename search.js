import React from 'react'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearched: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch() {
    this.setState({ hasSearched: true })
  }
  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col d-flex justify-content-end">
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{ backgroundColor: '#007bff', color: '#fff' }}
              >
                Instruments
              </li>
              <button className="list-group-item list-group-item-action">
                Guitar
              </button>
              <button className="list-group-item list-group-item-action">
                Bass Guitar
              </button>
              <button className="list-group-item list-group-item-action">
                Drums
              </button>
              <button className="list-group-item list-group-item-action">
                Keys
              </button>
              <button className="list-group-item list-group-item-action">
                Vocals
              </button>
              <button className="list-group-item list-group-item-action">
                All
              </button>
            </ul>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}
