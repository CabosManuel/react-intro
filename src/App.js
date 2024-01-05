import './assets/App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoNew } from './components/TodoNew';
import { CreateTodoBtn } from './components/CreateTodoBtn';
import { SidebarItem } from './components/SidebarItem';
import { FaClipboardCheck } from "react-icons/fa6";
import { useState } from 'react';

/*
const defaultToDos = [
  { id: 1, title: "Crea una nueva tarea +", completed: false },
  { id: 2, title: "Busca una tarea 🔍", completed: false },
  { id: 3, title: "Elimina tareas 🚮", completed: false },
];

localStorage.getItem('TODOS');
localStorage.setItem('TODOS', JSON.stringify(defaultToDos));
localStorage.removeItem('TODOS');
*/

// Custom Hook:
// Usa por dentro un useState, tiene 
function useLocalStorage(itemName, initialValue) {
  const [item, setLocalStorageItem] = useState(() => {
    // Cuando el localStorage no tenga todos, retornar array vacío
    const itemFromStorage = localStorage.getItem(itemName);
    if (!itemFromStorage) {
      localStorage.setItem(itemName, initialValue);
      return initialValue;
    } else {
      return JSON.parse(itemFromStorage);
    }
  });

  // Actualizar item en LocalStorage y en useState
  const updateItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setLocalStorageItem(newItem);
  }

  // Retornar updateItem porque actualiza el LS y
  // NO DEVOLVEMOS EL setLocalStorageItem sino el updateItem 
  // (a quien se le ha delegado la lógica que necesita)
  return [item, updateItem];
}

function App() {
  // Usando el Hook "useState" para crear un estado y su modificador
  // y poder utilizarlo para escribir en el buscador
  //
  // Desestructurando state en [ value, setValue ]
  const [searchValue, setSearchValue] = useState('');
  const [todos, updateTodos] = useLocalStorage('TODOS', []);

  // Estados derivados:
  // Variables / propiedades / cálculos que vienen a partir de un estado
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodo = todos.filter(
    (todo) => {
      const todoTitle = todo.title.toLocaleUpperCase();
      const searchText = searchValue.toLocaleUpperCase();
      return todoTitle.includes(searchText);
    }
  );

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

  return (
    <div className='main'>
    <div className='content'>
      <h1>
        <FaClipboardCheck/>
        ToDo App
      </h1>
      <div className='new-todo'>
        <TodoNew/>
        <CreateTodoBtn/>
      </div>
      <TodoCounter total={totalTodos} completed={completedTodos}/>

      <TodoList>
        { searchedTodo.map((todo, index) => (
          <TodoItem
            // Enviar props: key, title, completed, onDelete, onCheck
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={deleteTodo}
            // 💡 React solo recibe funciones sin parámetros, así que se encapsula
            // en una arrow function para poder enviar un parámetro dentro
            onCheck={() => {
              checkTodo(index);
            }}
          />
        )) }
      </TodoList>
    </div>
    <div className='sidebar'>
      <SidebarItem>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </SidebarItem>
    </div>
    </div>
  );
}

export default App;
