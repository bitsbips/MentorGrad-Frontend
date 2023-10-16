import React, { useContext, useEffect, useState } from 'react'
import { BackActive, BackActiveLast, BackInActive, BackInActiveLast, Buttonsposition, Container, Lineimg, LineimgActive, MainContainer, Position, PositionCol, SubContainer, Title } from './UserFormStyles'
import Line from '../../Assets/Images/Linem.png'
import LineActive from '../../Assets/Images/LineActive.png'
import PersonalData from './PersonalData'
import PassportDetails from './PassportDetails'
import ProgramPref from './ProgramPref'
import UploadDocuments from './UploadDocuments'
import { Context } from '../../Context/ContextStates'
import Toast from '../Toastifycom'
import Fomikpersonal from './Fomikpersonal'
const UserFormAll = () => {
    const { value, setValue } = useContext(Context)
   
    const Mycomphoolder: any = () => {
        if (value === '0') {
            return (
                <div>
                    <Fomikpersonal/>
                    {/* <PersonalData /> */}
                </div>
            )
        }
        if (value === "1") {
            return (
                <div>
                    <PassportDetails />
                </div>
            )
        }
        if (value === "2") {
            return (
                <div>
                    <ProgramPref />
                </div>
            )
        }
        if (value === "3") {
            return (
                <div>
                    <UploadDocuments />
                </div>
            )
        }

    }

    return (
        <Container>
            <SubContainer>
                {value === '0' ?
                    <Position>
                        <PositionCol>
                            <Title>Personal<br />Data</Title>
                            <Position>
                                <BackActive />
                                <Lineimg src={Line} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Passport<br />Details</Title>
                            <Position>
                                <BackInActive />
                                <Lineimg src={Line} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Program<br />Preferences</Title>
                            <Position>
                                <BackInActive />
                                <Lineimg src={Line} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Upload<br />Documents</Title>
                            <Position>
                                <BackInActiveLast />
                            </Position>
                        </PositionCol>

                    </Position>

                    :
                    <></>
                }
                {value === '1' ?
                    <Position>
                        <PositionCol>
                            <Title>Personal<br />Data</Title>
                            <Position>
                                <BackActive />
                                <LineimgActive src={LineActive} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Passport<br />Details</Title>
                            <Position>
                                <BackActive />
                                <Lineimg src={Line} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Program<br />Preferences</Title>
                            <Position>
                                <BackInActive />
                                <Lineimg src={Line} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Upload<br />Documents</Title>
                            <Position>
                                <BackInActiveLast />
                            </Position>
                        </PositionCol>

                    </Position>

                    :
                    <></>
                }
                {value === '2' ?
                    <Position>
                        <PositionCol>
                            <Title>Personal<br />Data</Title>
                            <Position>
                                <BackActive />
                                <Lineimg src={LineActive} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Passport<br />Details</Title>
                            <Position>
                                <BackActive />
                                <Lineimg src={LineActive} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Program<br />Preferences</Title>
                            <Position>
                                <BackActive />
                                <Lineimg src={Line} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Upload<br />Documents</Title>
                            <Position>
                                <BackInActiveLast />
                            </Position>
                        </PositionCol>

                    </Position>

                    :
                    <></>
                }
                {value === '3' ?
                    <Position>
                        <PositionCol>
                            <Title>Personal<br />Data</Title>
                            <Position>
                                <BackActive />
                                <Lineimg src={LineActive} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Passport<br />Details</Title>
                            <Position>
                                <BackActive />
                                <Lineimg src={LineActive} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Program<br />Preferences</Title>
                            <Position>
                                <BackActive />
                                <Lineimg src={LineActive} />

                            </Position>
                        </PositionCol>
                        <PositionCol>
                            <Title>Upload<br />Documents</Title>
                            <Position>
                                <BackActiveLast />
                            </Position>
                        </PositionCol>

                    </Position>

                    :
                    <></>
                }
            </SubContainer>
            <div>
                {Mycomphoolder()}
            </div>
            <Toast/>
        </Container>
    )
}

export default UserFormAll
