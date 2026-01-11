import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;

