import React, { useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';

import "./TodoCard.css";
import { Todo } from '../../types/Todo';
import { TodoAddModal } from '../TodoAddModal';
import { useAppDispatch } from '../../app/hooks';
import { remove, setStatus } from '../../features/todosSlice';
import { TodoDeleteModal } from '../TodoDeleteModal';

type Props = {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ todo }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  }

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  }

  const handleOpenDeleteModal = () => {
    setShowDeleteModal(true);
  }

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const handleDeleteTodo = () => {
    dispatch(remove(todo));
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
              onClick={() => dispatch(setStatus({ id: todo.id, status: false }))}
            >
              Set active
            </Button>
          ) : (
            <Button
              variant="success"
              disabled={todo.completed}
              onClick={() => dispatch(setStatus({ id: todo.id, status: true }))}
            >
              Complete
            </Button>
          )}

          <Button
            variant="secondary"
            onClick={() => handleOpenAddModal()}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => handleOpenDeleteModal()}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Created at: {todo.createdAt}</Card.Footer>

      {showAddModal && (
        <TodoAddModal
          show={showAddModal}
          onClose={handleCloseAddModal}
          todo={todo}
        />
      )}

      {showDeleteModal && (
        <TodoDeleteModal
          show={showDeleteModal}
          onClose={handleCloseDeleteModal}
          onDelete={handleDeleteTodo}
        />
      )}
    </Card>
  );
}