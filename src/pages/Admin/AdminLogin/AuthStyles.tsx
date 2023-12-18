import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f2f5f9;
  flex: 1;
`;
export const BackGround = styled.div`
  background-color: #f2f5f9;
  flex: 1;
  height: 100%;

  @media (max-width: 900px) {
    height: 100vh;
  }
`;

export const Position = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PositionCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Headimage = styled.p`
  color: #292929;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  align-self: flex-start;
  text-align: left;
`;
export const ImageContent = styled.div`
  margin-left: 6%;
  margin-top: 10%;
`;
export const SubImage = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  align-self: flex-start;
  text-align: left;
`;

export const TopRightText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
`;
export const TopRightText1 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #7476d1;
  margin-left: 5px;
`;

export const HeadingTop = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  text-align: left;
`;
export const SubHeading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  color: #47464a;
  flex-wrap: wrap;
  width: '80%';
`;

export const CenterContent = styled.div`
  display: flex;
  width: 30%;
  margin: auto;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 4%;
  @media (max-width: 950px) {
    width: 80%;
    margin-top: 25%;
  }
`;
export const Bottomtext = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #84818a;
  margin-left: 0.5%;
`;
export const Bottomtextpurple = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #7476d1;
  margin-left: 0.5%;
`;

export const ForgetPass = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  margin: auto;

  color: #7476d1;
  cursor: pointer;
  float: left;
  margin-left: 0%;
`;

export const ErrorText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  text-align: left;

  color: #ff5353;

  margin-left: 0.5%;
`;
