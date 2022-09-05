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
  // let tabToggle = 2; // 수작업 // 클릭하면 클릭된 버튼의 번호로 변경해줘야함

  // const handleNumber = (num) => {
  //   tabToggle = num;
  //   console.log(tabToggle)
  // }

  const [tabToggle, handleNumber] = useState(3);
  
  return (
    <div className='tabs-container'>
      <ul className="tab-btns" 
          style={btnStyle}
      >
        <li className={tabToggle == 1 ? "active" : ""}
            onClick={()=>{handleNumber(1)}}
        >
          <a href="#" 
             style={aLink}
          >
            TabsBtn1
          </a>
        </li>
        <li className={tabToggle == 2 ? "active" : ""}
            onClick={()=>{handleNumber(2)}}
        >
          <a href="#" 
             style={aLink}
          >
            TabsBtn2
          </a>
        </li>
        <li className={tabToggle == 3 ? "active" : ""}
            onClick={()=>{handleNumber(3)}}
        >
          <a href="#" 
             style={aLink}
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

// 탭을 구현하는 방법1
// 버튼의 번호를 구해서 번호에 해당하는 content를 보이고 나머지 모두 숨긴다.

// 탭을 구현하는 방법2
// 아이디에 해당하는 content를 보이고 나머지를 숨긴다.