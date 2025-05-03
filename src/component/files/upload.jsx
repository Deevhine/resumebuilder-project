import { NavLink } from "react-router-dom";
import '../files/upload.css';
import { useState, useEffect } from 'react';

function Upload() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust the time according to your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-holder">
          <div className="loader"></div>
          <div className="loader-text">Loading...</div>
        </div>
      ) : (
        <div className="upload-holder">
          <h1>How do you want to start?</h1>
          <div className="options">
            <div className="option">
              <img src="src/assets/file-pdf.svg" alt="" />
              <NavLink to='/template' className='preview'>Create a new CV</NavLink>
              <p>We will help you create a CV <br /> -step by step</p>
            </div>
            <div className="option">
              <img src="src/assets/cloud-download.svg" alt="" />
              <NavLink to='/template' className='preview'>I already have a CV</NavLink>
              <p>We will reformat it and fill your information <br /> so that you dont have to.</p>
            </div>
          </div>
          <div className="options-holder">
            <NavLink to='/buildresume' className="backward">
              <button>Back</button>
            </NavLink>
            <NavLink to='/template' className="forward">
              <button>Next</button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Upload;


