import React from 'react';
import TodoItem from './TodoItem';
import './TodoItemList.css'

function TodoItemList() {
  return (
    <div className='todo_list'>
      <p className='todo_list-tit'>제목</p>

      {/* 기능 구현 전 리스트 */}
      <ul className="todo_list-ul">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </ul>

    </div>
  )
}

export default TodoItemList