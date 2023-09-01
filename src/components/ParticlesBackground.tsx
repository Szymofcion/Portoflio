import particlesConfig from "./config/particles-config";
import Particles from "react-tsparticles";
const ParticlesBackground = () => {
  return <Particles params={particlesConfig}></Particles>;
};
export default ParticlesBackground;
