import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const {
    setOpenModal,
    addTodo
  } = useContext(TodoContext);

  const [newTodoModal, setNewTodoModal] = useState('');

  const onChange = (event) => {
    setNewTodoModal(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoModal);
    setOpenModal(false);
  }
  
  const onCancel = () => {
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label className="todo-modal__title">Nueva tarea:</label>
      <textarea
        className="todo-modal__textarea"
        placeholder="Escribir tarea..."
        value={newTodoModal}
        onChange={onChange}
      />
      <div className="todo-modal__group-btn">
        <button
          type="button"
          onClick={onCancel}
          className="todo-modal__btn todo-modal__btn--cancel"
        >Cancelar</button>
        <button
          type="submit"
          className="todo-modal__btn todo-modal__btn--save"
        >Guardar</button>
      </div>
    </form>
  )
}

export { TodoForm }