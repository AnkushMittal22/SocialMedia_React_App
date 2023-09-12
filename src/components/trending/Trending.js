import React from "react";
import style from "./Trending.module.css";
const Trending = () => {
  return (
    <div>
      <h4 className={style.trending_h4}>Trending Topics of the week</h4>
      <div>
        <div className={style.trending_card}>
          <img
            className={style.trending_image}
            src="https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
            alt=""
          />
          <p>Top Software for designer</p>
        </div>
      </div>
      <div className={style.socialLink}>
        <span>
          <i class="fa-brands fa-square-facebook fa-2xl"></i>
        </span>
        <i class="fa-brands fa-square-instagram fa-2xl"></i>
        <span>
          <i class="fa-brands fa-twitter fa-2xl"></i>
        </span>
        <span>
          <i class="fa-brands fa-linkedin fa-2xl  "></i>
        </span>
      </div>
    </div>
  );
};

export default Trending;
