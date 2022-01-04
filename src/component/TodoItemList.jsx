import React from 'react';
import TodoItem from './TodoItem';

function TodoItemList() {
  return (
    <div className='todo-list'>
      <p className='todo-list-tit'>제목</p>

      {/* 기능 구현 전 리스트 */}
      <ul className="todo-list-ul">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </ul>

    </div>
  )
}

export default TodoItemList