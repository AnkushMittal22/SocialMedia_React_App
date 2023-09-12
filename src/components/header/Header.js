import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <nav className={style.nav_first}>
      <div className={style.logo_first}>
        <a href="/">
          <img
            src="https://grupverse.com/static/media/logo.3c685cc554a3882f4e85.png"
            alt=""
          />
        </a>
        <h4 className={style.gurp}>Grupverse</h4>
        <h4 className={style.grup}>❤️0</h4>
        <h4 className={style.grup}>Hello Ankush Mital</h4>
      </div>
      <div className={style.contain}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Help</li>
        </ul>
      </div>
      <div className={style.searchbar}>
        <input style={{textAlign:"center"}} className={style.searchInput} type="text" placeholder="Search..." name="" id="" />
        <span className={style.searchButton}>
          <i class="fa fa-search"></i>
        </span>
        <span className={style.searchButton}>
          <i class="fa fa-microphone"></i>
        </span>
      </div>

      <div className={style.iconButton}>
        <i class="fa-solid fa-bell"></i>
      </div>

      <div className={style.dropDown}>
        <img
          src="https://grupverse.com/api/api/img/default_profile_pic_1.png"
          alt=""
        />
        <div className={style.dropDowncontent}>
          <a href="/">
          <i class="fa-solid fa-user"></i>
          <span>User Profile</span>
          </a>
          <a href="/">
            <i class="fa-solid fa-message"></i>
            <span>Message</span>
          </a>
          <a href="/">
            <i class="fa-solid fa-envelope"></i>
            <span>Terms & Condition</span>
          </a>
          <a href="/">
          <i class="fa-solid fa-book"></i>
            <span>Privecy & Policy</span>
          </a>
          <a href="/">
          <i class="fa-solid fa-gear"></i>
            <span>Settings</span>
          </a>
          <a href="/">
          <i class="fa-solid fa-gear"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
