import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { TodoContext } from "../TodoContext";
import { Modal } from "../../utils/Modal";

function CreateTodoBtn() {
  const { openModal, setOpenModal } = useContext(TodoContext);

  return (
    <>
    <button
      className='new-todo__btn'
      onClick={
        (event) => {
          console.log('Create Todo');
          setOpenModal(!openModal);
          // console.log('event', event);
          // console.log('event.target', event.target);
        }
      }
    >
      <FaPlus className="new-todo__btn__icon"/>
    </button>

    {
      openModal
      ? (
        <Modal>
          Form
        </Modal>
      ) 
      : null
    }
    </>
  );
}

export { CreateTodoBtn }