import React,{useState} from 'react';
import './Accordion.css';
// callapse

const Accordion = () => {
  // let toggle = false;
  // const toggleHandle = () => {
  //   toggle = !toggle; // !false, !true
  //   console.log(toggle);
  // }
  const [toggle, setToggle] = useState(false);
  const toggleHandle = () => {
    setToggle(!toggle);
    // setToggle(toggle => !toggle);
  }
  return (
    <div className='callapse'>
      <div className='title'
           onClick={toggleHandle}>
        내용을 확인하려면 클릭하세요.
      </div>
      <div className={toggle ? "callapse-content active" : "callapse-content"}>
        콜랩스는 아코디어느이 변형으로 제목을 토글 동작하여 콘텐츠를 보여주는 UI
      </div>
    </div>
  )
}

export default Accordion;