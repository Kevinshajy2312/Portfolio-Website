import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kevin Shajy</span>
            from <span className="purple"> Hyderabad, India.</span>
            <br /> I am a third year student pursuing my Bachelors BTech (CSc)
            in AI and ML at VIT Chennai.
            <br />
            Additionally, I am currently an intern as a trainee  at 1Stop.ai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kevin Shajy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
