import styled from "styled-components";


export const ContainerDashboard = styled.div`
  background-color: #F2F5F9;
  flex:1;
 
`;

export const ActiveLabel =styled.p`
font-size: 18px;
font-weight: 500;
letter-spacing: 0em;
text-align: center;
color:#000;
margin-left: 4%;
margin-top: 2%;
@media (max-width: 750px) {
    font-size: 15px;
    margin-top: 6%;

  }


`

export const InActiveLabel =styled.p`
font-size: 18px;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
color: #7A7A7A;
margin-left: 4%;
margin-top: 2%;
@media (max-width: 750px) {
    font-size: 15px;
    margin-top: 6%;

  }




`
export const BackActive = styled.div`
 width: 40px;
  height: 35px;
  border-radius: 15px;
  background-color: #5F61BE;
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
background-color: #FFFFFF;

`;