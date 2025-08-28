import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./Projects.css";

const projects = [
  {
    title: "Waveyvig-Tech",
    description: (
      <>
        <strong>WaveyVig</strong> is a personal tech project designed to explore
        and demonstrate modern web development concepts. Built using{" "}
        <strong>Vite</strong>, <strong>React</strong>,{" "}
        <strong>React-Bootstrap</strong>, and <strong>CSS</strong>, this project
        serves as both a <strong>learning platform</strong> and a{" "}
        <strong>showcase of technology solutions</strong>.
      </>
    ),
    moreContent: (
      <>
        <p>
          This project includes a modern, responsive design with interactive
          components and seamless user experience. It demonstrates proficiency
          in frontend development, component architecture, and styling best
          practices. The application is optimized for performance and
          accessibility, providing a smooth experience across devices.
        </p>
      </>
    ),
    image: "Waveyvighome.JPG",
    projectLink: "https://waveyvig-tech.vercel.app/",
    githubLink: "https://github.com/vicky-6/WaveyvigTech",
  },
  {
    title: "Scorpion Tattoo Studio",
    description: (
      <>
        <strong>Scorpion Tattoo Studio</strong> is a personal project created to
        design a professional and visually engaging website for a tattoo shop.
        Built with <strong>React</strong> and <strong>React-Bootstrap</strong>,
        it combines aesthetics and functionality to provide a user-friendly
        online experience.
      </>
    ),
    image: "/scorpion.JPG",
    projectLink: "https://scorpion-tattoo-shop.vercel.app/",
    githubLink: "https://github.com/vicky-6/ScorpianTatooShop",
  },
];

const ProjectsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="projects-page">
      <Container className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Left side content */}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>

              <div className="description-text">
                <p className="project-description">{project.description}</p>
                {expandedIndex === index && (
                  <div className="more-content">{project.moreContent}</div>
                )}
                <span
                  className="toggle-more"
                  onClick={() => handleToggleExpand(index)}
                >
                  {expandedIndex === index ? "less" : "more..."}
                </span>
              </div>

              {/* Buttons */}
              <div className="button-group">
                <Button
                  variant="success"
                  className="custom-button"
                  onClick={() => window.open(project.projectLink, "_blank")}
                >
                  Visit Project
                </Button>
                <Button
                  variant="dark"
                  className="custom-button"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  GitHub Repo
                </Button>
              </div>
            </div>

            {/* Right side image */}
            <div className="project-image">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="image-hover"
                />
              </a>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProjectsPage;