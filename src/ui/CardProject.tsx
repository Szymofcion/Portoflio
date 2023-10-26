import { useContext } from "react";
import MyContext from "../context/MyContext";
const CardProject = () => {
  const myData = useContext(MyContext);
  console.log(myData);
  return (
    <div>
      <div>
        <h2></h2>
      </div>
      <img src=""></img>
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default CardProject;
