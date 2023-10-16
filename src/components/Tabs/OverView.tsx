import React, { useState } from "react";
import { EduLabel, EduName, EduSub, ExperticeBack, ExperticeText, HeaderLabel, IconBack, IconBackHeader, OverViewText, SessionsBack, SessionsButton, SessionsButtonText, SessionsWidth, ShowMore, TimeBack, TimeBackActive, TimeP, TimePActive, TimePosition } from "../../pages/Mentor/MentorStyles";
import { Column, Row, RowDirection, RowDirectionBetween } from "../../pages/Home/HomeStyles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Fb from '../../Assets/Images/fbsvg.svg'
import Linked from '../../Assets/Images/linkedsvg.svg'
import Education from '../../Assets/Images/edusvg.svg'
import useMediaQuery from "../../hooks/MediaQuery";
import { AvailableDates, AvailableTime } from "../../Data/Data";
import { useNavigate } from "react-router-dom";

const ReadMore = ({ children }: any) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <OverViewText >
            {isReadMore ? text.slice(0, 125) : text}
            <ShowMore>
                <span onClick={toggleReadMore} >
                    {isReadMore ? "Show more" : " show less"}
                </span>
            </ShowMore>
        </OverViewText>
    );
};

const OverView = () => {
    const isMobile = useMediaQuery('(min-width: 950px)');
    const [Status, setStatus] = useState('');
    const navigate = useNavigate()

    function SetStatusfunc(ss: any) {
        setStatus(ss)
    }
    const [Status1, setStatus1] = useState('');

    function SetStatusfunc1(ss: any) {
        setStatus1(ss)
    }


    return (
        <div >
            <RowDirectionBetween style={{ marginTop: '0%' }}>
                <div style={{ width: isMobile ? '170%' : '100%' }}>
                    <Column>
                        <h2>
                            <ReadMore>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </ReadMore>
                        </h2>
                        <HeaderLabel>Social links</HeaderLabel>
                        <Row style={{ marginBottom: '2%' }}>
                            <IconBackHeader>
                                <img src={Fb} />
                            </IconBackHeader>
                            <IconBackHeader>
                                <img src={Linked} />
                            </IconBackHeader>
                        </Row>
                        <HeaderLabel>Expertise</HeaderLabel>

                        <ExperticeBack >
                            <ExperticeText>Design</ExperticeText>
                        </ExperticeBack>

                        <EduLabel>Education</EduLabel>
                        <Row>
                            <IconBackHeader>
                                <img src={Education} />
                            </IconBackHeader>
                            <div style={{ marginLeft: '2.5%' }}>
                                <Column >
                                    <EduName>EAS Design and Graphic Arts</EduName>
                                    <EduSub>Apollo school of arts 2018 - 2022</EduSub>
                                </Column>

                            </div>
                        </Row>
                    </Column>
                </div>
                {isMobile ?
                    <SessionsBack>
                        <SessionsWidth>
                            <Column>
                                <ShowMore>Available sessions</ShowMore>
                                <hr style={{
                                    background: '#E3E3E3',
                                    color: '#E3E3E3',
                                    borderColor: '#E3E3E3',
                                    height: '2px',
                                    marginTop: '1%'
                                }}
                                />
                                <TimePosition>
                                    {AvailableDates.map((data) => {
                                        return (
                                            <div key={data.id} onClick={() => { SetStatusfunc(data.date) }}>
                                                {Status === data.date ?
                                                    <TimeBackActive >
                                                        <TimePActive>{data.date}</TimePActive>
                                                    </TimeBackActive>
                                                    
                                                    :
                                                    <TimeBack >
                                                        <TimeP>{data.date}</TimeP>
                                                    </TimeBack>
                                                    
                                                }
                                            </div>
                                        )
                                    })}

                                </TimePosition>
                                <ShowMore>Available time slots</ShowMore>
                                <hr style={{
                                    background: '#E3E3E3',
                                    color: '#E3E3E3',
                                    borderColor: '#E3E3E3',
                                    height: '2px',
                                    marginTop: '1%'
                                }}
                                />
                                <TimePosition>
                                {AvailableTime.map((data) => {
                                        return (
                                            <div key={data.id} onClick={() => { SetStatusfunc1(data.time) }}>
                                                {Status1 === data.time ?
                                                    <TimeBackActive>
                                                        <TimePActive>{data.time}</TimePActive>
                                                    </TimeBackActive>
                                                    
                                                    :
                                                    <TimeBack >
                                                        <TimeP>{data.time}</TimeP>
                                                    </TimeBack>
                                                    
                                                }
                                            </div>
                                        )
                                    })}

                                </TimePosition>
                                <SessionsButton onClick={() => navigate('/paymentPlan')}>
                                    <SessionsButtonText>Book Session</SessionsButtonText>
                                </SessionsButton>
                            </Column>
                        </SessionsWidth>
                    </SessionsBack>
                    :
                    <SessionsButton onClick={() => navigate('/paymentPlan')}>
                        <SessionsButtonText>Book Session</SessionsButtonText>
                    </SessionsButton>
                }
            </RowDirectionBetween>
        </div>
    );
};

export default OverView;