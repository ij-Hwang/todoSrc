import React from 'react';

function InputBox() {
  return (
    <div className='todo-inputbox'>
      <input
      type="text"
      name='todoItem'
      placeholder='할 일을 입력하세요'
      className='todo-inputbox-input'
      />
      <button type="submit" className='todo-inputbox-addbtn'>
        추가
      </button>

    </div>
  )
}

export default InputBox