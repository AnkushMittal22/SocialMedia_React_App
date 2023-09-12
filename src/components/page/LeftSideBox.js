import React from 'react'
import MainSide from '../mainSide/MainSide'
import Trending from '../trending/Trending'
import style from "./LeftSideBox.module.css"
const LeftSideBox = () => {
  return (
    <div className={style.left}>
      <MainSide/>
      <Trending/>
    </div>
  )
}

export default LeftSideBox
