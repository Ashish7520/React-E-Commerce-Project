import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import classes from "./HomePage.module.css";

import PlayImg from "../Assets/play.png";

const toursPlan = [
  {
    date: "July 16",
    location: "Delhi",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "July 19",
    location: "Mumbai",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "July 21",
    location: "Ahmedabad",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "July 24",
    location: "Pune",
    venue: "AK-CHIN PAVILION",
  },
];

const HomePage = () => {
  return (
    <>
      <Container className="d-grid justify-content-center mt-5">
        <h1>The Nandawana Stores</h1>
        <Button className={classes.headerBtn} variant="outline-primary">
          Get our latest album
        </Button>
        <Image className={classes.playBtn} src={PlayImg} alt="Play" />
        <h2>Tours</h2>
        <ul className={classes.bodyUl}>
          {toursPlan.map((item) => (
            <li className={classes.bodyLi} key={item.date}>
              <span className={classes.liSpan}>{item.date}</span>
              <span className={classes.liSpan}>{item.location}</span>
              <span className={classes.liSpan}>{item.venue}</span>
              <Button variant="outline-primary">Buy Tickets</Button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default HomePage;
