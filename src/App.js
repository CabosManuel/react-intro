import './assets/App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoNew } from './components/TodoNew';
import { CreateTodoBtn } from './components/CreateTodoBtn';
import { FaClipboardCheck } from "react-icons/fa6";
import { useState } from 'react';

const defaultToDos = [
  { id: 1, title: "Crea una nueva tarea +", completed: false },
  { id: 2, title: "Busca una tarea 🔍", completed: true },
  { id: 3, title: "Elimina esta tarea completada 🚮", completed: true },
];

function App() {
  // Usando el Hook "useState" para crear un estado y su modificador
  // y poder utilizarlo para escribir en el buscador
  //
  // Desestructurando state en [ value, setValue ]
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultToDos);

  // Estados derivados:
  // Variables / propiedades / cálculos que vienen a partir de un estado
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className='container'>
      <h1>
        <FaClipboardCheck/>
        ToDo App
      </h1>

      <div className='new-todo'>
        <TodoNew/>
        <CreateTodoBtn/>
      </div>

      <TodoSearch
        // Enviar props
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoCounter total={totalTodos} completed={completedTodos}/>

      <TodoList>
        { defaultToDos.map(toDo => (
          <TodoItem 
            key={toDo.id}
            title={toDo.title}
            completed={toDo.completed}
          />
        )) }
      </TodoList>
    </div>
  );
}

export default App;
