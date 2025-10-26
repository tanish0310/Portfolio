import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Tanish Chowdhury</span>{" "}
            from <span className="purple">Pune, India</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">Pre-Final</span> year undergraduate student at{" "}
            <span className="purple">IIIT Allahabad</span>.
            <br />I am pursuing a BTech in{" "}
            <span className="purple">Information Technology with specialization in Business Informatics.</span> 
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs 🌐 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tanish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
