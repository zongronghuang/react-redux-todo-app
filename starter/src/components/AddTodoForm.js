import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodoAsync } from "../redux/todosSlice.js";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  // 同步版本
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("user entered: " + value);

  //   if (value) {
  //     dispatch(addTodo({ title: value }));
  //   }
  // };

  // 非同步版本
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered:" + value);

    if (value) dispatch(addTodoAsync({ title: value }));
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      {console.info("[render] AddTodoForm")}
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
