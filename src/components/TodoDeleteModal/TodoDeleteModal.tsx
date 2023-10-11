import React from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
  show: boolean,
  onClose: () => void,
  onDelete: () => void,
}

export const TodoDeleteModal: React.FC<Props> = ({ show, onClose, onDelete }) => {
  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => onClose()}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button
          variant="secondary"
          onClick={() => onClose()}
        >
          No
        </Button>
        {' '}
        <Button
          variant="danger"
          onClick={() => onDelete()}
        >
          Yes
        </Button>
      </Modal.Body>
    </Modal>
  );
}