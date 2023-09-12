import React from 'react'
import TopPost from '../topPost/TopPost'
import MidPost from '../middPost/MiddPost'
import style from "./MidSideBox.module.css"
const MidSideBox = () => {
  return (
    <div className={style.midbox}>
    
      <TopPost/>
    
      <MidPost/>
    </div>
  )
}

export default MidSideBox
