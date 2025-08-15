import pic from "./assets/pic.PNG";
import react from "./assets/react.png";
import tailwind from "./assets/tailwind.png";
import js from "./assets/js.png";
import figma from "./assets/figma.png";
import tech from "./assets/btn-tech.png";
import vis from "./assets/btn-vis.png";

const Main = () => {
  return (
    <div
      id="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Hey! I build things</h2>
      <div
        style={{
          background: "#e7e7e7",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "2px #6b6b6b solid",
          borderRadius: "13px",
          padding: "20px",
        }}
      >
        <p>take a look at my work</p>
        <div>
          <img src={tech} id="btn" style={{ height: "50px", margin: "10px" }} />
          <img src={vis} id="btn" style={{ height: "50px", margin: "10px" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={react} id="logo" />
        <img src={js} id="logo" />
        <img src={tailwind} id="logo" />
        <img src={figma} id="logo" />
      </div>
    </div>
  );
};

export default Main;
