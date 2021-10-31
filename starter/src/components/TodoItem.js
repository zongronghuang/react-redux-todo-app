import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleComplete,
  toggleCompleteAsync,
  deleteTodo,
  deleteTodoAsync
} from "../redux/todosSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  // 同步版本
  // const handleCheckboxClick = () => {
  //   dispatch(toggleComplete({ id, completed: !completed }));
  // };

  // 非同步版本
  const handleCheckboxClick = () => {
    dispatch(toggleCompleteAsync({ id, completed: !completed }));
  };

  // 同步版本
  // const handleDeleteClick = () => {
  //   dispatch(deleteTodo({ id }));
  // };

  // 非同步版本
  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id }))
    console.log('hahaha')
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      {console.info("[render] TodoItem")}

      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            onChange={handleCheckboxClick}
            checked={completed}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
