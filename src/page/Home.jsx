import React from 'react';
import InputBox from '../component/InputBox';
import TodoItemList from '../component/TodoItemList';
import AppHeader from '../component/AppHeader'

import './home.css';

function Home() {
  return (
    <div className="homepage-container">
      <div className="todo-container">

        <AppHeader />

      {/* ToDo Item을 추가할 수 있는 input 박스 */}
      <InputBox />

      {/* 할 일 Item 리스트 */}
      <TodoItemList />

      {/* 완료한 Item 리스트 */}
      <TodoItemList />
      </div>


    </div>
  )
}

export default Home;