import React, { useState, useEffect } from 'react';
import '../files/index.css'
import { NavLink } from 'react-router-dom';

function Buildresume() {
  const [time, setTime] = useState(0);
  const [loading, setLoading] = useState(true);
  const targetTime = 14 * 60 + 41;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust the time according to your needs

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev < targetTime ? prev + 1 : targetTime));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');

  return (
    <>
      {loading ? (
        <div className="loader-holder">
          <div className="loader"></div>
          <div className="loader-text">Loading...</div>
        </div>
      ) : (
        <div className="holder">
          <div className="card-01">
            <div className="card-001">
              <h1>Just three simple steps</h1>
              <div className="spaceholder">
                <div className="space">
                  <div className="rap">1</div>
                  <p><span>Select</span> a CV template from our library of professional designs.</p>
                </div>
                <div className="space">
                  <div className="rap">2</div>
                  <p><span>Create</span> your CV with our expert written bullet points.</p>
                </div>
                <div className="space">
                  <div className="rap">3</div>
                  <p><span> Download and share</span> your CV - then repeat!</p>
                </div>
              </div>
              <div className='flex'>
                <div className='h4'><h4>Verified Company</h4></div>
                <h4>Trustpilot Brandmark</h4>
                <p><span className='bold'>2,034</span> reviews</p>
              </div>
            </div>
            <div className="video">
              <div className='roles'>
                <p>It only takes 
                  <button className="countdown-button">{minutes[0]}</button>
                  <button className="countdown-button">{minutes[1]}</button>
                  <span className='divide'>:</span>
                  <button className="countdown-button">{seconds[0]}</button>
                  <button className="countdown-button">{seconds[1]}</button>
                  <span className='time'>minutes</span> 
                  for an average MyPerfectCV user to create a CV 
                </p>
              </div>
              <video src=""></video>
              <NavLink to='/upload'>
                <button className='press'>Create My CV</button>
              </NavLink>
              <p>By clicking Create my CV, you agree to our <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Buildresume;
