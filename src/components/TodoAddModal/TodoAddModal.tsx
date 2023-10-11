import React, { FormEvent, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Todo } from '../../types/Todo';
import { useAppDispatch } from '../../app/hooks';
import { add } from '../../features/todosSlice';

type Props = {
  show: boolean;
  onClose: () => void,
}

export const TodoAddModal: React.FC<Props> = ({ show, onClose }) => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: +new Date(),
      user: username,
      title,
      description,
      completed: false,
      createdAt: new Date().toString(),
    }

    dispatch(add(newTodo));
  }

  return (
    <Modal show={show} onHide={() => onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Add new todo</Modal.Title>
      </Modal.Header>

      <Form onSubmit={(event) => handleSubmit(event)}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Username</Form.Label>

            <Form.Control 
              type="text" 
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Label>Title</Form.Label>

            <Form.Control 
              type="text" 
              placeholder="Enter title" 
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupDescription">
            <Form.Label>Description</Form.Label>

            <Form.Control 
              type="text" 
              placeholder="Enter description" 
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose()}>
            Close
          </Button>

          <Button variant="success" disabled>
            Save changes
          </Button>

          <Button variant="primary" type='submit'>
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}