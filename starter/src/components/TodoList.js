import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todosSlice.js";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  /*
    > 首次 render，先透過 useSelector 取得初始 dummy 資料
    > useEffect 取得 API 資料後，更新到 redux store
    > useSelector 從 redux store 取得最新資料，重新渲染 TodoList
  */
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {console.info("[render] TodoList")}

      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
