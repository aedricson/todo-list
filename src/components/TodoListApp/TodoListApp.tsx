import React, { useMemo, useState } from 'react';

import { TodoNav } from "../TodoNav";
import './TodoListApp.css';
import { TodoList } from "../TodoList/TodoList";
import { useAppSelector } from "../../app/hooks";
import { SortBy } from '../../types/SortBy';

export const TodoListApp: React.FC = () => {
  const todos = useAppSelector(state => state.todos);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortBy>(SortBy.ALL);

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      const lowerCaseQuery = query.toLowerCase();

      const isIncluding = todo.user.toLowerCase().includes(lowerCaseQuery)
      || todo.title.toLowerCase().includes(lowerCaseQuery)
      || todo.description.toLowerCase().includes(lowerCaseQuery);

      switch (sort) {
        case SortBy.ACTIVE:
          return todo.completed === false && isIncluding;
      
        case SortBy.COMPLETED:
          return todo.completed === true && isIncluding;

        case SortBy.ALL:
        default:
          return isIncluding;
      }
    })
  }, [query, sort, todos]);

  return (
    <div className="todoListApp">
      <TodoNav
        query={query}
        onSearch={setQuery}
        onSort={setSort}
      />
      <TodoList todos={filteredTodos} />
    </div>
  );
}