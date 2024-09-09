import { useToDoListContext } from "./TodoProvider";
import "../App.css";
import _ from "lodash";

const FilterBar = () => {
  const { todos, setFilteredTodo, setCompletedDelete } = useToDoListContext();

  return (
    <div className="fotter">
      <span>
        {_.filter(todos, (todo) => !todo.completed).length} item left!
      </span>
      <span>
        <button onClick={() => setFilteredTodo("All")}>All</button>
        <button onClick={() => setFilteredTodo("Active")}>Active</button>
        <button onClick={() => setFilteredTodo("Complete")}>Completed</button>
      </span>
      <button onClick={setCompletedDelete}>Clear completed</button>
    </div>
  );
};

export default FilterBar;
