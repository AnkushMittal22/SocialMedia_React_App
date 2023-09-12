import React from "react";
import style from "./MainSide.module.css";
const MainSide = () => {
  return (
    // <div className="mainSide">
    <div className={style.main}>
      <ul>
        <li>
          <div  >
            <span className="fa-solid fa-user"></span>My Feed
          </div>
        </li>

        <li>
          <div  >
            <span className="fa-solid fa-signs-post"></span>My Post
          </div>
        </li>
        <li>
          <div  >
            <span className="fa-sharp fa-solid fa-envelopes-bulk"></span>My Team Post
          </div>
        </li>
        <li>
          <div  >
            <span className="fa-solid fa-users"></span>My Follwing Post
          </div>
        </li>
        <li>
        <div  >
          <span className="fa-solid fa-share-nodes"></span>Shared Post
          </div>
        </li>
      </ul>
    </div>

    // </div>

  );
};

export default MainSide;
