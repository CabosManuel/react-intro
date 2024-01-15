import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoNew() {

  const {newTaskValue, setNewTaskValue} = useContext(TodoContext);

  // TODO: Agregar nueva tarea presionando Enter
  return (
    <input
      id="newTodoText"
      type="text"
      className="new-todo__text"
      placeholder="Add + new task..."
      value={newTaskValue}
      onChange={
        (event) => {
          setNewTaskValue(event.target.value);
        }
      }
    />
  )
}

export { TodoNew }