import './assets/App.css';
import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoList/TodoItem';
import { TodoNew } from './components/CreateTodo/TodoNew';
import { CreateTodoBtn } from './components/CreateTodo/CreateTodoBtn';
import { TodoSearch } from './components/Sidebar/TodoSearch';
import { SidebarItem } from './components/Sidebar/SidebarItem';
import { FaClipboardCheck } from "react-icons/fa6";
import { useLocalStorage } from './utils/useLocalStorage';

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
