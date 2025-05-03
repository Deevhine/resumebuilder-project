import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "../homepage/homepage.css"

function Homepage (){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const [showDiv5, setShowDiv5] = useState(false);

  const images = [
    'src/assets/Homepage-1-New.webp',
    'src/assets/Homepage-10.webp',
    'src/assets/Homepage-9-New-2.webp',
    'src/assets/Homepage-8.webp',
    'src/assets/Homepage-7-New-2.webp',
    'src/assets/Homepage-6.webp',
    'src/assets/Homepage-5.webp',
    'src/assets/Homepage-4-New.webp',
    'src/assets/Homepage-3.webp',
    'src/assets/Homepage-2.webp',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowDiv1(true);
    }, 0);

    const timer2 = setTimeout(() => {
      setShowDiv2(true);
    }, 1000); // 3 minutes in milliseconds is 180000, but for demonstration purposes, we'll use 3000

    const timer3 = setTimeout(() => {
      setShowDiv3(true);
    }, 2000);

    const timer4 = setTimeout(() => {
      setShowDiv4(true);
    }, 3000);
    const timer5 = setTimeout(() => {
      setShowDiv5(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3));
  };

  return (
    <>
      {loading ? (
        <div className="loader-holder">
          <div className="loader"></div>
          <div className="loader-text">Loading...</div>
        </div>
      ) : (
        <>
          {showDiv1 && (
              <div className="card">
                    <div className="builder">
                        <div className="image"></div>
                        <div className="text">
                            <h1>Build your perfect CV</h1>
                            <p>Create a new standout CV in minutes or choose any template and simply import all the information from your existing CV.</p>
                           <div className="button-holder">
                           <NavLink to = '/buildresume' className="buttom1"><button className='buttom1'>Start a new CV</button></NavLink>
                          <NavLink to = '/buildresume' className="buttom2"><button className='buttom2'>Upload my CV</button></NavLink>
                           </div>
                        </div>
                    </div>
              </div>
          )}
          {showDiv2 && (
             <div className="card-1">
             <div className="card-holder">
             <div className="get">
                  <h1>Help get your CV noticed <br /> with a CV review!</h1>
                  <div className="pair">
                  <div className="round"><h2>1</h2></div>
                      <p>Submit your CV for review</p>
                  </div>
                  <div className="pair">
                      <div className="round"><h2>2</h2></div>
                      <p>Get personalised feedback within 2–3 business days*</p>
                  </div>
                  <div className="pair">
                  <div className="round"><h2>3</h2></div>
                      <p>Use the feedback to strengthen your CV!</p>
                  </div>
                  <button className="buttom4">Get CV  review</button>
                  <p>*In the case of high demand we reserve the right to extend the number of <br /> business days to provide personalised feedback.</p>
              </div>
              <div className="cv-image"></div>
             </div>
          </div>
          )}
          {showDiv3 && (
             <div className="card-2">
             <h1>Build a resume in 3 simple steps</h1>
             <div className="tripple">
                 <div className="rebuilder">
                     <img src="src/assets/step-template.svg" alt="" />
                     <h2>Select a template</h2>
                     <p>Choose from our wide selection of resume templates for all experience levels, jobs, and industries. Create a polished and professional resume in minutes.</p>
                 </div>
                 <div className="rebuilder">
                     <img src="src/assets/step-details.svg" alt="" />
                     <h2>Fill in your details</h2>
                     <p>Our AI-powered resume builder generates custom bullet points from real job ads, helping you build a polished resume that is tailored for your specific needs.</p>
                 </div>
                 <div className="rebuilder">
                     <img src="src/assets/step-download.svg" alt="" />
                     <h2>Download & print</h2>
                     <p>Refine your resume with our user-friendly formatting tools. Once you’re satisfied, save it, download it in your preferred format, and send it out to potential employers.</p>
                 </div>
             </div>
         </div>
          )}
          {showDiv4 && (
               <div className="card-3">
               <h1>Pick one of many world-class templates <br /> and build your resume in minutes</h1>
               <div className="amination">
                 <button className="prev-button" onClick={handlePrevious}>&#10094;</button>
                 {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                   <div key={index} className="image-slider">
                     <div className="image-container">
                       <img src={image} alt="" />
                       <div className="overlay">
                         <button className="view-button">View Template</button>
                       </div>
                     </div>
                   </div>
                 ))}
                 <button className="next-button" onClick={handleNext}>&#10095;</button>
               </div>
               <div className='move-folder'>
                 {Array(Math.ceil(images.length / 1)).fill(0).map((_, index) => (
                   <button 
                     key={index} 
                     className={Math.floor(currentIndex / 1) === index ? 'active' : ''}
                     onClick={() => setCurrentIndex(index * 1)}
                   >
                     
                   </button>
                 ))}
               </div>
               </div>
          )}
           {showDiv5 && (
              <div className='card-4'>
                      <div className='text-rap'>
                        <h2>RECRUITER-APPROVED TEMPLATES</h2>
                        <h1>Land your next job with a proven <br /> resume template</h1>
                        <p>The average recruiter spends only 7.4 seconds reviewing a resume. Our professional <br /> online templates can help you effectively showcase your strengths, experience, and <br /> education. Stand out from the crowd with our proven templates.</p>
                        <div className='text-rep'>
                        <NavLink to = '/template' className="buttom06"><button className='buttom2'> Choose My Templates</button></NavLink>
                        </div>
                      </div>
                      <div className='image-rap'></div>
                      
              </div>
          )}
        </>
      )}
    </>
  );
}

export default Homepage;

