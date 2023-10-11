import React from 'react';
import { Button, Card } from 'react-bootstrap';

import "./TodoCard.css";

export const TodoCard: React.FC = () => {
  return (
    <Card data-bs-theme="dark" className="todoCard">
      <Card.Header>User: John Doe</Card.Header>
      <Card.Body>
        <Card.Title>Some title</Card.Title>
        <Card.Text>
          Some description and content
        </Card.Text>
        <div className="todoCard__buttons">
          <Button variant="success">Mark as completed</Button>
          <Button variant="secondary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Created at:</Card.Footer>
    </Card>
  );
}