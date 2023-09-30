import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalAlert({cancelDelete, confirmDelete}) {

  return (
    <>
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Warning!!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this product?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>Cancel</Button>
          <Button variant="primary" onClick={confirmDelete}>Yes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  );
}

export default ModalAlert;
