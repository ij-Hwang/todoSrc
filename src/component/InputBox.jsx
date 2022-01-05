import React from 'react';
import './InputBox.css'





function InputBox() {
  return (
    <div className='todo_InputDiv'>
      <input className='todo_Inputbox'
      type="text"
      name='todoItem'
      placeholder='할 일을 입력하세요'
      />
      <button type="submit" className='todo_inputbox-addbtn'>
        추가
      </button>

    </div>
  )
}

export default InputBox