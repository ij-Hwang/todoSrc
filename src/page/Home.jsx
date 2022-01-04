import React from 'react';
import InputBox from '../component/InputBox';
import TodoItemList from '../component/TodoItemList';
import AppHeader from '../component/AppHeader'

import './home.css';

function Home() {
  return (
    <div className="homepage-container">
      <div class="custom-shape-divider-top-1641279962">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
      </div>
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