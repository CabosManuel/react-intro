import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const defaultToDos = [
  { id: 1, title: "Task 1", completed: true },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: true },
  { id: 4, title: "Task 4", completed: true },
  { id: 5, title: "Task 5", completed: true },
];

function App() {
  return (
    <>
      <TodoCounter total={6} completed={3}/>
      <TodoSearch/>

      <TodoList>
        { defaultToDos.map(toDo => (
          <TodoItem 
            key={toDo.id}
            title={toDo.title}
            completed={toDo.completed}
          />
        )) }
      </TodoList>

      <CreateTodoBtn/>
    </>
  );
}

function CreateTodoBtn() {
  return (
    <button>+</button>
  );
}

export default App;
