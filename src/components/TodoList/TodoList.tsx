import React from 'react';
import { Container } from 'react-bootstrap';
import { TodoCard } from '../TodoCard';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <Container className="todoList">
      {todos.map(todo => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </Container>
  );
}