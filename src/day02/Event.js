import React, {useState} from 'react';
// React 이벤트 사용법

const style = {
  padding: '10px',
  backgroundColor: 'orange'
}

const Event = () => {
  const ClickHandle = () => {
    // 파라미터가 없는 이벤트 핸들
    console.log('clicked');
  }
  const ClickHandle2 = (text) => {
    // 파라미터가 없는 이벤트 핸들
    console.log('clicked', text);
  }

  const[count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      <button 
        onClick={ClickHandle}
      >click</button>

      <button
        onClick={()=>{ClickHandle2('2번째')}}
      >
        click2
      </button>

      <button
        onClick={counter}
        style={style}
      >
        add counter{count}
      </button>
    </div>
  )
}

export default Event