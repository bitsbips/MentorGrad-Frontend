import React from 'react';
import styled from 'styled-components';
import BackImage from '../Assets/Images/BackLeft.png';
import {
  Headimage,
  ImageContent,
  PositionCol,
  SubImage,
} from '../pages/AuthFlow/AuthStyles';
import { NavLink } from 'react-router-dom';
import Brand from '../Assets/Images/MG_Logo.png';

interface Props {
  height?: any;
}

const BackImageS = styled.div`
  background-image: url(${BackImage});
  background-repeat: 'no-repeat';
  width: 70vh;
  background-size: cover;
  background-position: left;
  height: ${(props) => props.slot};
`;

const LeftImage: React.FC<Props> = (props) => {
  return (
    <BackImageS slot={props.height}>
      <ImageContent>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div style={{ width: '300px', marginLeft: '-20px' }}>
            <img
              src={Brand}
              alt="Logo"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </div>
        </NavLink>
        <SubImage>
          Mentoring programs <br /> for data-driven
          <br /> people heroes
        </SubImage>
      </ImageContent>
    </BackImageS>
  );
};

export default LeftImage;
