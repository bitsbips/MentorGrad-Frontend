import React, { useState } from 'react';
import {
  ContainerDashboard,
  HeaderName,
  HeaderPassion,
  PositionHeader,
  PositionImage,
  PositionTextCol,
  RightBorderDashboard,
  RightContainerDash,
} from './StudentDashboardStyles';
import { Avatar } from '@mui/material';
import User from '../../Assets/Images/user.svg';
import StarRatings from 'react-star-ratings';
import TableComponent from './TableComponent';
import TableComponentDashboard from './TableComponent';
import Cardsinfo from './Cardsinfo';
import ProgressBarWithPercentage from './Progressbar';
import useMediaQuery from '../../hooks/MediaQuery';

const HeaderUserinfo = () => {
  const [rating, setRating] = useState(4);
  const isMobile = useMediaQuery('(min-width: 950px)');

  return (
    <ContainerDashboard>
      <RightContainerDash>
        <RightBorderDashboard>
          <PositionHeader>
            <PositionImage>
              <div style={{ alignSelf: 'center' }}>
                <Avatar
                  alt="Remy Sharp"
                  src={User}
                  sx={{ width: 70, height: 70, alignSelf: 'center' }}
                />
              </div>
              <PositionTextCol>
                <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
                  <StarRatings
                    rating={rating}
                    starRatedColor="#FFD707"
                    numberOfStars={5}
                    starDimension="15px"
                    starSpacing={isMobile ? '3px' : '1px'}
                    name="rating"
                  />
                </div>
                <HeaderName>Jonathan Doe</HeaderName>
                <HeaderPassion>English Literature (M.A)</HeaderPassion>
              </PositionTextCol>
            </PositionImage>
            <ProgressBarWithPercentage percentage={75} />
          </PositionHeader>
        </RightBorderDashboard>
      </RightContainerDash>
      <div style={{ marginTop: '2%' }}>
        <Cardsinfo />
      </div>
      <div
        style={{
          marginTop: '2%',
          marginLeft: isMobile ? '' : '-5%',
          marginBottom: isMobile ? '5%' : '4%',
        }}
      >
        <TableComponentDashboard type={'basicInfo'} />
      </div>
    </ContainerDashboard>
  );
};
export default HeaderUserinfo;
