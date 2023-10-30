import styled from "styled-components";


export const Container = styled.div`
  background-color: #F2F5F9;
  width: 80%;
  margin: 0 auto !important;
  margin-top: 2% !important;
   @media (max-width: 750px) {
   width: 90%;
  margin: 0 auto !important;
   margin-top: 2% !important;
  }
 
  
`;
export const ContainerDa = styled.div`
  background-color: #F2F5F9;
  width: 90%;
  margin: 0 auto !important;
  margin-top: 2% !important;
  
 
  
`;
export const PositionProfile = styled.div`


display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 950px) {
    display: flex;
flex-direction: column;

  }
`;

export const Border = styled.div`
   border: 1.2px solid #D6D6D6; /* Define the border style */
  background-color: #F2F5F9; /* Set background color */
  border-radius: 5px ;
  /* box-shadow: 0 1.5px 1.5px rgba(0, 0, 0, 0.1); Add a subtle shadow */

`;
export const RightBorder = styled.div`
   border: 1.2px solid #D6D6D6; /* Define the border style */
  background-color: #F2F5F9; /* Set background color */
  border-radius: 5px ;
  @media (max-width: 750px) {
  margin-bottom:10%;
  margin-top: 3%;

  }
  
  /* box-shadow: 0 1.5px 1.5px rgba(0, 0, 0, 0.1); Add a subtle shadow */
 

`;
export const RightContainer = styled.div`
  width: 68%;
  margin-bottom:5%;
  @media (max-width: 750px) {
   width: 100%;
  margin-bottom:10%;
  margin: auto;

  }
  
  
  

`;
export const RightContainerDash1 = styled.div`
  width: 100%;
  margin-bottom:5%;
  @media (max-width: 950px) {
   width: 100%;
  margin-bottom:5%;
  margin: auto;

  }
  
  
  
  

`;
export const TopText = styled.p`
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #47464A;
padding: 0px 0px 0px 15px;
margin-top: 10px;

  

`;
export const ImageContainerpo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  padding: 0px 0px 0px 10px;
  @media (max-width: 750px) {
    width: 90%;


  }
  
  
  

`;
export const LabelProfile = styled.p`
font-size: 13px;
font-weight: 500;
letter-spacing: 0em;
color: #8B8B8B;
text-align: left;
margin-bottom: 1%;


  

`;
export const LabelProfileb = styled.p`
font-size: 13px;
font-weight: 500;
letter-spacing: 0em;
color: #8B8B8B;
text-align: left;
margin-bottom: 1.5%;


  

`;
export const FileName = styled.p`
font-size: 14px;
font-weight: 500;
letter-spacing: 0em;
align-self: center;
text-align: center;
`;
export const FileNamepo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  margin-top: 2%;
  
  

`;


export const ContainerForm = styled.div`

  width: 95%;
  margin: auto;
  margin-top: 15px;
  
  

`;
export const ColumnStudentForm = styled.div`

 display: flex;
 flex-direction: column;
 width: 45%;
 @media (max-width: 750px) {
  width: 100%;


  }
  
  

`;
export const PositionProfileForm = styled.div`


display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 950px) {
    display: flex;
flex-direction: column;

  }
`;

export const PaymentContainer = styled.div`
   border: 1.2px solid #D6D6D6; /* Define the border style */
  background-color: #F2F5F9; /* Set background color */
  border-radius: 5px ;
  margin: auto;
  width: 80%;
  margin-top: 3% !important;
  margin-bottom: 3% !important;
  padding: 5px;
  /* box-shadow: 0 1.5px 1.5px rgba(0, 0, 0, 0.1); Add a subtle shadow */

`;
export const PaymentSubContainer = styled.div`
  margin: auto;
  width: 90%;
  /* box-shadow: 0 1.5px 1.5px rgba(0, 0, 0, 0.1); Add a subtle shadow */

`;

export const PriceDesc = styled.p`
font-size: 18px;
font-weight: 500;
letter-spacing: 0em;
display: inline;
text-align: left;
align-items: flex-start;
margin-top: 2% !important;
margin-bottom: 4% !important;
`;

export const PriceDesc1 = styled.p`
font-size: 22px;
font-weight: 500;
letter-spacing: 0em;
display: inline;
color: #7476D1;
`;