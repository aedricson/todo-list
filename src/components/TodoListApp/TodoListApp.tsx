import React from "react";

import { TodoNav } from "../TodoNav";
import './TodoListApp.css';
import { TodoList } from "../TodoList/TodoList";
import { useAppSelector } from "../../app/hooks";

export const TodoListApp: React.FC = () => {
  const todos = useAppSelector(state => state.todos);

  return (
    <div className="todoListApp">
      <TodoNav />
      <TodoList todos={todos} />
    </div>
  );
}