import React, { useContext } from "react";
import style from "./Error.module.css";
import { todoItemsContext } from "./store";

function Error() {
  const { listOfItems } = useContext(todoItemsContext);
  return (
    listOfItems.length === 0 && <h1 className={style.Error}>Enjoy Your Day</h1>
  );
}

export default Error;
