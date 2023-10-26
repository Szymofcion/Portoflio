import { useContext } from "react";
import { ProjectsContext } from "../context/MyContext";


const CardProject = () => {
  const { slides } = useContext(ProjectsContext);

  return (
    <div>
      <h1>siemano</h1>
      {slides.map((item, key) => {
        return (
          <div key={key}>
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};


export default CardProject;
