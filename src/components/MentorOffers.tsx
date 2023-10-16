import React from "react";
import { InputHolder } from "./UserForm/UserFormStyles";
import { BottomPosHome, BottomPosMentor, ColDirection } from "../pages/Home/HomeStyles";
import { BackCartImage, BackCartImageVideo, BackCartMentor, BackCartMentorVideo, BottomBackCart, BottomTextMentor, PlayButton, RowDirectionMentor, RowDirectionMentorWrap } from "../pages/Mentor/MentorStyles";
import { AllMentors } from "../Data/Data";
import Play from '../Assets/Images/play.png'
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props:any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
           
            <Modal.Body>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={'100%'} style={{margin:'auto'}}/>

            </Modal.Body>
           
        </Modal>
    );
}


const MentorOffers = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <InputHolder>
                <BottomPosMentor>
                    <RowDirectionMentor>
                        <RowDirectionMentorWrap>
                            {AllMentors.map((data) => {
                                return (
                                    <>
                                        {data.video === 1 ?
                                            <BackCartMentorVideo>
                                                <ColDirection>
                                                    <div style={{ position: 'relative' }}>
                                                        <BackCartImageVideo src={data.img} />
                                                        <PlayButton src={Play} onClick={() => setModalShow(true)} />
                                                        {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}


                                                    </div>
                                                    <BottomBackCart>
                                                        <BottomTextMentor>{data.title}</BottomTextMentor>

                                                    </BottomBackCart>
                                                </ColDirection>
                                            </BackCartMentorVideo>
                                            :
                                            <BackCartMentor>
                                                <ColDirection>
                                                    <BackCartImage src={data.img} />
                                                    <BottomBackCart>
                                                        <BottomTextMentor>{data.title}</BottomTextMentor>

                                                    </BottomBackCart>
                                                </ColDirection>
                                            </BackCartMentor>
                                        }
                                    </>
                                )
                            })}
                        </RowDirectionMentorWrap>

                    </RowDirectionMentor>
                </BottomPosMentor>
            </InputHolder>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
export default MentorOffers