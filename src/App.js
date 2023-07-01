import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter';
import logo from './platzi.webp';
import './App.css';
import { TodoButton } from './TodoButton';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar curso React.js', completed: false},
  { text: 'llorar y llorar', completed: false},
  { text: 'Salir a correr', completed: false},
  
  
]

function App() {
  return (
    <React.Fragment>

    <TodoCounter completed={16} total={25} />
    <TodoSearch />

    <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}/>
      ))}
    </TodoList>

    <TodoButton />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </React.Fragment>
  );
}






export default App;
