import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Waveyvig-Tech',
    description: (
      <>
        <strong>WaveyVig</strong> is a personal tech project designed to explore and demonstrate modern web development concepts. 
        Built using <strong>Vite</strong>, <strong>React</strong>, <strong>React-Bootstrap</strong>, and <strong>CSS</strong>, 
        this project serves as both a <strong>learning platform</strong> and a <strong>showcase of technology solutions</strong>.
        {/* Additional content for "more" section */}
      </>
    ),
    moreContent: (
      <>
        <p>
          This project includes a modern, responsive design with interactive components and seamless user experience. 
          It demonstrates proficiency in frontend development, component architecture, and styling best practices. 
          The application is optimized for performance and accessibility, providing a smooth experience across devices.
        </p>
      </>
    ),
    image: 'Waveyvighome.JPG',
    projectLink: 'https://waveyvig-tech.vercel.app/', 
    githubLink: 'https://github.com/vicky-6/WaveyvigTech', 
    route: '/aboutwaveyvig', // kept for reference if needed not used now
  },
  {
    title: "Vicky's Tattoo Studio",
    description: (
      <>
        <strong>Vicky’s Tattoo Studio</strong> is a personal project created to design a professional and visually engaging website for a tattoo shop. Built with <strong>React</strong> and <strong>React-Bootstrap</strong>, it combines aesthetics and functionality to provide a user-friendly online experience.
      </>
    ),
    image: '/tattooshop.JPG',
    projectLink: 'https://tattoo-shop-red.vercel.app/', 
    githubLink: 'https://github.com/vicky-6/tattoo-shop', 
    route: '/abouttattooshop',
  },
  
];

const ProjectsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9f2d7',
        padding: '20px',
      }}
    >
      <Container
        style={{
          backgroundColor: '#222',
          borderRadius: '10px',
          padding: '30px',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '30px',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Left side: Content & Buttons */}
            <div
              style={{
                flex: 1,
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h3 style={{ color: '#fff', marginBottom: '15px' }}>{project.title}</h3>
              {/* Description with "more..." toggle */}
              <div className="description-text" style={{ marginBottom: '15px' }}>
                <p style={{ color: '#ccc', marginBottom: '10px' }}>{project.description}</p>
                {expandedIndex === index && (
                  <div style={{ color: '#ddd' }}>{project.moreContent}</div>
                )}
                <span
                  style={{
                    color: '#4caf50',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                  onClick={() => handleToggleExpand(index)}
                >
                  {expandedIndex === index ? 'less' : 'more...'}
                </span>
              </div>
              {/* Buttons: Visit project & GitHub repo */}
              <div className="button-group" style={{ display: 'flex', gap: '15px' }}>
                <Button
                  variant="success"
                  style={{
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    border: '2px solid #fff',
                  }}
                  onClick={() => window.open(project.projectLink, '_blank')}
                >
                  Visit Project
                </Button>
                <Button
                  variant="dark"
                  style={{
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    border: '2px solid #fff',
                  }}
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  GitHub Repo
                </Button>
              </div>
            </div>
            {/* Right side: Image */}
            <div
              style={{
                flex: 1,
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    maxWidth: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </a>
            </div>
          </div>
        ))}
      </Container>

      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;