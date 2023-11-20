import styled from 'styled-components';

export const ContainerDashboard = styled.div`
  background-color: #f2f5f9;
  flex: 1;
  padding: 15px;
`;
export const RightBorderDashboard = styled.div`
  border: 1.2px solid #d6d6d6; /* Define the border style */
  background-color: #f2f5f9; /* Set background color */
  padding: 2%;

  /* box-shadow: 0 1.5px 1.5px rgba(0, 0, 0, 0.1); Add a subtle shadow */
`;
export const RightContainerDash = styled.div`
  width: 100%;
  margin: auto;
  @media (max-width: 750px) {
    width: 110%;
    margin-left: -5%;
  }
`;
export const PositionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: auto;
  }
`;
export const PositionCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 750px) {
    margin-left: -5%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const PositionImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 34%;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const PositionTextCol = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    margin: auto;
    align-self: center;
  }
`;

export const HeaderName = styled.p`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin-bottom: 0px;
  @media (max-width: 750px) {
    font-size: 13px;
    text-align: center;
  }
`;
export const HeaderPassion = styled.p`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #a7a7a7;
  @media (max-width: 750px) {
    font-size: 12px;
    text-align: center;
  }
`;
export const NameDashboard = styled.p`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0em;
  color: #000000;
  margin-bottom: 0px;
  margin-top: 5%;
`;
export const EmailDashboard = styled.p`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #a6a6a6;
`;
export const DateDashboard = styled.p`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  @media (max-width: 750px) {
    font-size: 13px;
  }
`;
export const DateDashboardCustom = styled.p`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  color: #7476D1;
  @media (max-width: 750px) {
    font-size: 13px;
  }
`;
export const BackAction = styled.div`
  width: 90%;
  padding: 2%;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 750px) {
    width: 110%;
    padding: 3%;
  }
`;
export const ActionText = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #ffff;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  @media (max-width: 750px) {
    font-size: 13px;
  }
`;
export const BackView = styled.div`
  background-color: #c9f6ef;
  width: 80%;
  padding: 2%;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 110%;
    padding: 3%;
  }
`;

export const BackViewCustom = styled.div`
  background-color: #A3A5E9;
  width: 80%;
  padding: 2%;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 110%;
    padding: 3%;
  }
`;
export const ViewText = styled.p`
  font-size: 13px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  color: #7476d1;
  margin-left: -6% !important;
`;

export const PrintText = styled.p`
  font-size: 13px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  color: #FFFF;
  margin-left: -6% !important;
`;

// CardsStyles
export const BackCard = styled.div`
  width: 30%;
  padding: 2%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  @media (max-width: 750px) {
    width: 110%;
    margin-bottom: 2%;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
  }
`;
export const InsideCardWidth = styled.div`
  width: 100%;
`;
export const CardPosition = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    flex-direction: row;
    margin-left: 5%;
  }
`;
export const BackIconinfo = styled.div`
  width: 22%;
  padding: 4%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  margin-left: -2% !important;
`;
export const CardTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0px;
  @media (max-width: 750px) {
    font-size: 20px;
  }
`;
export const CardSubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 750px) {
    font-size: 16px;
  }
`;
export const CardIcon = styled.img`
  width: 70%;
  height: 70%;
  @media (max-width: 750px) {
    width: 50%;
    height: 50%;
  }
`;

export const Profilecomp = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;
