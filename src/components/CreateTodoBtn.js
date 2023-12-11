import { FaPlus } from "react-icons/fa6";

function CreateTodoBtn() {
  return (
    <button
      className='new-todo__btn'
      onClick={
        (event) => {
          console.log('Create Todo');
          // console.log('event', event);
          // console.log('event.target', event.target);
        }
      }
    >
      <FaPlus className="new-todo__btn__icon"/>
    </button>
  );
}

export { CreateTodoBtn }