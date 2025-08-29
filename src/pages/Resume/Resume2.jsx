// Resume.jsx
import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }, []);

  const togglePreview = () => {
    const container = document.getElementById("resume-container");
    container.classList.toggle("preview");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>
        {`
        :root{
          --bg: #fdf6e3;
          --text: #000000;
          --muted: #444444;
          --accent: #004aad;
          --heading: #222222;
        }

        #resume-container{
          position: relative;
          background: var(--bg);
          padding: 20px 0;
        }

        .resume-background {
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            #fdf6e3,
            #fdf6e3 28px,
            #f9f1dc 29px
          );
          opacity: 0.97;
          z-index: -1;
        }

        .container{
          max-width: 900px;
          margin: 30px auto;
          padding: 0 20px 20px 40px;
          border: 3px solid var(--accent);
          background: rgba(255,255,255,0.88);
          position: relative;
          z-index: 1;
        }

        .header{
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #999;
          flex-wrap: wrap;
        }
        .header .left{ width: 100%; max-width: 45%; }
        .name{ margin: 0; font-size: 2.4rem; font-weight: 700; color: var(--accent); letter-spacing: 0.5px; }
        .role{ margin: 4px 0 0 0; font-size: 1.1rem; color: var(--muted); font-style: italic; }
        .contact{
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 4px;
          font-size: 0.95rem; text-align: right;
          width: 100%; max-width: 45%;
        }
        .contact a{ color: var(--text); text-decoration: none; }
        .contact a:hover{ color: var(--accent); }

        .card{ margin: 16px 0; }
        .card h2{
          margin: 0 0 10px 0;
          font-size: 1.35rem;
          color: var(--accent);
          border-bottom: 2px dashed var(--accent);
          padding-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .project h3, .job h3, .edu h3{
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--heading);
          margin: 0 0 4px 0;
          border-left: 4px solid var(--accent);
          padding-left: 6px;
        }

        .tags{
          display: flex; flex-wrap: wrap; gap: 8px;
          list-style: none; padding: 0; margin: 0;
        }
        .tags li{
          background: #f0e6d2;
          border-radius: 999px;
          padding: 5px 14px;
          font-size: 0.9rem;
          border: 1px solid #d0c8b0;
        }

        .bordered{ padding: 6px 0; margin: 10px 0; }
        .project p, .job p{ margin: 3px 0; font-size: 0.92rem; }
        .job-head{ display: flex; justify-content: space-between; flex-wrap: wrap; }
        .meta{ color: var(--muted); font-size: 0.85rem; font-style: italic; }
        .bullets{ margin: 4px 0; padding-left: 20px; font-size: 0.9rem; }
        .bullets li{ margin: 2px 0; }

        .print-btn, .preview-btn {
          margin: 8px 6px; padding: 8px 16px;
          border: none; border-radius: 4px;
          background: var(--accent); color: #fff;
          font-size: 0.9rem; font-weight: 600;
          cursor: pointer;
        }
        .print-btn:hover, .preview-btn:hover { background: #003080; }

        /* Print adjustments */
        @media print {
          .container{ border: 2px solid #000; background: #fdf6e3; }
          .print-btn, .preview-btn { display: none; }
        }

        /* Preview Mode */
        .preview{ zoom: 0.9; background: #fdf6e3 !important; color: #000 !important; }
        .preview .container{ border: 2px solid #000; }

        /* Mobile responsiveness */
        @media (max-width: 768px){
          .header{ flex-direction: column; align-items: flex-start; }
          .header .left, .contact{ max-width: 100%; width: 100%; text-align: left; }
          .contact{ margin-top: 10px; }
        }
        `}
      </style>

      <div id="resume-container">
        <div className="resume-background"></div>
        <main className="container">
          {/* Header */}
          <header className="header">
            <div className="left">
              <h1 className="name">VIGNESH S</h1>
              <p className="role">Quality Assurance Engineer → Aspiring MERN Full-Stack Developer</p>
            </div>
            <ul className="right contact">
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
              <p><strong>URL:</strong> <a href="https://waveyvig-tech.vercel.app/" target="_blank" rel="noreferrer">waveyvig-tech.vercel.app</a></p>
            </div>
            <div className="project bordered">
              <h3>Scorpion Tattoo Studio</h3>
              <p>
                A professional website designed for a tattoo studio using React and React-Bootstrap.
                Combines aesthetics with functionality to deliver a clean, user-friendly experience.
              </p>
              <p><strong>URL:</strong> <a href="https://scorpion-tattoo-studio.vercel.app/" target="_blank" rel="noreferrer">scorpion-tattoo-studio.vercel.app</a></p>
            </div>
          </section>

          {/* Experience */}
          <section className="card">
            <h2>💼 Experience</h2>
            {/* Jobs */}
            {/* ... same as previous JSX ... */}
          </section>

          {/* Education */}
          <section className="card">
            <h2>🎓 Education</h2>
            {/* ... same as previous JSX ... */}
          </section>

          <footer className="footer">
            <p>© <span id="year"></span> Vignesh S — Resume</p>
            <button className="preview-btn" onClick={togglePreview}>👁 Toggle Print Preview</button>
            <button className="print-btn" onClick={handlePrint}>🖨 Print / Save as PDF</button>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Resume;
