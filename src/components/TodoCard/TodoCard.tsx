import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';

import "./TodoCard.css";
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ todo }) => {
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
          <Button variant="primary" disabled={todo.completed}>Complete</Button>
          <Button variant="secondary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Created at: {todo.createdAt}</Card.Footer>
    </Card>
  );
}