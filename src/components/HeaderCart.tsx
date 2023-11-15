import React from 'react';
import {
  HeaderCart,
  HeaderCartContent,
  HeaderCartContentPostion,
  HeaderCartTopBack,
  HeaderCartimg,
  HeaderName,
  HeaderOccupation,
  IconBack,
} from '../pages/Mentor/MentorStyles';
import { Column, Row } from '../pages/Home/HomeStyles';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import LabTabs from './Tabs/Tabs';
import profile from '../Assets/Images/Mask1.png';

const HeaderCartCompo = () => {
  return (
    <HeaderCart>
      <HeaderCartTopBack>
        <p style={{ color: '#5F61BE' }}>...</p>
      </HeaderCartTopBack>
      <HeaderCartContent>
        <HeaderCartContentPostion>
          <Row>
            <div style={{ borderRadius: 10 }}>
              <HeaderCartimg src={profile} />
            </div>
            <div>
              <div style={{ marginTop: '5%', marginLeft: '16%' }}>
                <HeaderName>Ali</HeaderName>
                <HeaderOccupation>ndiwndiwndi</HeaderOccupation>
              </div>
            </div>
          </Row>
          <Row style={{ marginTop: '5%' }}>
            <IconBack>
              <AiOutlineHeart />
            </IconBack>
            <IconBack>
              <BsThreeDotsVertical />
            </IconBack>
          </Row>
        </HeaderCartContentPostion>
        <LabTabs />
      </HeaderCartContent>
    </HeaderCart>
  );
};
export default HeaderCartCompo;
