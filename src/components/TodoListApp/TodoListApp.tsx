import React from "react";

import { TodoNav } from "../TodoNav";
import './TodoListApp.css';
import { TodoList } from "../TodoList/TodoList";

export const TodoListApp: React.FC = () => {
  return (
    <div className="todoListApp">
      <TodoNav />
      <TodoList />
    </div>
  );
}