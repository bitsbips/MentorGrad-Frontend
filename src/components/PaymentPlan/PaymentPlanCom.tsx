import React, { FC, useState } from "react";
import { Describe, Features, FeaturesPosition, Heading, MainContainer, PositionPlan, Price, SubContainer, Time, Title } from "./PaymentPlanStyles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { PaymentData } from "../../Data/Data";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Divider } from "@mui/material";
import ButtonComp from "../Button";
import { useNavigate } from "react-router-dom";

const dividerStyle = {
    border: '1.5px solid #7476D1', // Increase the border width to 2px
};

const PaymentPlanCard: FC<{ data: typeof PaymentData[0] }> = ({ data }) => {
    const navigate =useNavigate()
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cartstyle = {
        width: '30%',
        border: `2.2px solid ${isHovered ? '#7476D1' : '#fff'}`,
        borderRadius: 5,
    };

    return (
        <Card
            sx={cartstyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardContent>
                <Title>{data.title}</Title>
                <Describe>{data.desc}</Describe>
                <Price>${data.price}<Time>/{data.time}</Time></Price>
                <Divider sx={dividerStyle} />
                <div style={{ marginTop: '6%' }}>
                    {data.features.map((feature, index) => (
                        <FeaturesPosition key={index}>
                            {feature.active === 'yes' ? (
                                <CheckCircleOutlineIcon sx={{ color: '#7476D1', fontSize: 23 }} />
                            ) : (
                                <CancelIcon sx={{ color: '#8B8B8B', fontSize: 23 }} />
                            )}
                            <Features>{feature.name}</Features>
                        </FeaturesPosition>
                    ))}
                </div>
            </CardContent>
            <CardActions sx={{ marginTop: '2%', marginBottom: '3%' }}>
                <ButtonComp style={{ margin: 'auto' }} fontSize={'12px'} title="Get Started" width={'80%'} onClick={() => navigate('/paymentPage', { state: { data } })} />
            </CardActions>
        </Card>
    );
};

const PaymentPlanComp: FC = () => {
    return (
        <MainContainer>
            <SubContainer>
                <Heading>Pick the Perfect Plan</Heading>
                <Describe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum mi et vehicula vulputate.</Describe>
                <PositionPlan>
                    {PaymentData.map((data, index) => (
                        <PaymentPlanCard key={index} data={data} />
                    ))}
                </PositionPlan>
            </SubContainer>
        </MainContainer>
    );
}

export default PaymentPlanComp;
