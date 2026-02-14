import React from "react";

const ResumePage = () => {
  return (
    <>
      {/* Main content */}
      <div className="resume-section d-flex align-items-center">
        <div className="container p-4">
          {/* Top download link */}
          <div className="text-center mb-4">
            <a
              href="/vigneshs-updated.pdf"
              download
              className="btn btn-success btn-lg"
            >
              Download Resume
            </a>
          </div>

          {/* Layout with Education on left and Resume image on right */}
          <div className="row">
            {/* Left side: Education info */}
            <div className="col-md-4 mb-4">
              <div className="card education-card p-3 shadow-sm bg-white rounded mb-4">
                <h5 className="mb-3">🎓 Education</h5>
                <ul className="education-list">
                  <li>
                    <span className="edu-icon">🎓</span>
                    <div className="edu-content">
                      <strong>Lovely Professional University</strong>
                      <span>B.Tech CSE · Major: SAP ABAP · CGPA: 7.31 · Apr 2020</span>
                    </div>
                  </li>
                  <li>
                    <span className="edu-icon">🎓</span>
                    <div className="edu-content">
                      <strong>Mohamed Sathak Polytechnic College</strong>
                      <span>Diploma in Marine Engineering · CGPA: 7.5 · Apr 2017</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side: Resume image */}
            <div className="col-md-8 mb-4">
              <div
                className="p-2 rounded shadow-sm resume-img-container"
                style={{ width: "100%", minHeight: "100%" }}
              >
                <img
                  src="/VIGNESHS-single.jpg"
                  alt="Resume Preview"
                  className="resume-img"
                />
              </div>
            </div>
          </div>

          {/* Bottom download button */}
          <div className="text-center mt-4">
            <a
              href="/vigneshs-resume.pdf"
              download
              className="btn btn-success btn-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .resume-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #e0f7fa, #ffe0b2);
        }

        .education-card {
          background: linear-gradient(145deg, #fef9f4, #fff3e6);
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
        }

        .education-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .education-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
          padding: 12px;
          border-radius: 12px;
          background: #fffdf7;
          transition: background 0.3s;
        }

        .education-list li:hover {
          background: #fff6e0;
        }

        .edu-icon {
          font-size: 1.5rem;
          margin-right: 12px;
          line-height: 1.4;
        }

        .edu-content strong {
          display: block;
          color: #333;
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .edu-content span {
          font-size: 0.9rem;
          color: #555;
        }

        .resume-img-container {
          width: 100%;
          height: 100%;
        }

        .resume-img {
          width: 100%;
          height: 300%;
          object-fit: contain;
          display: block;
        }

        /* Mobile adjustments */
        @media (max-width: 767px) {
          .col-md-4,
          .col-md-8 {
            padding-left: 0;
            padding-right: 0;
          }

          .col-md-4 {
            margin-bottom: 20px; /* spacing between education and resume image */
          }

          .resume-img-container {
            height: auto; /* auto height on mobile to avoid overflow */
          }

          .education-card {
            padding: 16px;
          }

          .education-list li {
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default ResumePage;
