import "./ourApp.scss";
import screen from "../assets/images/mobile-screen.png";
import screenPage from "../assets/images/mobile-screen-page.png";

const resultsArr = [
  {
    id: 1,
    headline: "1000+",
    description: "Doctors onboard",
  },
  {
    id: 2,
    headline: "200+",
    description: "Clinic partners",
  },
  {
    id: 3,
    headline: "1.5M",
    description: "Active Users",
  },
];

export default function OurApp() {
  return (
    <div className="our-app">
      <div className="container">
        <h3>Our App</h3>
        <p>
          Introducing, the <b>digiCare</b> App. Book all you medical needs at
          the comfort of you home.
        </p>
        <div className="about-image">
          <img src={screenPage} className="screen-page" alt="screen page" />
          <img src={screen} className="screen" alt="screen" />
          <div className="cards">
            {resultsArr.map((card) => {
              return (
                <div className="card" key={card.id}>
                  <h3>{card.headline}</h3>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
