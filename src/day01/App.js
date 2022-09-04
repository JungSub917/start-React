import './App.css';
import React, {useState} from 'react';
import Hello from './Hello';
import Counter from './Counter';
import NamePrint from './NamePrint';
// 확장자는 자동 인식으로 생략함

// ex5, ex6 확장 모듈 

const App = () => {

  return (
    <div className="App">
      <Hello />
      <Counter />
      <NamePrint />
    </div>
  );
}

export default App;
