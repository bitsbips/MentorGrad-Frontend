import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fffff;
  flex: 1;
  overflow-x: hidden;
`;

// HeaderCart
export const HeaderCart = styled.div`
  background-color: #fffff;
  border-radius: 15px;
  width: 55%;
  margin-bottom: 2%;
  @media (max-width: 750px) {
    width: 100%;
    height: 30%;
    margin-top: 20px;
  }
`;
export const IconBackHeader = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 27px;
  margin-left: 1%;
`;
export const ExperticeBack = styled.div`
  background-color: #fffff;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
  width: 25%;
  display: flex;
  padding: 1.5%;
`;

export const ExperticeText = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  text-align: left;
  margin-bottom: 1.5%;
  margin-top: 0.5%;
  /* identical to box height */

  color: #5f61be;
`;

export const HeaderCartTopBack = styled.div`
  background: #5f61be;
  border-radius: 12px 12px 0px 0px;
  height: 10%;
  padding: 0.5%;
`;
export const HeaderCartContent = styled.div`
  width: 88%;
  margin: auto;
`;
export const HeaderCartContentPostion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const IconBack = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 30px;
  margin-left: 10%;
  padding: 1%;
`;
export const HeaderCartimg = styled.img`
  height: 70px;
  border-radius: 15px;
  margin-top: -22%;
  width: 80px;
  z-index: 1000;
`;
export const HeaderName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  margin: 0;
  text-align: left;
  width: 100%;
`;
export const HeaderLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  margin-bottom: 2%;
  margin-top: 3%;
  /* identical to box height */

  color: #8e8e8e;
`;
export const EduLabel = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  margin-top: 4%;
  /* identical to box height */

  color: #222222;
`;
export const EduName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  margin: 0;
  width: 100%;
  text-align: left;
  display: inline-block;
  /* identical to box height */

  color: #000000;
`;
export const EduSub = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  text-align: left;
  /* identical to box height */

  color: #8e8e8e;
`;

export const HeaderOccupation = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;

  text-align: left;

  color: #000000;
`;
export const OverViewText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #222222;
  text-align: left;
  width: 100%;
  flex-wrap: wrap;
`;
export const ShowMore = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  cursor: pointer;
  margin-bottom: 0%;
  /* identical to box height */

  color: #5f61be;
`;

// Sessions
export const SessionsBack = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  width: 50rem;
  align-self: center;
  padding: 1%;
  margin-left: 3%;
`;
export const SessionsWidth = styled.div`
  width: 95%;
  margin: auto;
`;
export const TimeBack = styled.div`
  border: 0.5px solid #e8e8e8;
  border-radius: 15px;
  width: 130%;
  border-radius: 15px;
  padding: 10%;
  cursor: pointer;
  margin-bottom: 3%;
`;
export const TimeP = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 14px;
  /* identical to box height */

  color: #000000;
`;
export const TimeBackActive = styled.div`
  background-color: #5f61be;
  width: 130%;
  border-radius: 15px;
  padding: 10%;
  cursor: pointer;
  margin-bottom: 3%;
`;
export const TimePActive = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 14px;
  /* identical to box height */

  color: #fff;
`;
export const SessionsButton = styled.div`
  width: 100%;
  background-color: #5f61be;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  padding: 1.5%;
  cursor: pointer;
  margin-top: 2%;
  @media (min-width: 451px) and (max-width: 1024px) {
    width: 40vh;
  }
`;
export const ResponseButton = styled.div`
  width: 10%;
  background-color: #5f61be;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  padding: 0.5%;
  cursor: pointer;
  margin-bottom: 2%;
  @media (max-width: 750px) {
    width: 30%;
  }
