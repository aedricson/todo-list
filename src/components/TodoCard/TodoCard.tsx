import React, { useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';

import "./TodoCard.css";
import { Todo } from '../../types/Todo';
import { TodoAddModal } from '../TodoAddModal';
import { useAppDispatch } from '../../app/hooks';
import { remove, setStatus } from '../../features/todosSlice';

type Props = {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ todo }) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    setShow(true);
  }

  const handleCloseModal = () => {
    setShow(false);
  }

  return (
    <Card data-bs-theme="dark" className="todoCard">
      <Card.Header>User: {todo.user}</Card.Header>
      <Card.Body>
        <Card.Title>
          {todo.title}
          {' '}
          {todo.completed ? (
            <Badge pill bg="success">
              Done
            </Badge>
          ) : (
            <Badge pill bg="warning">
              Active
            </Badge>
          )}
        </Card.Title>

        <Card.Text>
          {todo.description}
        </Card.Text>
        <div className="todoCard__buttons">
          {todo.completed ? (
            <Button
              variant="warning"
              onClick={() => dispatch(setStatus({id: todo.id, status: false}))}
            >
              Set active
            </Button>
          ) : (
            <Button
              variant="primary"
              disabled={todo.completed}
              onClick={() => dispatch(setStatus({id: todo.id, status: true}))}
            >
              Complete
            </Button>
          )}

          <Button
            variant="secondary"
            onClick={() => handleOpenModal()}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => dispatch(remove(todo))}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Created at: {todo.createdAt}</Card.Footer>

      {show && (
        <TodoAddModal
          show={show}
          onClose={handleCloseModal}
          todo={todo}
        />
      )}
    </Card>
  );
}