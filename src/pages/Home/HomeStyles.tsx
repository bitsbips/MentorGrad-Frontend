import styled from 'styled-components';

export const BottomPosHome = styled.div`
  width: 70%;
  margin: auto;
  @media (max-width: 750px) {
    width: 90%;
    margin: auto;
  }
`;
export const BottomPosMentor = styled.div`
  width: 100%;
  margin: auto;
  @media (max-width: 750px) {
    width: 95%;
    margin: auto;
  }
`;
export const LightTextPurple = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #7476d1;
  text-align: left;
  line-height: 20%;
  @media (max-width: 450px) {
    text-align: center;
    margin-top: 2%;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    text-align: center;
    margin-top: 4%;
  }
`;
export const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
export const RowDirectionMembers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 4%;
`;
export const RowDirectionMembers1 = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RowDirectionBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
  @media (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 4%;
  }
`;
export const ColDirection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SearchBack = styled.div`
  width: 80%;
  padding: 2%;
  background-color: #f2f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    width: 100%;
    margin: auto;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    width: 100%;
    margin: auto;
  }
`;
export const SearchBar = styled.input`
  width: 32%;
  color: white;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  background-color: #fff;
  height: 44px;
  position: relative;
  padding-left: 44px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 0;
`;
export const BackgroundCheckedSearch = styled.div`
  background: #c9f6ef;
  border-radius: 15px;
  padding: 2%;
  width: 30%;
  align-self: 'center';
  color: #000000;

  cursor: pointer;
  &:hover {
    color: #fff;
    background: #7476d1;
  }
  @media (max-width: 750px) {
    width: 100%;
    margin: auto;
    margin-top: 4% !important;
    margin-bottom: 4% !important;
    padding: 2.5% 2%;
    border-radius: 15px;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    width: 100%;
    margin: auto;
    margin-top: 4% !important;
    margin-bottom: 1% !important;
  }
`;

export const HomeHeading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  /* or 140% */
  text-align: left;
  flex-wrap: wrap;
  width: 90%;

  line-height: 120%;

  color: #222222;
  @media (max-width: 750px) {
    text-align: center;
    font-size: 30px;
    flex-wrap: wrap;
    width: 100%;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    text-align: center;
    font-size: 30px;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const HomeSubHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  /* or 186% */
  flex-wrap: wrap;
  width: 80%;
  text-align: left;

  color: #000000;
  @media (max-width: 750px) {
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const HomeSubHeading1 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  /* or 186% */
  flex-wrap: wrap;
  width: 80%;
  text-align: left;

  color: #000000;
  @media (max-width: 750px) {
    text-align: center;
    width: 100%;
  }
`;
export const SocialHeading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 60px;
  text-align: left;
  display: inline-block;
  text-transform: capitalize;
  margin-bottom: 0.5%;
  margin-top: 0.7%;

  color: #222222;
  @media (max-width: 750px) {
    text-align: center;
    width: 100%;
    display: inline-block;
    line-height: 30px;
    font-size: 14px;
    margin-bottom: 0 !important;
    margin-top: 20px;
  }
`;

export const SocialHeading2 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 60px;
  text-align: left;
  display: inline-block;
  text-transform: capitalize;

  color: #222222;
  @media (max-width: 750px) {
    text-align: center;
    width: 100%;
    line-height: 20px;
    display: inline-block;
    margin-bottom: 40px;
    margin-top: 0 !important;
  }
`;
export const BoldHeading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;

  text-align: left;
  display: inline-block;

  /* identical to box height, or 171% */
  color: #222222;
  @media (max-width: 750px) {
    text-align: center;
    margin-top: 3%;
  }
`;
export const WorksHeading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  text-align: left;
  margin: 0;
  color: #222222;
`;
export const WorksSubHeading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* or 156% */
  text-align: left;
  flex-wrap: wrap;
  margin: 0;
  margin-top: 5px;

  width: 95%;
  color: #737373;
`;
export const NewsSubHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5%;
  /* or 156% */
  text-align: left;
  flex-wrap: wrap;
  width: 60%;
  color: #000000;
  @media (max-width: 750px) {
    text-align: center;
    width: 100%;
    color: #000000;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
export const WorksBack = styled.div`
  background: #f2f5f9;
  box-shadow: 0px 0px 15px rgba(163, 165, 233, 0.3);
  border-radius: 15px;
  padding: 4%;
  margin-top: 10%;
  width: 70vh;
  justify-content: center;
  align-items: center;
  margin-left: -8%;
  @media (max-width: 750px) {
    width: 95%;
    align-self: center;
    margin-left: 0% !important;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    width: 100%;
    align-self: center;
    margin-left: 0% !important;
  }
