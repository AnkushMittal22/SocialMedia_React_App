import React from 'react'
import TopTeam from '../topTeam/TopTeam'
import TopGlobal from '../topGlobal/TopGlobal'
import style from "./RightSideBox.module.css"
const RightSideBox = () => {
  return (
    <div className={style.right}>
      <TopTeam/>
      <TopGlobal/>
    </div>
  )
}

export default RightSideBox