`;
export const SessionsButtonText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  margin-bottom: 1.5%;
  margin-top: 0.5%;
  /* identical to box height */

  color: #ffffff;
`;
export const TimePosition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
`;

// Sessions

// HeaderCart

export const HomeHeading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  /* or 140% */
  text-align: left;

  line-height: 120%;

  color: #222222;
  @media (max-width: 750px) {
    text-align: center;
    width: 100%;
    margin: auto;
    align-self: center;
    font-size: 30px;
    line-height: 140%;
  }
`;
export const SocialHeading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  text-align: left;
  display: inline-block;
  text-transform: capitalize;
  margin: auto;
  color: #222222;
  margin-top: 2% !important;
  margin-bottom: 1% !important;
  @media (max-width: 750px) {
    text-align: center;
    margin: auto;
    align-self: center;
    font-size: 13px;
  }
`;
export const MentorHeading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  text-align: left;
  display: inline-block;
  text-transform: capitalize;
  margin: auto;
  color: #222222;
  @media (max-width: 750px) {
    text-align: center;
    margin: auto;
    align-self: center;
    font-size: 18px;
    margin-top: 5%;
    line-height: 10px;
  }
`;
export const MentorSubHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  /* or 167% */
  flex-wrap: wrap;
  width: 50%;
  text-align: center;
  margin-top: 1% !important;

  color: #000000;
  margin: auto;
  text-align: center;
  @media (max-width: 750px) {
    text-align: center;
    margin: auto;
    width: 100%;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    text-align: left;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const MentorSubHeadingbtm = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  /* or 167% */
  flex-wrap: wrap;
  width: 50%;
  text-align: center;
  margin-top: 1% !important;

  color: #000000;
  margin: auto;
  text-align: center;
  @media (max-width: 750px) {
    text-align: center;
    margin: auto;
    width: 100%;
  }
`;
export const BackCartMentor = styled.div`
  background-color: #fffff;
  width: 22%;
  margin-left: 5%;
  margin-bottom: 5%;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 15px rgba(163, 165, 233, 0.3);
  }
  border-radius: 15px;

  @media (max-width: 750px) {
    margin: auto;
    width: 46%;
    margin-top: 3%;
  }
`;
export const BackCartMentorVideo = styled.div`
  background-color: #fffff;

  border-radius: 15px;
  width: 35%;
  height: 5%;
  margin-left: 5%;

  position: relative;
  @media (max-width: 750px) {
    margin: auto;
    width: 95%;
    margin-top: 3%;
  }
`;
export const BackCartImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;
export const BackCartImageVideo = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;
export const BottomTextMentor = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
`;
export const BottomBackCart = styled.div`
  background-color: #7476d1;
  border-radius: 0px 0px 12px 12px;
  margin-bottom: 0px;
  padding: 3%;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const RowDirectionMentor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const RowDirectionMentorWrap = styled.div`
  flex-wrap: wrap;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: auto;
`;
export const SupportBack = styled.div`
  background-color: #fffff;
  flex: 1;
  margin-bottom: 6%;
`;
export const SupportTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 1%;
  margin-top: 5%;
  /* identical to box height */

  text-align: center;
  color: #222222;
  @media (max-width: 750px) {
    width: 100%;
    margin: auto;
  }
`;
export const SupportSubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  width: 90%;
  margin: auto;
  color: #000000;
  @media (max-width: 750px) {
    width: 95%;
    margin: auto;
  }
`;
export const SupportImage = styled.img`
  width: 106%;
  height: 15rem;

  object-fit: cover;
  @media (max-width: 750px) {
    width: 95%;
    margin: auto;
    margin-top: 7%;
  }
`;
export const PlayButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  text-align: center;
  z-index: 1000;
  &:hover {
    box-shadow: 0px 0px 15px rgba(163, 165, 233, 0.3);
  }
`;

export const BottomNewsMentor = styled.div`
  width: 100%;
  margin: auto;
  padding: 3%;
  background-color: #c9f6ef;
  border-radius: 15px;
  @media (max-width: 750px) {
    width: 100%;
    margin: auto;
  }
`;
export const NewsHeadMentor = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  text-align: center;

  margin: auto;
  /* identical to box height, or 60% */

  color: #222222;
`;
