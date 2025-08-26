import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Sample icons 
import { FaJs, FaReact, FaNodeJs, FaBootstrap, FaPython,FaGithub , FaAws, FaGem, FaPenFancy, FaLink, FaDocker,FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript,SiPostman, SiJira, SiMongodb  } from "react-icons/si";
const skills = [
  { icon: <FaHtml5 size={40} />, label: "HTML" },
  { icon: <FaCss3Alt size={40} />, label: "CSS" },
  { icon: <FaBootstrap size={40} />, label: 'Bootstrap' },
  { icon: <FaJs size={40} />, label: 'JS' },
  { icon: <FaReact size={40} />, label: 'React' },
  { icon: <FaNodeJs size={40} />, label: 'Node.js' },
  { icon: <SiPostman size={40} />, label: "Postman" },
  { icon: <SiJira size={40} />, label: "Jira" },
  { icon: <FaGithub size={40} />, label: "GitHub" },
  { icon: <SiMongodb size={40} color="#4DB33D" />, label: "MongoDB" },
  
  // { icon: <FaPython size={40} />, label: 'Python' },
  // { icon: <FaAws size={40} />, label: 'AWS' },
  // { icon: <FaGem size={40} />, label: 'Gem' },
  // { icon: <FaPenFancy size={40} />, label: 'Design' },
  // { icon: <FaLink size={40} />, label: 'Link' },
  // { icon: <SiTypescript size={40} />, label: 'TS' },
  // { icon: <FaDocker size={40} />, label: 'Docker' },
  
  
  
  

];

const SkillsetGrid = () => {
  return (
    <Container className="text-center my-4">
      <h2>
        Professional <span className="text-success">Skillset</span>
      </h2>
      <Row className="mt-4 g-4 justify-content-center">
        {skills.map((skill, index) => (
          <Col key={index} xs={6} sm={3} md={2} className="d-flex justify-content-center">
            <Card style={{ width: '8rem', height: '8rem' }} className="d-flex flex-column align-items-center justify-content-center text-white bg-dark border-0 rounded-3 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center p-3">
                {skill.icon}
                <div className="mt-2">{skill.label}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsetGrid;