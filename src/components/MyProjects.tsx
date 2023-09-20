import adRespect from "../assets/Untitled.png";
import shoesShop from "../assets/ShoesShop.png";
import cartOrders from "../assets/carOrders.png";
import "./style/MyProjects.scss";

const MyProjects = () => {
  return (
    <>
      <section className="projects" id="myProject">
        <h2 className="projects-title">My Procjects</h2>
        <div className="projects__container">
          <div className="projects__container-box">
            <img className="projects__container-box--img" src={adRespect} />
            <a href="https://szymofcion.github.io/adRespect/" target="_blank">
              <div className="projects__container-box--description">
                <p>
                  This is a tic-tac-toe multiplayer game. Authentication is used
                  in the application. The logged-in user can create a game room
                  to play with another online user or play against the computer.
                  The user can choose whether to play with "O" or "X", as well
                  as reset the game or leave the room.
                </p>
              </div>
            </a>
          </div>

          {/* <a
            href="https://szymofcion.github.io/ShoesShopRedux/"
            className="projects__container-box"
            target="_blank"
          >
            <img className="projects__container-box--img" src={shoesShop} />
            <div className="projects__container-box--description">
              <p>
                This is a tic-tac-toe multiplayer game. Authentication is used
                in the application. The logged-in user can create a game room to
                play with another online user or play against the computer. The
                user can choose whether to play with "O" or "X", as well as
                reset the game or leave the room.
              </p>
            </div>
          </a>
          <a
            href="https://szymofcion.github.io/car_orders/index.html"
            className="projects__container-box"
            target="_blank"
          >
            <img className="projects__container-box--img" src={cartOrders} />
            <div className="projects__container-box--description">
              <p>
                This is a tic-tac-toe multiplayer game. Authentication is used
                in the application. The logged-in user can create a game room to
                play with another online user or play against the computer. The
                user can choose whether to play with "O" or "X", as well as
                reset the game or leave the room.
              </p>
            </div>
          </a>
          <a
            href="https://szymofcion.github.io/car_orders/index.html"
            className="projects__container-box"
            target="_blank"
          >
            <img className="projects__container-box--img" src={cartOrders} />
            <div className="projects__container-box--description">
              <p>
                This is a tic-tac-toe multiplayer game. Authentication is used
                in the application. The logged-in user can create a game room to
                play with another online user or play against the computer. The
                user can choose whether to play with "O" or "X", as well as
                reset the game or leave the room.
              </p>
            </div>
          </a>
          <a
            href="https://szymofcion.github.io/car_orders/index.html"
            className="projects__container-box"
            target="_blank"
          >
            <img className="projects__container-box--img" src={cartOrders} />
            <div className="projects__container-box--description">
              <p>
                This is a tic-tac-toe multiplayer game. Authentication is used
                in the application. The logged-in user can create a game room to
                play with another online user or play against the computer. The
                user can choose whether to play with "O" or "X", as well as
                reset the game or leave the room.
              </p>
            </div>
          </a>
          <a
            href="https://szymofcion.github.io/car_orders/index.html"
            className="projects__container-box"
            target="_blank"
          >
            <img className="projects__container-box--img" src={cartOrders} />
            <div className="projects__container-box--description">
              <p>
                This is a tic-tac-toe multiplayer game. Authentication is used
                in the application. The logged-in user can create a game room to
                play with another online user or play against the computer. The
                user can choose whether to play with "O" or "X", as well as
                reset the game or leave the room.
              </p>
            </div>
          </a> */}
        </div>
      </section>
    </>
  );
};

export default MyProjects;
