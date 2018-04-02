import React from 'react'

export default class Heading extends React.Component {
  render() {
    return (
      <div onClick={this.props.reset}>
        <h1 className="text-center my-5">Member Meeter</h1>
      </div>
    )
  }
}
