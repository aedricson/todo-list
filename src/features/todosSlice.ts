import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: Todo[] | null = [
  {
    id: 12345,
    user: 'Josh Ua',
    title: 'Learn JS',
    description: 'Closures, Call Stack, Promises',
    completed: false,
    createdAt: new Date().toString(),
  },
  {
    id: 123456,
    user: 'Martin King',
    title: 'Learn React',
    description: 'Hooks, Custom hooks',
    completed: true,
    createdAt: new Date().toString(),
  },
  {
    id: 123457,
    user: 'Alice Thorn',
    title: 'Learn NodeJs',
    description: 'OOP, SQL',
    completed: false,
    createdAt: new Date().toString(),
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