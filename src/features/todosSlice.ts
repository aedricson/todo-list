import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: 0
  },
  reducers: {
    add: () => {},
    edit: () => {},
    remove: () => {}
  }
})

export const { add, edit, remove } = todosSlice.actions

export default todosSlice.reducer