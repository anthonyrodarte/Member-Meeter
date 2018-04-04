import React from 'react'
import Modal from 'react-bootstrap4-modal'

export default class MusicianDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
    this.closeDetails = this.closeDetails.bind(this)
  }
  closeDetails() {
    this.setState({ open: false })
  }
  render() {
    return (
      <Modal visible={this.state.open} onClickBackdrop={this.closeDetails}>
        <div className="modal-header">
          <h5 className="modal-title">Test Modal</h5>
        </div>
        <div className="modal-body">
          <p>Content</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.closeDetails}
          >
            Close
          </button>
        </div>
      </Modal>
    )
  }
}
