import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { TodoContext } from "../TodoContext";
// import { Modal } from "../../utils/Modal";
// import { TodoForm } from "./TodoForm";

function CreateTodoBtn() {
  // const { openModal, setOpenModal } = useContext(TodoContext);
  const { addTodo, newTaskValue } = useContext(TodoContext);

  return (
    <>
    <button
      className='new-todo__btn'
      onClick={
        () => {
          // setOpenModal(!openModal);
          addTodo(newTaskValue);
        }
      }
    >
      <FaPlus className="new-todo__btn__icon"/>
    </button>

    {/*
    {
      openModal
      ? (
        <Modal>
          <TodoForm/>
        </Modal>
      ) 
      : null
    }
    */}
    </>
  );
}

export { CreateTodoBtn }