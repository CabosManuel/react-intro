import { FaListCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

function TodoCounter({ total, completed }) {
  return (
    <div className="todo-counter">
      <span className="todo-counter__total"> <FaListCheck/> TOTAL: {total} </span>
      <span className="todo-counter__todo"> <FaRegCircleCheck/> TODO: {total - completed} </span>
      <span className="todo-counter__completed"> <FaCircleCheck/> COMPLETED: {completed} </span>
    </div>
  );
}

export { TodoCounter }