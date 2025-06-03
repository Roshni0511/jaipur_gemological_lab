

import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About_us from './Pages/About_us';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import VerifyCertificate from './Pages/VerifyCertificate';


function App() {
  const [visible, setVisible] = useState(false);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // 1) Calculate the total length of the path
    const pathLength = path.getTotalLength();
    // 2) Initially hide the stroke by offsetting it by its full length
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
    // 3) Force a layout so the browser "sees" the change
    path.getBoundingClientRect();
    // 4) Add smooth transition for later updates
    path.style.transition = 'stroke-dashoffset 10ms linear';

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollRatio = scrollY / docHeight;
      const drawLength = pathLength * (1 - scrollRatio);

      // Update stroke to show how far we have scrolled
      path.style.strokeDashoffset = `${drawLength}`;

      // Toggle button visibility once we pass 50px
      if (scrollY >= 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Attach scroll listener
    window.addEventListener('scroll', onScroll, { passive: true });
    // Call once to set initial state
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
  <>
            <Routes>
               <Route path='/' element={<Home />}/>
                <Route path='/About_us' element={<About_us />}/>
               <Route path='/Service' element={<Service />}/>
               <Route path='/VerifyCertificate' element={<VerifyCertificate />}/>
               <Route path='/Contact' element={<Contact />}/>
            </Routes>

             {/* <!-- start: Scroll Area --> */}
     <button
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        className="progress-circle"
        width="50"
        height="50"
        viewBox="0 0 100 100"
      >
        <path
          ref={pathRef}
          d="
            M50,2
            a48,48 0 1,1 0,96
            a48,48 0 1,1 0,-96
          "
          fill="none"
          stroke="#555"
          strokeWidth="4"
        />
      </svg>
      <span className="arrow-up">↑</span>
    </button>
    {/* <!-- end: Scroll Area --> */}
  </>
  );
}

export default App;
