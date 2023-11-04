import React, { useEffect, useState } from 'react';
import {
  BottomPosHome,
  ColDirection,
  Column,
  MembersBack,
  MembersBack1,
  MembersImage,
  MembersName,
  MembersPassion,
  MembersRe,
  MembersRe1,
  MembersRe1Width,
  MembersText,
  MembersText1,
  MobileMembers,
  Row,
  RowDirection,
  RowDirectionBetween,
  RowDirectionMembers,
  RowDirectionMembers1,
  RowWorks,
} from '../pages/Home/HomeStyles';
import { MembersData } from '../Data/Data';
import useMediaQuery from '../hooks/MediaQuery';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const MembersReview = () => {
  const isMobile = useMediaQuery('(min-width: 950px)');
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 2; // Display two items at a time

  const displayedData = MembersData.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (endIndex < MembersData.length) {
      setStartIndex(startIndex + 2);
    }
  };
  const handlePreviousClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 2);
    }
  };

  return (
    <>
      {isMobile ? (
        <BottomPosHome>
          <RowDirectionBetween>
            <div style={{ width: '60%' }}>
              <ColDirection>
                <MembersText>
                  What Do <br /> Members Say <br /> About Us?
                </MembersText>

                <Row>
                  <FiArrowLeft
                    color="#7476D1"
                    style={{ cursor: 'pointer' }}
                    size={23}
                    onClick={handlePreviousClick}
                  />

                  <FiArrowRight
                    color="#7476D1"
                    style={{ cursor: 'pointer', marginLeft: '5%' }}
                    size={23}
                    onClick={handleNextClick}
                  />
                </Row>
              </ColDirection>
            </div>
            <div>
              <RowDirection style={{ marginLeft: '10%', marginTop: '0%' }}>
                {displayedData.map((data, index) => {
                  return (
                    <MembersBack key={index}>
                      <MembersRe>{data.review}</MembersRe>
                      <Row style={{ marginTop: 10 }}>
                        <MembersImage src={data.image} />
                        <ColDirection style={{ marginLeft: '3%' }}>
                          <MembersName>{data.name}</MembersName>
                          <MembersPassion>{data.passion}</MembersPassion>
                        </ColDirection>
                      </Row>
                    </MembersBack>
                  );
                })}
              </RowDirection>
            </div>
          </RowDirectionBetween>
        </BottomPosHome>
      ) : (
        <MobileMembers>
          <div style={{ width: '100%' }}>
            <MembersText1>What Do Members Say About Us?</MembersText1>
          </div>
          <RowDirectionMembers1 style={{ marginTop: '0%' }}>
            {MembersData.map((data) => {
              return (
                <MembersBack1>
                  <MembersBack>
                    <Column>
                      <MembersRe>{data.review}</MembersRe>

                      <Row>
                        <MembersImage src={data.image} />
                        <ColDirection style={{ marginLeft: '3%' }}>
                          <MembersName>{data.name}</MembersName>
                          <MembersPassion>{data.passion}</MembersPassion>
                        </ColDirection>
                      </Row>
                    </Column>
                  </MembersBack>
                </MembersBack1>
              );
            })}
          </RowDirectionMembers1>
        </MobileMembers>
      )}
    </>
  );
};
export default MembersReview;
