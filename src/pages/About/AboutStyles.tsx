import styled from "styled-components";


export const Container = styled.div`
  background-color: #F2F5F9;
  flex:1;
 
`;
export const ColorContainer = styled.div`
  background-color: #ECF2FA;
  width: 100%;
 
`;
export const LeftWidth = styled.div`
align-self: center;
justify-content: center;
align-items: center;
margin-top: 3%;
width: 60%;
@media (max-width: 450px) {
    width: 100%;
  }
  @media (min-width: 451px) and (max-width: 1024px){
     width: 90%;
  }
`;
export const TopBack = styled.div`
  background-color: #d7d9f2;
  width: 100%;
  padding:1%;
`;

export const Head = styled.p`
font-style: normal;
font-weight: 700;
font-size: 30px;
width: 55%;
align-self: center;
text-align: center;
margin: auto;
margin-top: 4%;

color: #222222;
@media (max-width: 750px) {
    width: 55%;
    font-size: 20px;




  }

`
export const SubHead = styled.p`
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 24px;
/* or 186% */
margin-top: 1% !important;
text-align: center;
width: 50%;
align-self: center;
text-align: center;
margin: auto;


color: #222222;
@media (max-width: 750px) {
    width: 90%;
    font-size: 14px;
line-height: 20px;



  }

`
export const ButtonsWidth = styled.div`
width: 25%;

margin: auto;
margin-bottom: 2%;
@media (max-width: 750px) {
    width: 90%;
   



  }
   @media (min-width: 451px) and (max-width: 1024px)
{
  width: 50%;
}
  

`;
export const ButtonsPosition = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 4%;

`;
export const BottomPos = styled.div`
width: 80%;
margin: auto;

@media (max-width: 750px) {
    width: 90%;
margin: auto;
   



  }

`;
export const Image1 = styled.img`

height: 56vh;
width: 30%;
border-radius: 5px;
margin-top: -3.5%;


@media (max-width: 450px) {
    margin-top: -4%;
    margin-bottom: 8%;


    width: 100%;
height: 35vh;
   



  }
    @media (min-width: 451px) and (max-width: 1024px)
{
   width: 100%;
height: 30vh;
 margin-top: -4%;
    margin-bottom: 4%;
}

`;
export const MobImg =styled.img`
   margin-top: -20px !important;
    width: 90% !important;

    border-radius: 5px;
align-self: center !important;
text-align: center;
justify-content: center;
align-items: center;

`
export const Image2 = styled.img`
width: 30%;
height: 50vh;
border-radius: 5px;
@media (max-width: 750px) {
    margin-top: 0%;
    margin-bottom: 8%;


    width: 100%;
height: 25vh;
   



  }
   @media (min-width: 451px) and (max-width: 1024px)
{
   width: 100%;
height: 25vh;
  margin-top: 0%;
    margin-bottom: 8%;
}



`;
export const ImagePosition = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 450px) {
    display: flex;
flex-direction: column;
margin: auto;
   



  }
   @media (min-width: 451px) and (max-width: 1024px)
{
   display: flex;
flex-direction: column;
margin: auto;
}


`;
export const ImagePosition1 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;


width: 100%;
height: 10%;

@media (max-width: 750px) {
    display: flex;
flex-direction: row;
width: 90%;


   



  }

`
export const Columnpos = styled.div`
display: flex;
flex-direction: column;
margin-left: 10%;
width: 70%;
@media (max-width: 450px) {
    margin-left: 0%;
width: 100%;
   



  }
  @media (min-width: 451px) and (max-width: 1024px){
    margin-top: 3%;
width: 100%;
margin-left: 0%;
  }
`;
export const Columnpos1 = styled.div`
display: flex;
flex-direction: column;
width: 75%;
@media (max-width: 750px) {
width: 100%;
   



  }
`;

export const Content = styled.p`
font-style: normal;
font-weight: 600;
font-size: 22px;
text-align: center;

color: #222222;

text-align: center;
width: 40%;
align-self: center;
text-align: center;
margin: 0 auto;
@media (max-width: 750px) {
    width: 90%;
    font-size: 22px;


   



  }

