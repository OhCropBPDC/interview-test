import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text = "Welcome to the interview round", speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => {
            setIsTyping(false);
            setCurrentIndex(text.length);
          }, 3000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setTimeout(() => {
            setIsTyping(true);
            setCurrentIndex(0);
          }, 1000);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, text, speed]);

  return (
    <div style={{
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '40px',
      fontFamily: 'Courier New, monospace',
      letterSpacing: '2px',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {displayedText}
      <span 
        style={{
          borderRight: '3px solid white',
          animation: 'blink 1s infinite',
          marginLeft: '2px'
        }}
      >
        &nbsp;
      </span>
    </div>
  );
};

export default TypewriterText;