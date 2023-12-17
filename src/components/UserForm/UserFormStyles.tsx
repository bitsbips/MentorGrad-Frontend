import styled from 'styled-components';

export const MainContainer = styled.div`
  flex: 1;
  background-color: #f5f5f5;
`;
export const Containerm = styled.div`
  background-color: #f2f5f9;
  flex: 1;
`;
export const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 5%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #f2f5f9;
  @media (max-width: 750px) {
    width: 90%;
    margin: auto;
    margin-top: 5%;
    align-self: center;
    justify-content: center;
    align-items: center;
    background-color: #f2f5f9;
  }
  @media (max-width: 950px) {
    width: 90%;
    margin: auto;
    margin-top: 5%;
    align-self: center;
    justify-content: center;
    align-items: center;
    background-color: #f2f5f9;
  }
`;
export const ContainerD = styled.div`
  width: 100%;
  background-color: #f2f5f9;
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 120%;
  }
`;
export const Thanyou = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  /* identical to box height, or 140% */

  color: #222222;
`;
export const ThanyouMessage = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* identical to box height, or 318% */

  color: #222222;
`;

export const SubContainer = styled.div`
  width: 100%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #f2f5f9;
  position: relative;
  @media (max-width: 960px) {
    width: 100%;
    margin: auto;
  }
`;
export const Position = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -3%;
`;
export const PositionCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1%;
`;
export const ErrorCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackActive = styled.div`
  width: 25px;
  height: 20px;
  border-radius: 15px;
  background: #6c6ebe;
  border: 2px solid #6c6ebe;
  margin-left: 1%;
  @media (max-width: 750px) {
    width: 23px;
    height: 20px;
  }
`;
export const BackActiveLast = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background: #6c6ebe;
  border: 2px solid #6c6ebe;
  margin-left: 1%;
  margin-top: -3%;
`;
export const BackInActive = styled.div`
  width: 25px;
  height: 20px;
  border-radius: 15px;
  background: #f5f5f5;
  border: 2px solid #6c6ebe;
  margin-left: 1% !important;
  @media (max-width: 750px) {
    width: 23px;
    height: 20px;
  }
`;
export const BackInActiveLast = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background: #f5f5f5;
  border: 2px solid #6c6ebe;
  margin-left: 1% !important;
  margin-top: -3%;
`;
export const Lineimg = styled.img`
  width: 27vh;
  height: 1px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: 2% !important;

  @media (max-width: 480px) {
    width: 8.5vh;
  }
  /* @media only screen and (min-width : 1224px) {
  width: 19vh;
} */
`;
export const LineimgActive = styled.img`
  width: 27vh;
  height: 1px;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: #6c6ebe;
  margin-left: 2%;
  @media (max-width: 750px) {
    width: 8.5vh;
  }
`;
export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #222222;
  text-align: left;
  @media (max-width: 750px) {
    font-size: 10px;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #222222;
  text-align: left;
  margin-bottom: 1%;
  margin-left: 0.5%;
`;
export const Labelb = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #222222;
  text-align: left;
  margin-bottom: 2%;
  margin-left: 0.5%;
`;
export const LabelWhite = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-align: left;
  margin-bottom: 0.2%;
`;

export const InputHolder = styled.div`
  margin-top: 2%;
  border-radius: 15px
  @media (max-width: 750px) {
    margin-top: 5%;
  }
`;
export const Heading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  color: #222222;
  text-align: left;
  margin-bottom: 2%;
  margin-top: 10%;
  @media (max-width: 750px) {
    line-height: 0px;
  }
`;

export const CheckedPosition = styled.div`
  margin-top: 0.2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export const BackgroundChecked = styled.div`
  background: #c9f6ef;
  border-radius: 15px;
  padding: 4px 20px;
  margin-left: 0.5%;
  margin-top: 1%;
`;
export const BackgroundChecked1 = styled.div`
  background: #c9f6ef;
  border-radius: 15px;
  padding: 8%;
  margin-top: 8%;
  width: 150%;
  margin-left: -2%;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 140%;
    padding: 4%;
    margin: auto;
    margin-left: -35%;
  }
`;
export const TextChecked = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
`;
export const TextChecked1 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
`;
export const CheckBoxPos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 130%;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (min-width: 451px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Buttonsposition = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 6%;
  @media (max-width: 750px) {
    width: 100%;
  }
`;
