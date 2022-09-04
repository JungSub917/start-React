import React,{useState} from 'react';
// useState, props, useContext
// useState : 컴포넌트 내에서 변수를 사용하는 법

const NamePrint = () => {
  const names = ['kim', 'park', 'hong'];
  const [num, setNum] = useState(0);
  const clickHandle = () => {
    let ranNum = Math.floor(Math.random()*3);
    setNum(ranNum);
    // num = ranNum;
    console.log(num);
  }
  return (
    <div>
      <h1 onClick={clickHandle}>{names[num]}</h1>
    </div>
  )
}

export default NamePrint;