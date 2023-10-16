import React from "react";
import styled from "styled-components";


interface Props {
   text: string
   handleOnChange?: (e: any) => void;
  selected: boolean

}
const CheckBox = styled.input`
  margin: 8px 16px 5.8px 3px;
  width: 5%;
  border-radius: 2px;
  border: solid 1px #c6c4d2;
  float: left;
  background: ${(porps) => (porps.checked ? '#482474' : '#fbfcff')};
  cursor: pointer;
`
const Container = styled.div`
  margin-bottom: 0px !important;
  display: flex;
  flex-direction: row;
 
`
const Description = styled.p`
  padding-bottom: 1px;
  margin-top: 4px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;  
  text-align: left;
  margin-left: 1px;
  width: 50vh;
  margin-top: 3vh;

  @media (max-width: 750px) {
    width: 30vh;



  }

`
const MultiCheckBox: React.FC<Props> = (props) => {


    return (
        <Container>
        <CheckBox
        className="row"
          type="checkbox"
          checked={props.selected}
          onChange={props.handleOnChange} 
        ></CheckBox>
        <Description className="row" >
          {props.text}
        </Description>
      </Container>
    );
};

export default MultiCheckBox;