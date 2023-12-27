import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/Todoitems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";
import "./App.css";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  const initialtodoItems = [];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log("hello");
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={[]}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
