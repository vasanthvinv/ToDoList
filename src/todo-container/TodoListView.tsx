import _ from "lodash";
import { useToDoListContext } from "./TodoProvider";
import "../App.css";
import React from "react";

const TodoListView = () => {
  const { SetDelete, filteredTodo, SetChange } = useToDoListContext();

  return (
    <div className="list">
      {_.map(filteredTodo, (item, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => SetChange(item.data)}
          />
          <span>{item.data}</span>
          <button onClick={() => SetDelete(item.data)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default TodoListView;
