import React, { useState } from "react";
import style from "./MidPost.module.css";
import LocalData from "../localData/LocalData";
 

const Post = ({ item }) => {
  const [likeCount, setLikeCount] = useState(5);
  const [dislikeCount, setDislikeCount] = useState(2);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);

      if (disliked) {
        setDislikeCount(dislikeCount - 1);
        setDisliked(false);
      }
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDisliked(true);
      setDislikeCount(dislikeCount + 1);

      if (liked) {
        setLikeCount(likeCount - 1);
        setLiked(false);
      }
    } else {
      setDisliked(false);
      setDislikeCount(dislikeCount - 1);
    }
  };

  return (
    <div className={style.post}>
      <div className={style.top_mid}>
        <div className={style.box_mid}>
          <img src={item.Poster} className={style.image_mid} alt="image" />
          <span> {item.Title}</span>
        </div>
        <div className={style.box_mid}>
          <img src={item.Poster} className={style.image_mid} alt="image" />
          <span> {item.Country}</span>
        </div>
      </div>
      <h3>{item.Type}</h3>
      <div className={style.imageCont}>
        <img src={item.Poster} className={style.imageCont_in} alt="" />
      </div>
      <div className={style.thanks}>Thanks</div>
      <div className={style.lastbutton}>
        <div onClick={handleLikeClick} className={style.lastbutton_final}>
        {liked ? (
              <i className="fa-sharp fa-solid fa-thumbs-up"></i>
            ) : (
              <i className="fa-sharp fa-regular fa-thumbs-up"></i>
            )}
            {likeCount}
        </div>
        <div onClick={handleDislikeClick} className={style.lastbutton_final}>
        {disliked? <i class="fa-solid fa-thumbs-down"></i>:<i className="fa-regular fa-thumbs-down"></i>}
            {dislikeCount}
        </div>
        <div className={style.lastbutton_final}>
          <i className="fa-regular fa-message"></i>
          5
        </div>
        <div className={style.lastbutton_final}>
          <i className="fa-solid fa-link"></i>
        </div>
        <div className={style.lastbutton_final}>
          <i className="fa-solid fa-share"></i>
          6
        </div>
      </div>
    </div>
  );
};

const MidPost = () => {
  const midData = LocalData.map((item, index) => (
    <Post key={index} item={item} />
  ));

  return (
    <div className={style.head}>
      <h2 className={style.top}>Top Post</h2>
      <div>{midData}</div>
    </div>
  );
};

export default MidPost;
