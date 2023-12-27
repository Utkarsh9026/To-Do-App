import TodoItem from "./TodoItem";
// import { TodoItemsContext } from "../store/todo-item-store";
// import { useContext } from "react";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  // const todoItemsFromContext = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {todoItems &&
        todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
    </div>
  );
};

export default TodoItems;
