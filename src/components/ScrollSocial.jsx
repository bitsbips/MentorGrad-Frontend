import { useEffect, useRef } from 'react';
import Uni1 from '../Assets/Images/uni_1.png';
import Uni2 from '../Assets/Images/uni_2.png';
import Uni3 from '../Assets/Images/uni_3.png';
import Uni4 from '../Assets/Images/uni_4.png';
import Uni5 from '../Assets/Images/uni_5.png';
import Uni6 from '../Assets/Images/uni_6.png';
import Uni7 from '../Assets/Images/uni_7.png';
import Uni8 from '../Assets/Images/uni_8.png';
import Uni9 from '../Assets/Images/uni_9.png';
import Uni10 from '../Assets/Images/uni_10.png';
import Uni11 from '../Assets/Images/uni_11.png';
import Uni12 from '../Assets/Images/uni_12.png';

import { Scrolls, SlideHolder, SlideImage } from '../pages/Home/HomeStyles';
import { Slide } from '@mui/material';

const logo = [
  // {
  //   id: 1,
  //   image: Uni1,
  // },
  {
    id: 2,
    image: Uni2,
  },
  {
    id: 3,
    image: Uni3,
  },
  {
    id: 4,
    image: Uni4,
  },
  {
    id: 5,
    image: Uni5,
  },
  {
    id: 6,
    image: Uni6,
  },
  {
    id: 7,
    image: Uni7,
  },
  {
    id: 8,
    image: Uni8,
  },
  {
    id: 9,
    image: Uni9,
  },
  {
    id: 10,
    image: Uni10,
  },
  {
    id: 11,
    image: Uni11,
  },
  {
    id: 12,
    image: Uni12,
  },
];
const ScrollSocial = () => {
  const containerRef = useRef(null);
  const scrollAmount = 200;
  const scrollInterval = 2000;
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
