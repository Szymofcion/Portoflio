import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import adRespect from "../assets/adRespect.png";
import "./MyProjects.scss";

const MyProjects = () => {
  return (
    <>
      <div className="projects">
        <h2 className="projects-title">My Procjects</h2>
        <div className="projects__container">
          <div className="projects__container-box">
            <img className="projects__container-box--img" src={adRespect} />
            <div className="projects__container-box--description">
              <p>
                This is a tic-tac-toe multiplayer game. Authentication is used
                in the application. The logged-in user can create a game room to
                play with another online user or play against the computer. The
                user can choose whether to play with "O" or "X", as well as
                reset the game or leave the room.
              </p>
              <div>
                <a>Link A</a>
                <a>Link B</a>
              </div>
              <div>
                <FaBeer /> <FaBeer /> <FaBeer /> <FaBeer />
              </div>
            </div>
          </div>
          <div className="projects__container-box">
            <img className="projects__container-box--img" src={adRespect} />
            <div className="projects__container-box--description">
              <p>
                This is a tic-tac-toe multiplayer game. Authentication is used
                in the application. The logged-in user can create a game room to
                play with another online user or play against the computer. The
                user can choose whether to play with "O" or "X", as well as
                reset the game or leave the room.
              </p>
              <div>
                <a>Link A</a>
                <a>Link B</a>
              </div>
              <div>
                <FaBeer /> <FaBeer /> <FaBeer /> <FaBeer />
              </div>
            </div>
          </div>
          <div className="projects__container-box">
            <img className="projects__container-box--img" src={adRespect} />
            <div className="projects__container-box--description">
              <p>
                This is a tic-tac-toe multiplayer game. Authentication is used
                in the application. The logged-in user can create a game room to
                play with another online user or play against the computer. The
                user can choose whether to play with "O" or "X", as well as
                reset the game or leave the room.
              </p>
              <div>
                <a>Link A</a>
                <a>Link B</a>
              </div>
              <div>
                <FaBeer /> <FaBeer /> <FaBeer /> <FaBeer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
