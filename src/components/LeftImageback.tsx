import React from 'react'
import styled from 'styled-components';
import BackImage from '../Assets/Images/BackLeft.png'
import { Headimage, ImageContent, PositionCol, SubImage } from '../pages/AuthFlow/AuthStyles';


interface Props {
 
  height?: any
}

const BackImageS = styled.div`
   background-image: url(${BackImage}) ;
background-repeat: 'no-repeat';
     width:70vh;
     background-size: cover;
     background-position: left;
     height: ${props => props.slot};


`;

const LeftImage : React.FC<Props> = (props) => {

  return (
    <BackImageS slot={props.height}>
      <ImageContent>
        <Headimage>LOGO</Headimage>
        <SubImage>Mentoring programs <br /> for data-driven<br /> people heroes</SubImage>
      </ImageContent>
    </BackImageS>
  )
}

export default LeftImage
