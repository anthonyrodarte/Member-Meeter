import React from 'react'
import Modal from 'react-bootstrap4-modal'

export default class MusicianDetails extends React.Component {
  render() {
    const hasSelected = this.props.musician
    return (
      <div>
        <Modal
          visible={!!hasSelected}
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
            <div className="row">
              <div className="col-5">
                <img
                  src="testimg.jpg"
                  className="rounded img-thumbnail"
                  alt="Responsive image"
                />
                <h5 className="my-3">George Bluth</h5>
                <h6 className="my-3">Anaheim, CA</h6>
                <h6 className="my-3">Guitar</h6>
              </div>
              <div className="col-7">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  placerat mattis maximus. Suspendisse et metus mollis,
                  tristique felis at, vehicula risus. Nunc vel nibh ultricies,
                  ornare urna ac, molestie ipsum. Maecenas rutrum vestibulum
                  elit sit amet volutpat. Integer vel augue placerat, gravida mi
                  ac, elementum purus.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
