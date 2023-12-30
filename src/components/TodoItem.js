import { FaTrash } from "react-icons/fa6";

function TodoItem(props) {
  // console.log(props);
  return (
    <li className="todos__item">
      <input
        type="checkbox"
        defaultChecked={props.completed}
        // Al hacer click llamar la función que esta recibiendo como props
        onClick={props.onCheck}
      />
      <label className="todos__item__task">{props.title}</label>
      <FaTrash
        className="todo__item__delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem }
