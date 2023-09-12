import React from 'react'
import LocalData from '../localData/LocalData'
import style from "./TopTeam.module.css"
const TopTeam = () => {

    let teamData=LocalData.map((item)=>{
        return(
            <div>
<div className={style.wrape}>
    <div className={style.image_team}>
        <img src={item.Poster} alt="" />
    </div>
    <div className={style.text}>
<h5>{item.Title}</h5>
    </div>
    <div className={style.join_main}>
        <div className={style.join}>Join</div>
    </div>
</div>
            </div>
        )
    })
  return (
    <div>
    <h3 style={{textAlign:"center"}}>Top Teams of the week</h3>
      <div className={style.top_team_mid}>{teamData}</div>
    </div>
  )
}

export default TopTeam
