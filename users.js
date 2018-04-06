import React from 'react'
import MusicianDetails from './musician-details.js'

export default function Users(props) {
  return (
    <div className="row d-flex align-content-center flex-wrap">
      {props.users.slice(0, props.count).map($user => (
        <div
          key={$user.id}
          className="card text-center bg-light text-dark"
          style={{ width: props.width, margin: props.margin }}
        >
          <img
            className="card-img-top"
            src={$user.photo}
            alt="User Photo"
            id={$user.id}
            onClick={props.selector}
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
  )
}
