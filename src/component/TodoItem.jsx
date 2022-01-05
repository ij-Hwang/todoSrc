import React from 'react';
import './TodoItem.css'

function TodoItem() {
  return (
    <li className="todo_item">
      <input type="checkbox" className="todo_item-checkbox" />
      <span className="todo_item-ctx">todo Item</span>
      <button type='button' className="todo_item-editbtn">✏</button>
      <button type="button" className="todo_item-delbtn"> 🗑 </button>
    </li>
  )
}

export default TodoItem