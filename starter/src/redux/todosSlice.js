import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      console.log("action", action);
      // {type: 'todos/REDUCER_NAME', payload: {title: ...}}

      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };

      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const { id: todoId, completed } = action.payload;

      const index = state.findIndex((todo) => todo.id === todoId);
      state[index].completed = completed;
    },
  },
});

console.log("[todosSlice]", todosSlice);
console.log("[todosSlice.actions]", todosSlice.actions);

export const { addTodo, toggleComplete } = todosSlice.actions;

export default todosSlice.reducer;
