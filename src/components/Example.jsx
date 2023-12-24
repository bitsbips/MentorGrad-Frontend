import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RightBorder = styled.div`
   
   width: 70%;

  background-color:  #fffff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 950px) {
    width: 90%;
  }
  
 

`;
const BorderWidth = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure the container takes up the full viewport height */

`
const TopHeader = styled.div`
    background-color: #fffff;
    padding: 1%;
    border-bottom: 1px solid grey;
`
const HeadingTop = styled.p`
    font-size: 34px;
    color: #1C2A45;
    font-weight: 600;
    text-align: left;
    padding-right: 3%;
`
const Position = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    margin: auto;
    margin-top: 2% !important;
    margin-bottom: 3% !important;
    @media (max-width: 450px) {
        display: flex;
    flex-direction: column;  }
`
const Position1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
`
const TopStyle = styled.div`
    margin-top: 3%;
`
const Heading = styled.p`
    color:#222222;
     font-size: 28px;
       font-weight: 600;
       text-align: left;
    
`
const Label = styled.p`
        text-align: left;
        color: #666666;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 2px;

    
`
const SubHead = styled.p`
    color: #333333;
    font-size: 17px;
    font-weight: 900;
`
const Price = styled.p`
 color: #333333;
    font-size: 17px;
    font-weight: 400;
    
`
const LeftRight = styled.div`
 width: 50%;
 text-align: left;
 @media (max-width: 450px) {
    width: 100%;
 text-align: left;
     }
`
const BottomText = styled.p`
    color: #333333;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`
const StyledInput = styled.input`
  border: 1.5px solid #D6D6D6;
  border-radius: 15px;
  padding: 12px 22px; /* Added padding to the right */
  background-color: #fffff;
  width: 60%;
  @media (max-width: 450px) {
    width: 100%;
     }
`;
const StyledSelect = styled.select`
   width: 60%;
        border-width: 1.5;
        border-radius: 15px;
        background-color: #fffff;
        padding: 3%;
        border-color: #D6D6D6;
        margin-top: 1%;
        @media (max-width: 450px) {
    width: 100%;
    padding: 4%;

     }
`;
const InputContainer = styled.div`
  position: relative;
`;

const DollarSign = styled.span`
  position: absolute;
  top: 50%;
  left: 8px; /* Adjust the left position as needed */
  transform: translateY(-50%);
  color: #000; /* Color for the "$" sign */
  pointer-events: none; /* Prevent interactions with the "$" sign */
`;


const Widget = () => {
    const [price, setPrice] = useState('')
    const [gst, setGst] = useState('')
    const [priceExGST, setPriceExGST] = useState(0);
    const [gstAmount, setGstAmount] = useState(0);
    const [priceInGST, setPriceInGST] = useState(0);


    useEffect(() => {
        if (price !== '' && gst !== '') {
            if (gst === 'including') {
                const priceExcludingGST = parseFloat(price) / 1.1;
                setPriceExGST(priceExcludingGST.toFixed(2));

                // Calculate GST amount
                const gstAmount = parseFloat(price) - priceExcludingGST;
                setGstAmount(gstAmount.toFixed(2));

                // Set price in GST with exactly two decimal places
                const priceWithTwoDecimalPlaces = parseFloat(price).toFixed(2);
                setPriceInGST(priceWithTwoDecimalPlaces);
            } else if (gst === 'excluding') {
                // Calculate price including GST
                const priceIncludingGST = parseFloat(price) * 1.1;
                setPriceInGST(priceIncludingGST.toFixed(2));

                // Set price excluding GST and GST amount
                setPriceExGST(price);
                setGstAmount((priceIncludingGST - parseFloat(price)).toFixed(2));
            }
        }
    }, [price, gst]);
    return (
        <BorderWidth>

            <RightBorder>
                <TopHeader>
                    <HeadingTop>Australian GST calculator</HeadingTop>
                </TopHeader>
                <Position>
                    <LeftRight>
                        <Heading>Price</Heading>
                        <TopStyle>
                            <Label>Amount</Label>
                            <InputContainer>
                                <DollarSign>$</DollarSign>
                                <StyledInput
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder='Price'
                                />
                            </InputContainer>

                        </TopStyle>
                        <TopStyle>
                            <Label>GST status</Label>
                            <StyledSelect
                                placeholder='Select' value={gst} onChange={(e) => setGst(e.target.value)}>


                                <option value={''} disabled>Select</option>

                                <option value={'including'}>including GST</option>
                                <option value={'excluding'}>excluding GST</option>
                            </StyledSelect>
                        </TopStyle>
                    </LeftRight>
                    <LeftRight>
                        <Heading>Results</Heading>
                        <TopStyle style={{ marginTop: '6%' }}>
                            <Position1>
                                <SubHead>Price (ex GST)</SubHead>
                                <Price>${priceExGST}</Price>
                            </Position1>
                            <Position1>
                                <SubHead>GST</SubHead>
                                <Price>${gstAmount}</Price>
                            </Position1>
                            <hr style={{ border: ' 1px solid #000', margin: '20px 0' }} />
                            <Position1>
                                <SubHead>Price (in GST)</SubHead>
                                <Price>${priceInGST}</Price>
                            </Position1>
                        </TopStyle>

                    </LeftRight>
                </Position>
                <BottomText>Powered by <a target="_blank"  href={'https://www.loanshub.com.au/'}><img style={{width:'80px',height:'17px'}} src="https://loanshub-static.web.app/images/loanshub-logo-trans.png" />
</a></BottomText>

            </RightBorder>
        </BorderWidth>


    )
}
export default Widget;