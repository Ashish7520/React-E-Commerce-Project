import React from "react";
import Youtube from "../Assets/youtube.png";
import Spotify from "../Assets/spotify.png";
import Facebook from "../Assets/facebook.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-2">
          <div className="col-9">My-Ecommerce APP</div>
          <div className="col">
            <a href="#">
              <img className="img" src={Youtube} alt="YouTube" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <img className="img" src={Spotify} alt="Spotify" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <img className="img" src={Facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
