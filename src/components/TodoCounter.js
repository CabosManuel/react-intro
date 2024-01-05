import { useContext } from "react";
import { FaListCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const {totalTodos, completedTodos} = useContext(TodoContext);

  return (
    <div className="todo-counter">
      <span className="todo-counter__total"> <FaListCheck/> TOTAL: {totalTodos} </span>
      <span className="todo-counter__todo"> <FaRegCircleCheck/> TODO: {totalTodos - completedTodos} </span>
      <span className="todo-counter__completed"> <FaCircleCheck/> COMPLETED: {completedTodos} </span>
    </div>
  );
}

export { TodoCounter }