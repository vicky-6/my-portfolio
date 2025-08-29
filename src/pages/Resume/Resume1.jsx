import React from "react";
import jsPDF from "jspdf";

const Resume = () => {
  const downloadPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");

    doc.html(document.getElementById("resume"), {
      callback: function (doc) {
        doc.save("Vignesh_Resume.pdf");
      },
      x: 20,
      y: 20,
      width: 560, // A4 content width
      windowWidth: 1000, // ensure desktop-like layout even on mobile
    });
  };

  return (
    <div>
      <style>{`
        :root {
          --bg: #fdf6e3;
          --text: #222222;
          --muted: #555555;
          --accent: #004aad;
          --border: #cccccc;
        }
        body {
          margin: 0;
          font-family: "Segoe UI", Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
        }
        .resume-container {
          max-width: 900px;
          margin: 20px auto;
          padding: 20px 40px;
          border: 3px solid var(--accent);
          background: #fffef8;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 2px solid var(--border);
          padding-bottom: 12px;
          margin-bottom: 20px;
        }
        .name {
          margin: 0;
          font-size: 2.3rem;
          color: var(--accent);
          font-weight: 700;
        }
        .role {
          margin: 4px 0 0 0;
          font-size: 1rem;
          color: var(--muted);
        }
        .contact {
          list-style: none;
          margin: 0; padding: 0;
          text-align: right;
          font-size: 0.9rem;
        }
        .contact li { margin: 3px 0; }
        .contact a { color: var(--text); text-decoration: none; }
        .contact a:hover { color: var(--accent); }
        .card {
          margin: 18px 0;
        }
        .card h2 {
          font-size: 1.3rem;
          color: var(--accent);
          margin-bottom: 8px;
          border-bottom: 2px solid var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding-bottom: 3px;
        }
        .tags {
          display: flex; flex-wrap: wrap; gap: 8px;
          list-style: none; padding: 0; margin: 0;
        }
        .tags li {
          background: #f4f4f4;
          border: 1px solid #ddd;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 0.85rem;
        }
        .bordered {
          margin: 10px 0;
          padding: 8px;
          border-left: 3px solid var(--accent);
        }
        .job-head {
          display: flex; justify-content: space-between;
        }
        .job p, .project p { margin: 3px 0; font-size: 0.9rem; }
        .meta { font-size: 0.85rem; color: var(--muted); }
        .footer {
          text-align: center;
          margin: 20px 0 10px;
          font-size: 0.85rem;
          color: var(--muted);
        }
        .print-btn {
          margin-top: 8px;
          padding: 10px 18px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
        }
        .print-btn:hover {
          background: #003080;
        }
      `}</style>

      <div id="resume" className="resume-container">
        {/* Header */}
        <header className="header">
          <div>
            <h1 className="name">VIGNESH S</h1>
            <p className="role">
              Quality Assurance Engineer → Aspiring MERN Full-Stack Developer
            </p>
          </div>
          <ul className="contact">
            <li>📞 <a href="tel:+918248429488">+91 8248429488</a></li>
            <li>✉️ <a href="mailto:svickyvenkats@gmail.com">svickyvenkats@gmail.com</a></li>
            <li>🔗 <a href="https://linkedin.com/in/vignesh-s-8ba306148/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>💻 <a href="https://github.com/vicky-6" target="_blank" rel="noreferrer">GitHub</a></li>
            <li>📍 Theni, Tamil Nadu 625582</li>
          </ul>
        </header>

        {/* Objective */}
        <section className="card">
          <h2>🎯 Objective</h2>
          <p>
            I have 4 years of experience in QA and now I want to move into MERN Full-Stack Development.
            My QA background helps me ship reliable, scalable features with strong testing foundations
            while building modern web applications.
          </p>
        </section>

        {/* Skills */}
        <section className="card">
          <h2>🛠 Skills</h2>
          <ul className="tags">
            <li>HTML</li><li>CSS</li><li>Bootstrap</li><li>JavaScript</li>
            <li>React.js</li><li>Node.js</li><li>Express.js</li><li>MongoDB</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="card">
          <h2>📂 Projects</h2>
          <div className="project bordered">
            <h3>WaveyVig</h3>
            <p>
              A personal tech project built with Vite, React, and React-Bootstrap to explore modern web
              development concepts. Features responsive design, reusable components, and accessibility best practices.
            </p>
            <p>
              <strong>URL:</strong>{" "}
              <a href="https://waveyvig-tech.vercel.app/" target="_blank" rel="noreferrer">
                waveyvig-tech.vercel.app
              </a>
            </p>
          </div>
          <div className="project bordered">
            <h3>Scorpion Tattoo Studio</h3>
            <p>
              A professional website designed for a tattoo studio using React and React-Bootstrap.
              Combines aesthetics with functionality to deliver a clean, user-friendly experience.
            </p>
            <p>
              <strong>URL:</strong>{" "}
              <a href="https://scorpion-tattoo-studio.vercel.app/" target="_blank" rel="noreferrer">
                scorpion-tattoo-studio.vercel.app
              </a>
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="card">
          <h2>💼 Experience</h2>
          <article className="job bordered">
            <div className="job-head">
              <h3>Quality Assurance Engineer — Sunstone Pvt Ltd</h3>
              <span className="meta">Gurgaon · Mar 2022 – Sep 2023</span>
            </div>
            <p><strong>Project:</strong> CRM</p>
            <ul className="bullets">
              <li>Conducted thorough testing to ensure software reliability.</li>
              <li>Applied Agile techniques for timely milestones.</li>
              <li>Mentored junior QA engineers and improved test coverage.</li>
            </ul>
            <p className="stack"><strong>Tools:</strong> JIRA, MySQL, Postman, RestAssured, Selenium</p>
          </article>

          <article className="job bordered">
            <div className="job-head">
              <h3>Associate QA Engineer — Clicklabs Pvt Ltd</h3>
              <span className="meta">Panchkula · May 2020 – Feb 2022</span>
            </div>
            <p><strong>Products:</strong> Yelo & Tookan</p>
            <ul className="bullets">
              <li>Ensured efficient product launches with off-site coordination.</li>
              <li>Resolved customer issues by identifying root causes.</li>
              <li>Maintained product quality with advanced testing methods.</li>
            </ul>
            <p className="stack"><strong>Tools:</strong> Trello, MySQL, Postman, RestAssured</p>
          </article>

          <article className="job bordered">
            <div className="job-head">
              <h3>QA Intern — Clicklabs Pvt Ltd</h3>
              <span className="meta">Panchkula · Aug 2019 – Apr 2020</span>
            </div>
            <p><strong>Products:</strong> Yelo & Tookan</p>
            <ul className="bullets">
              <li>Generated detailed test reports and milestones.</li>
              <li>Created technical documentation for clients.</li>
              <li>Collaborated with cross-functional teams.</li>
            </ul>
          </article>
        </section>

        {/* Education */}
        <section className="card">
          <h2>🎓 Education</h2>
          <div className="edu bordered">
            <h3>Lovely Professional University</h3>
            <p className="meta">B.Tech CSE · Major: SAP ABAP · CGPA: 7.31 · Apr 2020</p>
          </div>
          <div className="edu bordered">
            <h3>Mohamed Sathak Polytechnic College</h3>
            <p className="meta">Diploma in Marine Engineering · CGPA: 7.5 · Apr 2017</p>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Vignesh S — Resume</p>
          <button className="print-btn" onClick={downloadPDF}>
            🖨 Download as PDF
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
