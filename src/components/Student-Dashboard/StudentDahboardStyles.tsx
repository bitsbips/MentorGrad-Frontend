import styled from 'styled-components';

export const ContainerDashboard = styled.div`
  background-color: #f2f5f9;
  flex: 1;
  @media (max-width: 768px) {
    margin: 0px 15px;
  }
`;

export const ActiveLabel = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: center;
  color: #000;
  margin-left: 4%;
  margin-top: 2%;
  @media (max-width: 750px) {
    font-size: 15px;
    margin-top: 6%;
  }
`;

export const InActiveLabel = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #7a7a7a;
  margin-left: 4%;
  margin-top: 2%;
  @media (max-width: 750px) {
    font-size: 15px;
    margin-top: 6%;
  }
`;
export const BackActive = styled.div`
  width: 40px;
  height: 35px;
  border-radius: 15px;
  background-color: #5f61be;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const BackInActive = styled.div`
  width: 40px;
  height: 35px;
  border-radius: 15px;
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
`;
