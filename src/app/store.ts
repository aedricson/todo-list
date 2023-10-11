import { configureStore } from '@reduxjs/toolkit'
import todosReducer, { localStorageMiddleware, rehydrateStore } from '../features/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: rehydrateStore(),
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(localStorageMiddleware);
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;