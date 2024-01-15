import { useState, createContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

// Crear un context
const TodoContext = createContext();

function TodoProvider({ children }) {
  /* ************************** Traer toda la lógica del App() al Context ************************** */

  // Usando el Hook "useState" para crear un estado y su modificador
  // y poder utilizarlo para escribir en el buscador
  //
  // Desestructurando state en [ value, setValue ]
  const [searchValue, setSearchValue] = useState('');
  const [newTaskValue, setNewTaskValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const {
    // Renombrar 'item' -> 'todos'
    item: todos,
    updateItem: updateTodos,
    loading,
    error
  } = useLocalStorage('TODOS', []);
  // TODO: Ver como enviar un initialValue [], que sea un array con unas tareas por defecto,
  // que no de error y que si pueda marcar la tarea completada o eliminada

  // Estados derivados:
  // Variables / propiedades / cálculos que vienen a partir de un estado
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // FIX: Cando no encuentra ninguna tarea, cambiar el msj "Crea una tarea nueva" por "No se han encontrado tareas"
  // FIX: Cuando busco y del resultado de tareas, marco una como completada, se desmarca otras tareas
  const searchedTodo = todos.filter(
    (todo) => {
      const todoTitle = todo.title.toLocaleUpperCase();
      const searchText = searchValue.toLocaleUpperCase();
      return todoTitle.includes(searchText);
    }
  );

  // Función para crear nuevo todo
  const addTodo = (text) => {
    if (text.trim() != '') {
      const newTodos = [...todos];
      newTodos.push({
        id: Date.now(),
        title: text,
        completed: false
      })
      updateTodos(newTodos);
      setNewTaskValue('');
    }
  }

  // Función para actualizar estado de las tareas cuando cambia un checkbox
  const checkTodo = (index) => {
    const newTodos = [...todos];
    const isCompleted = newTodos[index].completed;
    newTodos[index].completed = (isCompleted) ? false : true;
    updateTodos(newTodos);
  }
  
  // Función para eliminar todo cuando hace click al ícono
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodos(newTodos);
  }

  // TODO: Función para editar todos

  // TODO: Drag and drop para ordenar todos

  /* ************************ END Traer toda la lógica del App() al Context ************************ */

  return (
    // value:
    // Almacena en forma de obj todas las props a las que podrán acceder todos los children
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodo,
      checkTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
      newTaskValue,
      setNewTaskValue,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };