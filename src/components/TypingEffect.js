import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setCurrentText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="typing-text">
      {currentText}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingEffect;

