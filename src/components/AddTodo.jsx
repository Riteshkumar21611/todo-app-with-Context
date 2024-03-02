import React, { useContext, useRef, useState } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import { todoItemsContext } from "./store";

function AddTodo() {
  const { AddTask } = useContext(todoItemsContext);

  const taskNameElement = useRef();
  const taskDateElement = useRef();

  const AddTodo = () => {
    const taskName = taskNameElement.current.value;
    const taskDate = taskDateElement.current.value;

    AddTask(taskName, taskDate);
    taskNameElement.current.value = "";
    taskDateElement.current.value = "";
  };

  return (
    <div className="container text-left">
      <div className="row">
        <div className="col-6  ">
          <input
            ref={taskNameElement}
            type="text"
            placeholder="Enter your task...."
            name="taskName"
          />
        </div>
        <div className="col-4 ">
          <input
            ref={taskDateElement}
            type="date"
            name="taskDate"
            // value={taskinfo.taskDate}
          />
        </div>
        <div className="col-2 ">
          <button
            type="button"
            className="btn btn-success add "
            onClick={AddTodo}
          >
            <MdOutlineAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
