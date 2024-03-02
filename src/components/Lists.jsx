import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "./store";

function Lists({ name, date }) {
  const { DeleteTask } = useContext(todoItemsContext);

  return (
    <div className="container text-left ">
      <div className="row mt-2 mb-2 ">
        <div className="col-6 ">{name}</div>
        <div className="col-4 ">{date}</div>
        <div className="col-2 ">
          <button
            type="button"
            className="btn btn-danger w-50"
            onClick={() => DeleteTask(name)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lists;
