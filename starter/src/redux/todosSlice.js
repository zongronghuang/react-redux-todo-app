import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 負責發出請求並接收回傳資料的 middleware
// 取得回傳資料後，傳進 store
export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await fetch("http://localhost:7000/todos");
    console.log("res", res);
    if (res.ok) {
      const todos = await res.json();
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const res = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: payload.title }),
    });

    if (res.ok) {
      const todo = await res.json();
      console.log("add todo async", todo);
      return { todo };
    }
  }
);

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
      // console.log("action", action);
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
    deleteTodo: (state, action) => {
      const { id: todoId } = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
  },
});

console.log("[todosSlice]", todosSlice);
console.log("[todosSlice.actions]", todosSlice.actions);

export const { addTodo, toggleComplete, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
