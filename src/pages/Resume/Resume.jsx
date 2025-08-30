import React from 'react';

const ResumePage = () => {
  return (
    <>
      

      {/* Main content */}
      <div className="resume-section d-flex align-items-center">
        <div className="container p-4">
          {/* Download link */}
          <div className="text-center mb-4">
            <a href="/vigneshs-resume.pdf" download className="btn btn-success btn-lg">
              Download Resume
            </a>
          </div>

          {/* Layout with profile on left and image on right */}
          <div className="row">
            {/* Left side: Profile info & skills */}
            <div className="col-md-4 mb-4">
              <div className="card p-3 shadow-sm bg-white rounded mb-4">
                <h5 className="mb-3">PROFILE</h5>
                <p><strong>Email:</strong> svickyvenkats@gmail.com</p>
                <p><strong>Phone:</strong> +91 8248429488</p>
                <p><strong>Location:</strong> Theni, Tamil Nadu, India</p>
                <p><strong>GitHub:</strong> https://github.com/vicky-6</p>
                <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/vignesh-s-8ba306148/</p>
              </div>
              
            </div>

            {/* Right side: Show image of PDF page */}
            <div className="col-md-8 mb-4">
              <div className="p-2 rounded shadow-sm" style={{ width: '100%', height: '150vh' }}>
                <img 
                  src="/VIGNESHS-single.jpg"
                  alt="Resume Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom download button */}
          <div className="text-center mt-4">
            <a href="/vigneshs-resume.pdf" download className="btn btn-success btn-lg">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Optional styles */}
      <style jsx>{`
        .resume-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #e0f7fa, #ffe0b2);
        }
        img {
          display: block;
        }
      `}</style>
    </>
  );
};

export default ResumePage;