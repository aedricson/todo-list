import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: Todo[] = [
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

export const localStorageMiddleware = ({ getState }: {getState: () => void} ) => {
  return (next: (arg0: any) => any) => (action: any) => {
    const res = next(action);

    localStorage.setItem('todos', JSON.stringify(getState()))

    return res;
  };
};

export const rehydrateStore = () => {
  const data = localStorage.getItem('todos');
  
  if (data !== null) {
    return JSON.parse(data);
  }
}

export default todosSlice.reducer;