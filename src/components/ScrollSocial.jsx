import React, { useEffect, useRef, useState } from 'react';
import google from '../Assets/Images/Google.svg';
import fb from '../Assets/Images/fb.svg';
import github from '../Assets/Images/Github.svg';
import microsoft from '../Assets/Images/microsoft.svg';
import netflix from '../Assets/Images/netflix.svg';
import Amazon from '../Assets/Images/amazon.svg';
import { Scrolls, SlideHolder, SlideImage } from '../pages/Home/HomeStyles';
import { Slide } from '@mui/material';

const logo = [
  {
    id: 1,
    image: google,
  },
  {
    id: 2,
    image: fb,
  },
  {
    id: 3,
    image: github,
  },
  {
    id: 4,
    image: microsoft,
  },
  {
    id: 5,
    image: netflix,
  },
  {
    id: 6,
    image: Amazon,
  },
  {
    id: 7,
    image: netflix,
  },
  {
    id: 8,
    image: Amazon,
  },
];
const ScrollSocial = () => {
  const containerRef = useRef(null);
  const scrollAmount = 100;
  const scrollInterval = 3000;
  useEffect(() => {
    let intervalId;
    const container = containerRef.current;

    const startScrolling = () => {
      intervalId = setInterval(() => {
        container.scrollLeft += scrollAmount;

        // Check if reached the end of the content
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          // Reset scroll position to the beginning
          container.scrollLeft = 0;
        }
      }, scrollInterval);
    };

    const stopScrolling = () => {
      clearInterval(intervalId);
    };

    const handleMouseEnter = () => {
      startScrolling();
    };

    const handleMouseLeave = () => {
      stopScrolling();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    startScrolling();

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      stopScrolling();
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    overflowX: 'hidden', // Hide horizontal scrollbar
    scrollBehavior: 'smooth',
    overflowY: 'hidden',
  };
  const imageStyle = {
    flex: '0 0 auto',
    width: '100px',
    height: '8%',
    marginRight: '60px',
    objectFit: 'cover',
    cursor: 'pointer',
  };

  return (
    <SlideHolder>
      <div ref={containerRef} style={containerStyle}>
        {logo.map((image) => {
          return (
            <img
              style={imageStyle}
              alt="sliderImage"
              key={image?.id}
              src={image?.image}
            />
          );
        })}
      </div>
    </SlideHolder>
  );
};
export default ScrollSocial;
