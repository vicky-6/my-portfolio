import React from 'react';

const experiences = [
  {
    companyName: 'Clicklabs Pvt Ltd',
    role: 'Quality Assurance Engineer-intern',
    location: 'Panchkula, Chandigarh',
    product: 'Yelo and Tookan',
    duration: 'Aug 2019 - Apr 2020',
    description: 'During this internship, I assisted in testing and ensuring the quality of Yelo and Tookan products. I collaborated with developers to identify bugs, wrote test cases, and used tools like Postman for API testing. I also maintained test documentation and coordinated with the team to improve product stability.',
    technologies: ['Trello', 'MySQL', 'Postman', 'Huskey ERP'],
  },
  {
    companyName: 'Clicklabs Pvt Ltd',
    role: 'Associate Quality Assurance Engineer',
    location: 'Panchkula, Chandigarh',
    product: 'Yelo and Tookan',
    duration: 'May 2020 - Feb 2022',
    description: 'In this role, I performed manual and automated testing using tools like Postman and RestAssured. I contributed to test planning, execution, and reporting, ensuring the products met quality standards. I worked closely with developers to troubleshoot issues and enhance testing processes.',
    technologies: ['Trello', 'MySQL', 'Postman', 'Huskey ERP', 'RestAssured'],
  },
  {
    companyName: 'Sunstone Pvt Ltd',
    role: 'Quality Assurance Engineer',
    location: 'Gurgaon, Haryana',
    product: 'CRM',
    duration: 'Feb 2022 - Sep 2023',
    description: 'Led automation testing for the CRM product using Selenium, RestAssured, and BrowserStack. I managed test cases in JIRA, analyzed web analytics with Google Analytics, and ensured cross-browser compatibility. My focus was on improving test coverage and reducing manual testing efforts.',
    technologies: ['JIRA', 'MySQL', 'Postman', 'RestAssured', 'Google Analytics', 'BrowserStack', 'Selenium'],
  },
];

const Experience = () => {
  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>My Experience</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card-container"
            style={{
              width: '300px',
              backgroundColor: '#fff',
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              padding: '20px',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            }}
          >
            <h4 style={{ marginBottom: '10px', color: '#007bff' }}>{exp.companyName}</h4>
            <h5 style={{ marginBottom: '8px', fontStyle: 'italic' }}>{exp.role}</h5>
            {/* Location with icon */}
            <p style={{ fontSize: '0.9rem', color: '#555', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <i className="bi bi-geo-alt-fill" style={{ color: '#007bff' }}></i>
              {exp.location} | {exp.duration}
            </p>
            <p style={{ fontSize: '0.95rem', color: '#333', marginBottom: '10px' }}>
              {exp.description}
            </p>
            <div style={{ marginBottom: '10px' }}>
              <strong>Technologies Used:</strong>
              <ul style={{ paddingLeft: '20px', margin: '8px 0', listStyleType: 'circle' }}>
                {exp.technologies.map((tech, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem' }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
