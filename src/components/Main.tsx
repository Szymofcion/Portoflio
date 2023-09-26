import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../ui/ParticlesBackground";
// import image from "../assets/download_image_1695752648297.png";
import "./style/Main.scss";
const Main = () => {
  return (
    <section className="container" id="main">
      <ParticlesBackground />
      <div className="container__top">
        <button className="container__top-button">Stay in touch</button>
      </div>
      <div className="container__description">
        <h1>
          Szymon <span className="text-blue">Dziewa</span>
        </h1>
        <p>
          <span className="text-blue">Frontend</span> Developer
        </p>
        <TypeAnimation
          cursor={false}
          className="container__description-text type "
          sequence={[
            1500,
            "Hi, I'am Szymon, a passionate programing from Wroclaw",
            2000,
            "Hi, I'am Szymon, a passionate programing from Poland",
          ]}
          speed={40}
          deletionSpeed={1}
          repeat={4}
        />
        <a className="container__arrow bounce-top " href="#aboutus">
          ▼
        </a>
      </div>
      {/* <div className="container__image">
        <img src={image} alt="" />
      </div> */}
    </section>
  );
};
export default Main;
