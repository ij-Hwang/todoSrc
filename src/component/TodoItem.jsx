import React from 'react';

function TodoItem() {
  return (
    <li className="todo-item">
      <input type="checkbox" className="todo-item-checkbox" />
      <span className="todo-item-ctx">todo Item</span>
      <button type='button' className="todo-item-editbtn">✏</button>
      <button type="button" className="todo-item-delbtn"> 🗑 </button>
    </li>
  )
}

export default TodoItem