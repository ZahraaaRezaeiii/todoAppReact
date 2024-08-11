import {EnterTodo} from './EnterTodo.js';
import {Todo} from './Todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import React from 'react';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [nextId, setNextId] = useState(1);

  const inputGetter = useCallback((event) => {
    setTodo(event.target.value);
    }, []);

  const addTodo = () => {
    if (todo.trim()) {
      setTodoList([...todoList, { id: uuidv4(), text: todo, completed: false }]);
      setNextId(nextId + 1);
      setTodo("");
    }
  }

  const removeTodo = (idToRemove) => {
    setTodoList(todoList.filter((item) => item.id !== idToRemove));
  };

  const toggleComplete = (idToToggle) => {
    setTodoList(todoList.map((item) =>
      item.id === idToToggle ? { ...item, completed: !item.completed } : item
    ));
  }

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTodo();
    }
  }, [addTodo]);

  return (
    <React.Fragment>
      <div className="container mt-5">
        <EnterTodo todo={todo} addTodo={addTodo} inputGetter={inputGetter} handleKeyDown={handleKeyDown}/>
        <Todo todoList={todoList} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </div>
    </React.Fragment>
  );
}

export default App;
