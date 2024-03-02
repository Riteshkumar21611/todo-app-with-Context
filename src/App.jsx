import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Items from "./components/Items";
import Error from "./components/Error";
import { todoItemsContext } from "./components/store";

function App() {
  const [listOfItems, setListOfItems] = useState([]);

  const AddTask = (taskName, taskDate) => {
    setListOfItems((pre) => [...pre, { name: taskName, date: taskDate }]);
  };

  const DeleteTask = (itemDe) => {
    const remaindata = listOfItems.filter((item) => item.name !== itemDe);
    setListOfItems(remaindata);
  };

  return (
    <todoItemsContext.Provider
      value={{
        listOfItems,
        AddTask,
        DeleteTask,
      }}
    >
      <div className="todo-container mt-2">
        <AppName appName="Latest Task" />
        <AddTodo />
        <Error />
        <Items />
      </div>
    </todoItemsContext.Provider>
  );
}

export default App;
