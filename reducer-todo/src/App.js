import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { Reducer, initialState } from "./reducers/Reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {

  const [state, dispatch] = useReducer(Reducer, initialState)

  const addItem = (item) => {
    const newItem = {
      id: Date.now(),
      completed: false,
      item: item
    }
    dispatch({ type: "ADD_ITEM", payload: newItem })
  }

  const toggleCompleted = (item) => {
    console.log(item);
    dispatch({ type: "TOGGLE_COMPLETED", payload: item })
  }



  return (
    <div className="App">
      <TodoForm addItem={addItem} clearCompleted={() => dispatch({ type: "CLEAR_COMPLETED" })} />
      <TodoList todo={state} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
