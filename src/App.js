import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>

      <TodoCounter total={6} completed={3}/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/> 
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateTodoBtn/>
    </Fragment>
  );
}

function CreateTodoBtn() {
  return (
    <button>+</button>
  );
}

export default App;
