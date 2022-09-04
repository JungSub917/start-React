import '../App.css';
import React, {useState} from 'react';
import './Counter.css'
// javascript 확장자만 생략가능하고 기타 다른 파일 확장자는 생략 불가능

const Counter = () => {
  const [counter, setCounter] = useState(0);
  // 값이 변경이 되면 화면을 자동으로 갱신 역할을 함

  function countHandle(){
    //counter++;
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
      <div className='counter-container'>
        <p id='counterPrint'>counter : {counter} </p>
        <button id='btn' onClick={countHandle}> Add Count</button>
      </div>

  );
}

export default Counter;
