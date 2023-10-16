import React from "react";
import { BackCard, BackIconinfo, CardIcon, CardPosition, CardSubTitle, CardTitle, InsideCardWidth, PositionCards, PositionHeader, PositionTextCol } from "./StudentDashboardStyles";
import Users from '../../Assets/Images/usersgroup.svg'
import Appointment from '../../Assets/Images/appointment.svg'
import Wallet from '../../Assets/Images/wallet-fill.svg'
const data= [
    {
        id:1,
        num:'23',
        title:'Members',
        background:'#E5F5F2',
        backicon:'#D6E6E3',
        icon:Users
    
    },
    {
        id:1,
        num:'33',
        title:'Appointments',
        background:'#EDEDF8',
        backicon:'#CDCDDB',
        icon:Appointment
    
    },
    {
        id:1,
        num:'$14',
        title:'Total Earned',
        background:'#DBDBEA',
        backicon:'#BDBDD7',
        icon:Wallet
    
    }

]
const Cardsinfo =() => {
    return(
        <PositionCards>
            {data.map((data) => {
                return(
                    <BackCard style={{backgroundColor:data.background}}>
                        <InsideCardWidth>
                        <CardPosition >
                            <BackIconinfo style={{backgroundColor:data.backicon}}>
                                <CardIcon src={data.icon}/>
                            </BackIconinfo>
                            <PositionTextCol style={{marginLeft:'4%'}}>
                             <CardTitle>{data.num}</CardTitle>
                             <CardSubTitle>{data.title}</CardSubTitle>
                            </PositionTextCol>
                        </CardPosition>
                        </InsideCardWidth>
                    </BackCard>

                )
            })}

        </PositionCards>
    )
}
export default Cardsinfo;