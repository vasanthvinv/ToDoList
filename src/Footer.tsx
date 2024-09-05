import { useContext } from "react";
import { ToDoListContext } from "./Main";
import './App.css';


interface FooterType {
  Active_Count: number;
  Set_Completed: () => void;
  setFilter: (filter: "All" | "Active" | "Complete") => void;
}

const Footer = () => {
  const context = useContext(ToDoListContext);
  const { Active_Count, Set_Completed, setFilter } = context as unknown as FooterType;

  return (
    <div className="fotter">
      <span>{Active_Count} item left!</span>
      <span>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Complete")}>Completed</button>
      </span>
      <button onClick={Set_Completed}>Clear completed</button>
    </div>
  );
};

export default Footer;
