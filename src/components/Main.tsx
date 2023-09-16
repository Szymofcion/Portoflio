import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import ParticlesBackground from "../ui/ParticlesBackground";
import "./Main.scss";
const Main = () => {
  return (
    <div className="container">
      <ParticlesBackground />
      <div className="container__description">
        <h1>
          Szymon <span className="text-blue">Dziewa</span>
        </h1>
        <span>
          <span className="text-blue">Frontend</span> Developer
        </span>
      </div>
      <a className="container__arrow bounce-top " href="#aboutus">
        <FaBeer />
      </a>
    </div>
  );
};
export default Main;
