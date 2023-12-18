import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the Back to Top button when scrolling down
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 400;

    setIsVisible(scrollY > scrollThreshold);
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .back-to-top-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          color: #ffff;
          border: none;
          border-radius: 35%;
          width: 40px;
          height: 40px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .back-to-top-btn.visible {
          opacity: 1;
        }
      `}</style>
      <div
        className={`back-to-top-btn gradient-bg ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </div>
    </>
  );
};

export default BackToTop;
