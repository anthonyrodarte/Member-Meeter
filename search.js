import React from 'react'
import { instruments } from './users-list.js'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearched: this.props.status,
      currentInstrument: ''
    }
    this.checkData = this.checkData.bind(this)
  }
  checkData(event) {
    this.setState({
      currentInstrument: event.target.textContent
    })
    console.log(this.state.currentInstrument)
  }
  render() {
    const hasSearched = this.state.hasSearched
    return (
      <div className="container">
        {hasSearched ? (
          <div className="row">
            <div className="col-6">
              <ul className="list-group text-center">
                <li
                  className="list-group-item"
                  style={{ backgroundColor: '#007bff', color: '#fff' }}
                >
                  Instruments
                </li>
                {instruments.map($instrument => (
                  <button
                    className="list-group-item list-group-item-action"
                    key={$instrument}
                    onClick={this.props.filter}
                  >
                    {$instrument}
                  </button>
                ))}
                <button
                  className="list-group-item list-group-item-action"
                  onClick={this.props.filter}
                >
                  All
                </button>
              </ul>
              <div className="my-3 d-flex justify-content-center">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={this.props.search}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-3" />
            <div className="col-3">
              <ul className="list-group text-center">
                <li
                  className="list-group-item"
                  style={{ backgroundColor: '#007bff', color: '#fff' }}
                >
                  Instruments
                </li>
                {instruments.map($instrument => (
                  <button
                    className="list-group-item list-group-item-action"
                    key={$instrument}
                    onClick={this.props.filter}
                  >
                    {$instrument}
                  </button>
                ))}
                <button
                  className="list-group-item list-group-item-action"
                  onClick={this.props.filter}
                >
                  All
                </button>
              </ul>
            </div>
            <div className="col-3 d-flex align-items-center ml-5">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.props.search}
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
