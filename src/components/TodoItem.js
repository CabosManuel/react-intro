import { FaTrash } from "react-icons/fa6";

function TodoItem(props) {
  console.log(props);
  return (
    <li className="todos__item">
      <input
        type="checkbox"
        // checked={props.completed}
      />
      <label className="todos__item__task">{props.title}</label>
      <FaTrash className="todo__item__delete"/>
    </li>
  );
}

export { TodoItem }
