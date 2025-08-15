import "./App.css";
import gif1 from "./assets/_.gif";
import gif2 from "./assets/gg.gif";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import Main from "./mainPage";
import ThingsILike from "./thingsILike";
import SkillSet from "./skillSet";
import { useEffect, useState } from "react";
function App() {
  return (
    <div className="main-container">
      <header>
        <div id="div1">
          <img style={{ height: "120px" }} src={gif1} />

          <h1>Muhammad Si</h1>
          <img style={{ height: "100px" }} src={gif2} />
        </div>
        <div id="nav">
          <Link to="/">
            <button>-Home-</button>
          </Link>
          {/* <Link to="/">
            <button>-who am i-</button>
          </Link> */}
          <Link to="/2">
            <button>-things i like-</button>
          </Link>

          <Link to="/3">
            <button>-skill set-</button>
          </Link>
        </div>
      </header>
      <hr
        style={{
          marginTop: "60px",
          border: "0.5px #6b6b6b solid",
          width: "80%",
        }}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/2" element={<ThingsILike />} />
        <Route path="/3" element={<SkillSet />} />
      </Routes>
    </div>
  );
}

export default App;
