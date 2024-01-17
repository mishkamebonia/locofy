import "./navBar.scss";
import logo from "../assets/logo.svg";
import menu from "../assets/icons/Menu.svg";
import questionSquare from "../assets/icons/QuestionSquare.svg";

export default function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <button>
            <img src={menu} alt="menu" />
          </button>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <button>
            <img src={questionSquare} alt="question square" />
          </button>
        </div>
      </div>
    </nav>
  );
}
