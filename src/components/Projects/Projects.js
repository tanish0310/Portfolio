import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import capling from "../../Assets/Projects/capling.png";
import errinsight from "../../Assets/Projects/errinsight.png";
import placement from "../../Assets/Projects/placement.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capling}
              isBlog={false}
              title="Capling"
              description="AI-powered personal finance app with gamified dinosaur companion. Uses Google Gemini to analyze transactions, classify spending habits, and generate personalized financial lessons. Features XP-based leveling, transaction justification system, and automatic budget adjustment. Built with Next.js, TypeScript, Supabase, and Tailwind CSS."
              ghLink="https://github.com/tanish0310/capling.ai"
              demoLink="https://capling-ai.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={errinsight}
              isBlog={false}
              title="ErrInsight"
              description="AI-powered error analysis tool that converts cryptic programming errors into plain English explanations. Built with Next.js, Groq AI (Llama 4), and Appwrite. Features include multi-language support, interactive analytics dashboard, rate limiting, collaborative sharing, and real-time error pattern tracking. Deployed on Vercel with full CI/CD."
              ghLink="https://github.com/tanish0310/ErrInsight"
              demoLink="https://err-insight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placement}
              isBlog={false}
              title="Campus Placement Portal"
              description="A full-stack web platform that automates campus placements by connecting students, recruiters, and administrators. Developed using Django, React, and MySQL, it provides secure logins, resume uploads, job management, and application tracking — ensuring a seamless, transparent, and efficient campus recruitment process"
              ghLink="https://github.com/tanish0310/Placement-Portal"
              demoLink="https://placement-portal-khaki.vercel.app/"              
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
