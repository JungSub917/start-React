import React from "react";

const helloStyle = {
  backgroundColor : "red",
  color : "#fff",
  textAlign : "center"

}

const Hello = () => {
  // javascript 주석
  /*
    javascript 주석
  */
    const handleOver = () => {
      console.log('mouse over')
    }
    const handleOut = () => {
      console.log('mouse out')
    }
  return(

    <h1 onMouseOver={handleOver}
        onMouseOut={handleOut}
        style={helloStyle}
    >first React App</h1>
  )
}
    {/* 리액트 주석 : 태그 쓰기 */}

export default Hello;