import "./footer.scss";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <section>
          <button>
            <img src={logo} alt="menu" />
          </button>
          <p className="description">
            <b>digiCare</b> brings all your medical needs in one place and have
            it accessible through technology.
          </p>
          <div className="row">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
          </div>
        </section>
        <section>
          <h4>About</h4>
          <button>Services</button>
          <button>Pricing</button>
          <button>Contact</button>
          <button>Careers</button>
        </section>
        <section>
          <h4>Company</h4>
          <button>Community</button>
          <button>Help Center</button>
          <button>Support</button>
        </section>
        <div className="copyright">
          <p>
            © 2020 <a href="#">digiCare</a>. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
