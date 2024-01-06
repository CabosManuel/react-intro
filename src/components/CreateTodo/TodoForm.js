const TodoForm = () => {
  return (
    <form>
      <label className="todo-modal__title">Nueva tarea:</label>
      <textarea
        className="todo-modal__textarea"
        placeholder="Escribir tarea..." 
      />
      <div className="todo-modal__group-btn">
        <button
          className="todo-modal__btn todo-modal__btn--cancel"
        >Cancelar</button>
        <button
          className="todo-modal__btn todo-modal__btn--save"
        >Guardar</button>
      </div>
    </form>
  )
}

export { TodoForm }