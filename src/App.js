import './assets/App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoList/TodoItem';
import { TodosLoading } from './components/TodoList/TodosLoading';
import { TodosError } from './components/TodoList/TodosError';
import { TodosEmpty } from './components/TodoList/TodosEmpty';
import { TodoNew } from './components/CreateTodo/TodoNew';
import { CreateTodoBtn } from './components/CreateTodo/CreateTodoBtn';
import { TodoSearch } from './components/Sidebar/TodoSearch';
import { SidebarItem } from './components/Sidebar/SidebarItem';
import { FaClipboardCheck } from "react-icons/fa6";
import { TodoContext, TodoProvider } from './components/TodoContext';

function App() {
  return (
    // Encapsular todo dentro del Provider para que todos sean children
    <TodoProvider>
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
          <TodoCounter />

          {/* Encapsular dentro de Consumer específicamente los componentes que necesitan las props*/}
          <TodoContext.Consumer>
            {/*
              Se crear un arrow function con las props específicas y retorna el componente encapsulado:
              {({props}) => (component)}
            */}
            {({loading, error, searchedTodo, checkTodo, deleteTodo}) => (
              // TODO: Agregar sección colapsable de Completados y TODOS
              <TodoList>
                { // Si loading es true, mostrar msj
                  (loading && searchedTodo.length === 0)
                    ? <TodosLoading />
                    : null
                }
                { // Si error es true, mostrar msj
                  (error)
                    ? <TodosError />
                    : null
                }
                { // Si loading es true y la cantidad del array es 0, mostrar msj
                  (!loading && searchedTodo.length === 0)
                    ? <TodosEmpty />
                    : null
                }

                { searchedTodo.map((todo, index) => (
                  <TodoItem
                    // Enviar props: key, title, completed, onDelete, onCheck
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onDelete={() => {
                      deleteTodo(index);
                    }}
                    // 💡 React solo recibe funciones sin parámetros, así que se encapsula
                    // en una arrow function para poder enviar un parámetro dentro
                    onCheck={() => {
                      checkTodo(index);
                    }}
                  />
                )) }
              </TodoList>
            )}
          </TodoContext.Consumer>

        </div>
        <div className='sidebar'>
          <SidebarItem>
            <TodoSearch />
          </SidebarItem>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
