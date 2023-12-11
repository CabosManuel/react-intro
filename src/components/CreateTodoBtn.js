import { FaPlus } from "react-icons/fa6";

function CreateTodoBtn() {
  return (
    <button className='new-todo__btn'>
      <FaPlus className="new-todo__btn__icon"/>
    </button>
  );
}

export { CreateTodoBtn }