`
export const WriterName = styled.p`
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 44px;
margin-top: 1%;
text-align: center;

color: #5F61BE;
text-align: center;

`
export const Title1 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 24px;
color: #222222;
width: 70%;
text-align: left;
@media (max-width: 750px) {
    font-size: 22px;
    margin-top: 3%;
    width: 90%;



   



  }

`
export const SubTitle1 = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
text-align: left;
width: 100%;

/* or 186% */


color: #000000;
@media (max-width: 750px) {
    width: 90%;
   



  }

`
export const SubTitle3 = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 22px;
text-align: left;
width: 72%;
@media (max-width: 750px) {
    font-size: 15px;
    width: 90%;

    



   



  }
/* or 186% */


color: #000000;

`
export const SubTitle2 = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
text-align: left;
width: 95%;

/* or 186% */

@media (max-width: 750px) {
    width:90%;


   



  }
color: #000000;

`
export const Box = styled.div`
border: 1px solid #D6D6D6;
border-radius: 10px;
padding: 1.5%;
margin-bottom: 2%;
width: 60%;
`
export const BoxText = styled.div`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 30px;
text-align: left;
/* identical to box height */


color: #222222;

`
export const Image2Box = styled.img`
margin: 0;
height: 80vh !important;
border-radius: 5px;
@media (max-width: 450px) {
    width:100%;
height: 18rem !important;


   



  }
 @media (min-width: 451px) and (max-width: 1024px){
   width:100%;
height: 18rem !important;

 }

`;
export const Rightimgpo = styled.div`
object-position: right;
right: 0;
display: -webkit-box;

margin-left: auto;
float: right;
text-align: right;  
display: block;
clear:right;
@media (max-width: 450px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
   



  }
   @media (min-width: 451px) and (max-width: 1024px){
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
   }

`


export const RightImage = styled.img`

border-radius: 5px;
height:30rem;
object-fit: cover;
margin-left: auto;
 display: block;
 clear:right;
 



@media (max-width: 750px) {

width: 340px !important;
height: 30vh;
margin: auto;
align-self: center;
   



  }
  @media (min-width: 451px) and (max-width: 1024px){
    width: 650px !important;
height: 30vh;
margin: auto;
align-self: center;
  }



`;

export const GroupPosition = styled.div`
display: flex;
flex-direction: row;
margin-top: 1%;
@media (max-width: 750px) {

    width: 100%;
    margin-top: 3%;

   



  }
`
export const GroupRight = styled.div`
margin-left: 3%;
display: flex;
flex-direction: column;

`
export const LeftImage = styled.img`
width:8%;
height: 8%;



`;
export const GroupHeading = styled.p`
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 20px;
margin: 0;
/* identical to box height */
text-align: left;
@media (max-width: 750px) {

    font-size: 12px;





}

color: #222222;

`
export const BoldHeading = styled.p`
font-style: normal;
font-weight: 700;
font-size: 25px;
text-align: left;
display: flex;
align-self: flex-start;
/* identical to box height, or 171% */

@media (max-width: 750px) {

font-size: 18px;
text-align: left;
margin-left: 0%;
display: inline-block;







}
color: #222222;
`
export const Name = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 3px;
text-align: center;
/* identical to box height */
margin-top: 22px !important;
margin-bottom: 8px;
color: #222222;

`
export const Profession = styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
text-align: center;
/* identical to box height */
margin:0;
margin-top: 2px !important;
color: #222222;
margin-bottom: 4px;

`

export const BackCartPos = styled.div`
display: flex;
flex-direction: row;

 justify-content: space-between;
 
 

  
/* padding: 3%; */
`
export const BackCartPos1 = styled.div`
display: flex;
flex-direction: row;
 
 justify-content: space-between;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
}
 

  
/* padding: 3%; */
`
export const BackCart12 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 450px) {
 display: flex;
flex-direction: row;
justify-content: space-between;

}
`

export const BackCart = styled.div`
background-color: #F2F5F9;
box-shadow: 0px 0px 15px rgba(163, 165, 233, 0.3);
border-radius: 12px;
width: 23.8%;
margin-bottom: 5px;
margin-top: 5px;
/* padding: 3%; */
@media (max-width: 750px) {
  margin: auto;
  width: 70.8%;

}
@media (min-width: 451px) and (max-width: 1024px)
{
 margin-left: 3%;
}

`

