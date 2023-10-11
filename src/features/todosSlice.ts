import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: Todo[] | null = [
  {
    id: +new Date(),
    user: 'Ihor Shynkar',
    title: 'Complete a test task',
    description: 'Created React application Todo List, that can help you manage your tasks list',
    completed: true,
    createdAt: new Date().toLocaleString('sv'),
  }
];

type SetStatus = {
  id: number,
  status: boolean
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (todos, action: PayloadAction<Todo>) => {
      todos.push(action.payload);
    },

    edit: (todos, action: PayloadAction<Todo>) => {
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }

        return todo;
      })
    },

    remove: (todos, action: PayloadAction<Todo>) => {
      return todos.filter(todo => todo.id !== action.payload.id)
    },

    setStatus: (todos, action: PayloadAction<SetStatus>) => {
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: action.payload.status,
          }
        }

        return todo;
      })
    }
  }
});

export const { add, edit, remove, setStatus } = todosSlice.actions;

export default todosSlice.reducer;