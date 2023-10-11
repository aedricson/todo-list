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
    id: 12345,
    user: 'Martin King',
    title: 'Learn React',
    description: 'Hooks, Custom hooks',
    completed: true,
    createdAt: new Date().toString(),
  },
  {
    id: 12345,
    user: 'Alice Thorn',
    title: 'Learn NodeJs',
    description: 'OOP, SQL',
    completed: false,
    createdAt: new Date().toString(),
  }
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (todos, action: PayloadAction<Todo>) => {
      todos.push(action.payload);
    },
    edit: (todos, action: PayloadAction<number>) => {
      todos.find(todo => todo.id === action.payload)
    },
    remove: (todos, action: PayloadAction<Todo>) => {
      return todos.filter(todo => todo.id !== action.payload.id)
    }
  }
});

export const { add, edit, remove } = todosSlice.actions;

export default todosSlice.reducer;