`;
export const WorksBack1 = styled.div`
  background: #f2f5f9;
  box-shadow: 0px 0px 15px rgba(163, 165, 233, 0.3);
  border-radius: 15px;
  padding: 4%;
  margin-top: 10%;
  margin-left: 4%;
  width: 70vh;
  @media (max-width: 750px) {
    width: 95%;
    align-self: center;
    margin-left: 0% !important;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    width: 100%;
    align-self: center;
    margin-left: 0% !important;
  }
`;
export const RowWorks = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RowAbout = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 450px) {
    flex-direction: column;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorksImage = styled.img`
  width: 60%;

  object-fit: contain;
  margin-left: 0%;
  margin-top: 1%;
`;
export const HeaderImage = styled.img`
  /* width: 10rem;
height: 10rem; */
  width: 150px;
  height: 150px;
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 40px;
  margin-left: 10px;
`;
export const HeaderImageContentBack = styled.div`
  position: absolute;
  width: 125px;
  bottom: -20px;
  padding: 4%;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1000px;
  right: -20px;

  margin-left: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0px 10px 10px 10px;
`;
export const HeaderImageContentBackTexta = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  /* identical to box height */
  text-align: center;
  color: #5f61be;
  margin: 0 auto;
`;
export const HeaderImageContentBackTextb = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  margin: 0 auto;

  /* identical to box height */

  color: #222222;
`;

export const ButtonsWidth = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    width: 90%;
  }
`;
export const MembersText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  /* or 171% */
  color: #222222;
  text-align: left;
`;
export const MembersText1 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  /* or 171% */
  color: #fff;
  text-align: center;
`;
export const MembersImage = styled.img`
  width: 15%;
  height: 15%;
  border-radius: 15px;
`;
export const MembersRe = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  /* or 176% */
  text-align: left;

  color: #222222;
`;
export const MobileMembers = styled.div`
  background-color: #7476d1;
  width: 100%;
  padding: 2%;
`;
export const MembersRe1 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  flex-wrap: wrap;

  width: 50px !important;
  display: inline-flex;
  /* or 176% */
  color: #222222;
`;
export const MembersRe1Width = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const MembersName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  /* identical to box height, or 176% */
  align-self: center;
  margin: 0;
  color: #7476d1;
`;
export const MembersPassion = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  text-align: left;
  margin: 0;

  /* identical to box height, or 200% */

  color: #000000;
`;
export const MembersCard = styled.div`
  background: #b10c69;
  width: 80%;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
`;

export const MembersBack = styled.div`
  background: #f2f5f9;
  border: 1px solid #7476d1;
  border-radius: 15px;
  padding: 2%;
  width: 42%;
  margin-left: 2%;
  @media (max-width: 450px) {
    width: 40vh;
    margin-bottom: 3%;
    padding: 8%;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    width: 40vh;
  }
`;
export const MembersBack1 = styled.div`
  margin-bottom: 3%;
  margin-left: 3%;
`;

export const BottomNewsHome = styled.div`
  width: 80%;
  margin: auto;
  padding: 1% 5%;
  background-color: #c9f6ef;
  border-radius: 15px;
  margin-bottom: 3%;
  @media (max-width: 750px) {
    width: 100%;
    margin: auto;
  }
`;
export const NewsHead = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  text-align: left;
  /* identical to box height, or 60% */

  color: #222222;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const SlideHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  margin-top: 0%;
  align-items: center;
  /* margin: auto; */
  /* align-self: center; */
  @media (max-width: 750px) {
    width: 90%;
    margin: auto;
  }
`;
export const Scrolls = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  width: 100%;
  margin-bottom: 2%;
  ::-webkit-scrollbar {
    height: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;
export const SlideImage = styled.img`
  flex: 0 0 auto;

  object-fit: cover;

  width: 10%;
  height: 8%;
  @media (max-width: 750px) {
    width: 20%;
    height: 15%;
    margin-left: 6% !important;
  }
  cursor: pointer;
  /* filter: url(filters.svg#grayscale); Firefox 3.5+ */
  filter: #acb6c3; /* IE5+ */
  -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
  -webkit-transition: all 0.8s ease-in-out;
  &:hover {
    filter: none;
    -webkit-filter: grayscale(0);
    -webkit-transform: scale(1.01);
  }
`;
