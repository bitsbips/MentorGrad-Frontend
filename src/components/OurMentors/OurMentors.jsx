import React, { useRef, useState } from "react";
import { BackgroundChecked1, InputHolder } from "../UserForm/UserFormStyles";
import { BackCart, BackCart12, BackCartPos, BackgroundChecked2, BackgroundChecked3, BoldHeading, BottomBackCart, BottomBackCartPos, BottomPos, ButtonsPosition, GroupPosition, ImagePosition1, Leftbtmtext, Name, Profession, Rightbtmtext, StarImage, SubTitle3, TextChecked1, UserImage } from "../../pages/About/AboutStyles";
import { Mentors } from "../../Data/Data";
import Star from '../../Assets/Images/star-0.png'
import { BottomPosHome, RowDirection } from "../../pages/Home/HomeStyles";
import { useNavigate } from "react-router-dom";
import './OurMentors.css'
import useMediaQuery from "../../hooks/MediaQuery";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CSSTransition } from "react-transition-group";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


const OurMentors = () => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(min-width: 950px)');
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = isMobile ? 4 : 1; // Display one item in mobile view, four items in other views
  const endIndex = startIndex + itemsPerPage;

  const displayedData = Mentors.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (endIndex < Mentors.length) {
      setStartIndex(startIndex + itemsPerPage);

    }
  };
  const handlePreviousClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);

    }
  };
  const isLeftDisabled = startIndex === 0;
  const isRightDisabled = endIndex >= Mentors.length;




  return (
    <InputHolder>
      <BottomPosHome>
          <BoldHeading>Meet Our International Student<BoldHeading style={{ color: '#7476D1',marginLeft:isMobile?'0.6%':''}}>Mentors</BoldHeading></BoldHeading>
        <SubTitle3>Discover exceptional mentors and services curated just for you. No hidden fees or commitments - just accelerated career development.</SubTitle3>

        <BackCartPos>
          <button
            className="nav-btn"
            onClick={handlePreviousClick}
            disabled={isLeftDisabled}
            style={{cursor:isLeftDisabled ? 'no-drop' :'pointer' }}


          >
            <ChevronLeftIcon style={{ color: '#fff' }} />
          </button>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>

            {displayedData.map((data, index) => {
              return (
                <CSSTransition
                  key={index}
                  classNames="card"
                  timeout={500}
                >
                  <BackCart key={index}>
                    <div style={isMobile ? {} : { padding: '20px 30px' }}>
                      <UserImage src={data.image} />
                      <Name>{data.name}</Name>
                      <Profession>{data.profession}</Profession>
                      <GroupPosition style={{ margin: 0, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <StarImage src={Star} style={{ marginTop: -1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} />
                        <Profession style={{ marginLeft: '1.5%' }}>{data.rating}</Profession>
                        <Profession style={{ marginLeft: '1.5%' }}>({data.reviews})</Profession>

                      </GroupPosition>
                    </div>
                    <BottomBackCart>

                      <BottomBackCartPos>
                        <Leftbtmtext>Mentorship</Leftbtmtext>
                        <Rightbtmtext>${data.price}/month</Rightbtmtext>
                      </BottomBackCartPos>

                    </BottomBackCart>
                  </BackCart>
                </CSSTransition>


              )
            })}
          </div>
          <button
            className="nav-btn"
            onClick={handleNextClick}
            disabled={isRightDisabled}
            style={{cursor:isRightDisabled ? 'no-drop' :'pointer' }}



          >
            <ChevronRightIcon style={{ color: '#fff' }} />
          </button>


        </BackCartPos>


        <BackgroundChecked3 onClick={() => navigate('/mentor')}>
          <TextChecked1>Explore All</TextChecked1>
        </BackgroundChecked3>

      </BottomPosHome>
    </InputHolder>
  )
}
export default OurMentors


