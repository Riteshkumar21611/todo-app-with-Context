import React, { useContext } from "react";
import Lists from "./Lists";
import { todoItemsContext } from "./store";

function Items() {
  const { listOfItems } = useContext(todoItemsContext);
  return (
    <>
      {listOfItems &&
        listOfItems?.map((curr) => (
          <Lists key={curr?.name} name={curr?.name} date={curr?.date} />
        ))}
    </>
  );
}

export default Items;
