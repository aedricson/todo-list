import React from 'react';
import { Container } from 'react-bootstrap';
import { TodoCard } from '../TodoCard';

export const TodoList: React.FC = () => {
  return (
    <Container className="todoList">
      <TodoCard />
    </Container>
  );
}