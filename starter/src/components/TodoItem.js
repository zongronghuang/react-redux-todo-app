import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/todosSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    console.log({ id });
    dispatch(toggleComplete({ id, completed: !completed }));
  };

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
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
