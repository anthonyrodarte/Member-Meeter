import React from 'react'

export default class Users extends React.Component {
  render() {
    return (
      <div className="row justify-content-between">
        {this.props.users.slice(0, this.props.count).map($user => (
          <div
            key={$user.id}
            className="card text-center"
            style={{ width: this.props.width, margin: this.props.margin }}
          >
            <img className="card-img-top" src={$user.photo} alt="User Photo" />
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
