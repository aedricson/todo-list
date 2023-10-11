import React, { FormEvent, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Todo } from '../../types/Todo';
import { useAppDispatch } from '../../app/hooks';
import { add, edit } from '../../features/todosSlice';

type Props = {
  show: boolean;
  onClose: () => void,
  todo: Todo | null,
}

export const TodoAddModal: React.FC<Props> = ({ show, onClose, todo }) => {
  const [username, setUsername] = useState(todo ? todo.user : '');
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [description, setDescription] = useState(todo ? todo.description : '');

  const dispatch = useAppDispatch();

  const handleReset = () => {
    setUsername('');
    setTitle('');
    setDescription('');
    onClose();
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: +new Date(),
      user: username.trim(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      createdAt: new Date().toLocaleDateString('sv'),
    }

    dispatch(add(newTodo));
    handleReset();
  }

  const handleEdit = () => {
    if (todo) {
      const todoToEdit: Todo = {
        ...todo,
        user: username,
        title,
        description,
      }

      dispatch(edit(todoToEdit));

      handleReset();
    } else {
      return;
    }
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
              required
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value.trimStart())}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Label>Title</Form.Label>

            <Form.Control
              required
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(event) => setTitle(event.target.value.trimStart())}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupDescription">
            <Form.Label>Description</Form.Label>

            <Form.Control
              required
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(event) => setDescription(event.target.value.trimStart())}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose()}>
            Close
          </Button>

          <Button
            variant="success"
            disabled={todo ? false : true}
            onClick={() => handleEdit()}
          >
            Save changes
          </Button>

          <Button
            variant="primary"
            type='submit'
            disabled={todo ? true : false}
          >
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}