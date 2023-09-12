import LeftSideBox from "./components/page/LeftSideBox";
import MidSideBox from "./components/page/MidSideBox";
import style from "./App.module.css";
import RightSideBox from "./components/page/RightSideBox";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className={style.leftbox}>
        <LeftSideBox />
      </div>
      <div className={style.midbox}>
        <MidSideBox />
      </div>
      <div className={style.rightbox}>
        <RightSideBox />
      </div>
    </div>
  );
}

export default App;