export const BottomBackCart = styled.div`
background-color: #7476D1;
border-radius: 0px 0px 12px 12px;
padding: 0%;
margin-bottom:0px;
margin-top: 12px !important;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
@media (max-width: 750px) {
  display: flex;
justify-content: center;
align-items: center;
 
}

`
export const BottomBackCartPos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 90%;
padding: 4%;


@media (max-width: 750px) {
  margin:0px 20px 10px 20px ;
  flex-direction: row;
justify-content: space-evenly;
}


`
export const Leftbtmtext = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
margin: auto;
margin-left: -3% !important;
/* identical to box height */



color: #FFFFFF;
@media (max-width: 750px) {

  font-style: normal;
font-weight: 500;
font-size: 12px;
margin: auto;
margin-left: 2% !important;
/* identical to box height */



color: #FFFFFF;




}

`
export const Rightbtmtext = styled.p`
font-style: normal;
font-weight: 600;
font-size: 12px;
margin: auto;
margin-left: 30% !important;

/* identical to box height */


color: #FFFFFF;
@media (max-width: 750px) {

  font-style: normal;
font-weight: 600;
font-size: 12px;
margin: auto;
margin-left: 10% !important;

/* identical to box height */


color: #FFFFFF;





}
`
export const StarImage = styled.img`
width: 10%;
height: 10%;
margin: 0;
align-items: center;
align-self: center;
justify-content: center;
margin-top: -10%;
@media (max-width: 750px) {
  width: 15px;
height: 10px;
}


`
export const UserImage = styled.img`
width: 40%;
height: 40%;
margin: auto;
align-items: center;
align-self: center;
justify-content: center;
border-radius: 10px;
text-align: center;
margin-top: 4%
`
export const BackgroundChecked1 = styled.div`
background: #C9F6EF;
border-radius: 5px;
padding: 0.5%;
margin-top: 2%;
margin-bottom:4%;
width: 15%;
cursor: pointer;
@media (max-width: 750px) {

width: 100%;
margin: auto;
margin-top: 4% !important; 
margin-bottom:4% !important;






}



`;
export const BackgroundChecked2 = styled.div`
background: #C9F6EF;
border-radius: 10px;
padding: 1.5%;
margin-top: 2%;
margin-bottom:4%;
width: 27%;
color: #000000;
cursor: pointer;
&:hover {
  background: #7476D1;
  color: #fff;
  }

@media (max-width: 750px) {

width: 50%;
margin: auto;
margin-bottom:4% !important;
padding: 2%;






}





`;
export const BackgroundChecked3 = styled.div`
background: #C9F6EF;
border-radius: 10px;
padding: 1%;
margin-top: 1.5%;
margin-bottom:1%;
width: 10%;
color: #000000;
cursor: pointer;
&:hover {
  background: #7476D1;
  color: #fff;
  }

@media (max-width: 450px) {

width: 100%;
margin: auto;
margin-top: 4% !important; 
margin-bottom:4% !important;






}
  @media (min-width: 451px) and (max-width: 1024px)
{
  width: 100%;
margin: auto;
margin-top: 4% !important; 
margin-bottom:4% !important;






}




`;
export const BackgroundCheckedM = styled.div`
background: #7476D1;
border-radius: 10px;
padding: 1.5%;
margin-top: 2%;
margin-bottom:4%;
width: 40%;
cursor: pointer;
&:hover {
  background: #C9F6EF
  }

@media (max-width: 750px) {

width: 100%;
margin: auto;
margin-top: 4% !important; 
margin-bottom:4% !important;






}
@media (min-width: 451px) and (max-width: 1024px)
{
  width: 20vh;
}






`;
export const TextChecked1 = styled.div`
font-style: normal;
font-weight: 600;
font-size: 12px;


`;
export const TextChecked2 = styled.div`
font-style: normal;
font-weight: 600;
font-size: 14px;
color: #fff;
&:hover {
  color: #000000;
  }

`;
