import React from "react";
import LocalData from "../localData/LocalData";
import style from "./TopPost.module.css";
const TopPost = () => {
  let topData = LocalData.map((item) => {
    return (
      <div className={style.top_card}>
        <div>
          <div className={style.mainDiv}>
            <a href="https://grupverse.com/teamprofile/22">{item.Title}</a>
            <div className={style.image_main}>
              <img src={item.Poster} className={style.mid_image} alt="" />
            </div>
            <button className={style.join}>Join</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={style.top_main}>
      <h4 className={style.recomm}>Recommended Team</h4>
      <div className={style.top_Data}>{topData}</div>
    </div>
  );
};

export default TopPost;
