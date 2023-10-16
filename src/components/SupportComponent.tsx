import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mask1 from '../Assets/Images/Mask1.png'
import { SupportBack, SupportImage, SupportSubTitle, SupportTitle } from "../pages/Mentor/MentorStyles";
import { ColDirection } from "../pages/Home/HomeStyles";
import useMediaQuery from "../hooks/MediaQuery";
const SupportCom = () => {
    const isMobile = useMediaQuery('(min-width: 450px)');

    return (
        <SupportBack>
            <ColDirection>
                {isMobile ?
                    <>
                        <Row style={{ marginBottom: '0%', width: '100%' }}>
                            <Col xs={6} md={4}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf:'center',height:'90%' }}>
                                    <ColDirection>
                                        <SupportTitle>Showcase Your Achievements</SupportTitle>
                                        <SupportSubTitle>Your mentoring profile does not only include your mentoring
                                            booking packages, but also verified testimonials, blog posts
                                            and performance data.</SupportSubTitle>
                                    </ColDirection>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <SupportImage src={Mask1} />
                            </Col>
                            <Col xs={6} md={4}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf:'center',height:'90%' }}>
                                    <ColDirection>
                                        <SupportTitle>Showcase Your Achievements</SupportTitle>
                                        <SupportSubTitle>Your mentoring profile does not only include your mentoring
                                            booking packages, but also verified testimonials, blog posts
                                            and performance data.</SupportSubTitle>
                                    </ColDirection>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '0%', width: '100%' }}>
                            <Col xs={6} md={4}>
                                <SupportImage src={Mask1} />
                            </Col>
                            <Col xs={6} md={4}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf:'center',height:'90%' }}>
                                    <ColDirection>
                                        <SupportTitle>Showcase Your Achievements</SupportTitle>
                                        <SupportSubTitle>Your mentoring profile does not only include your mentoring
                                            booking packages, but also verified testimonials, blog posts
                                            and performance data.</SupportSubTitle>
                                    </ColDirection>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <SupportImage src={Mask1} />
                            </Col>

                        </Row>
                    </>
                    :
                    <>
                        <Col style={{ marginBottom: '0%', width: '100%' }}>
                            <Col xs={12} md={5}>
                                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                                    <ColDirection>
                                        <SupportTitle>Showcase Your Achievements</SupportTitle>
                                        <SupportSubTitle>Your mentoring profile does not only include your mentoring
                                            booking packages, but also verified testimonials, blog posts
                                            and performance data.</SupportSubTitle>
                                    </ColDirection>
                                </div>
                            </Col>
                            <Col xs={12} md={5}>
                                <SupportImage src={Mask1} />
                            </Col>
                            <Col xs={12} md={5}>
                                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                                    <ColDirection>
                                        <SupportTitle>Showcase Your Achievements</SupportTitle>
                                        <SupportSubTitle>Your mentoring profile does not only include your mentoring
                                            booking packages, but also verified testimonials, blog posts
                                            and performance data.</SupportSubTitle>
                                    </ColDirection>
                                </div>
                            </Col>
                        </Col>
                        <Col style={{ marginBottom: '0%', width: '100%' }}>
                        <Col xs={12} md={5}>
                                <SupportImage src={Mask1} />
                            </Col>
                            <Col xs={12} md={5}>
                                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '13%', alignSelf: 'center' }}>
                                    <ColDirection>
                                        <SupportTitle>Showcase Your Achievements</SupportTitle>
                                        <SupportSubTitle>Your mentoring profile does not only include your mentoring
                                            booking packages, but also verified testimonials, blog posts
                                            and performance data.</SupportSubTitle>
                                    </ColDirection>
                                </div>
                            </Col>
                            <Col xs={12} md={5}>
                                <SupportImage src={Mask1} />
                            </Col>

                        </Col>
                    </>
                }
            </ColDirection>
        </SupportBack>
    )
}
export default SupportCom;