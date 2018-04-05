import React from 'react'
import Modal from 'react-bootstrap4-modal'

export default class MusicianDetails extends React.Component {
  render() {
    const musician = this.props.musician
    return (
      <div>
        <Modal
          visible={!!musician}
          dialogClassName="modal-dialog-centered modal-lg"
          onClickBackdrop={this.props.close}
        >
          <div className="modal-header">
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.props.close}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body container text-center">
            {musician ? (
              <div className="row">
                <div className="col-5">
                  <img
                    src={musician[0].photo}
                    className="rounded img-thumbnail"
                    alt="Responsive image"
                  />
                  <h5 className="my-3">
                    {musician[0].firstName + ' ' + musician[0].lastName}
                  </h5>
                  <h6 className="my-3">{musician[0].location}</h6>
                  <h6 className="my-3">{musician[0].instrument}</h6>
                </div>
                <div className="col-6">
                  <p>
                    Hello my name is
                    {' ' +
                      musician[0].firstName +
                      ' ' +
                      musician[0].lastName}{' '}
                    and I have been playing {musician[0].instrument} 10 years.
                    Please feel free to reach me at (714) 777-7777. Thank you.
                  </p>
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </Modal>
      </div>
    )
  }
}
