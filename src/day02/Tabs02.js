import React, {useState} from 'react';
import './Tabs.css';

const btnStyle = {
  listStyle : "none",
  margin : 0,
  padding : 0
}

const aLink = {
  textDecoration : "none",
  color : "inherit"
}

const Tabs = () => {
  // const [tabToggle, handleNumber] = useState(3);
  const [tabToggle, setTabToggle] = useState(3);
  // setTabToggle(1) : tabToggle = 1;
  // setTabToggle(2) : tabToggle = 2;
  // setTabToggle(3) : tabToggle = 3;
  // 1. 함수와 변수를 별도로 두어 제작하지 않아도 됨
  // 2. js로 제작 했을 때는 화면 갱신을 수동으로 갱신시켜야하는데 useState가 바뀌면 자동으로 화면 갱신이 이루어짐 : render
  const eventHandle = (event) => {
    event.preventDefault();
  }
  return (
    <div className='tabs-container'>
      <ul className="tab-btns" 
          style={btnStyle}
      >
        <li className={tabToggle == 1 ? "active" : ""}
            onClick={()=>{setTabToggle(1)}}
        >
          <a href="#" 
             style={aLink}
             onClick={eventHandle}
          >
            TabsBtn1
          </a>
        </li>
        <li className={tabToggle == 2 ? "active" : ""}
            onClick={()=>{setTabToggle(2)}}
        >
          <a href="#" 
             style={aLink}
             onClick={eventHandle}
          >
            TabsBtn2
          </a>
        </li>
        <li className={tabToggle == 3 ? "active" : ""}
            onClick={()=>{setTabToggle(3)}}
        >
          <a href="#" 
             style={aLink}
             onClick={eventHandle}
          >
            TabsBtn3
          </a>
        </li>
      </ul>
      <div className='tab-contents'>
        <div className={tabToggle === 1 ? "content active" : "content"} 
             id='content1'
        >
          lorem01
        </div>
        <div className={tabToggle === 2 ? "content active" : "content"} 
             id='content2'
        >
          lorem02
        </div>
        <div className={tabToggle === 3 ? "content active" : "content"} 
             id='content3'
        >
          lorem03
        </div>
      </div>
    </div>
  )
}

export default Tabs;

// 탭의 개수 늘리는 방법
// 탭의 개수를 늘리고 싶으면 li를 컴포넌트로 만들어주면 된다.
