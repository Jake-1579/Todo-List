import React, {useReducer, useState} from 'react';
import {todoReducer} from "./reducer/todoReducer";

const App = () => {


  const [state, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const todo = state.map( item =>
      <div key={item.id}>
        <p>{item.text}</p>
        <button onClick={() => dispatch({type: 'REMOVE', payload: item.id})}>Remove Item</button>
      </div>
  );

  const addTodo = () => {

    if(text !== '') {
      dispatch({type: 'ADD', payload: text});
      setText('');
    }

  }


  return (
   <div>
     <h1>Todo List</h1>

    <input onChange={e  => setText(e.target.value)} value={text}/>

     <button onClick={addTodo}>Add Todo</button>
     {todo}

   </div>
  );
}

export default App;
