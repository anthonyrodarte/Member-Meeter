import React from 'react'

export default function Search() {
  return (
    <div className="container" style={{ height: '50vh' }}>
      <div className="row d-flex align-items-center" style={{ height: '100%' }}>
        <div className="col d-flex justify-content-end">
          <ul
            className="list-group"
            style={{ width: '50%', marginRight: '30px' }}
          >
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
            style={{ marginLeft: '100px' }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
