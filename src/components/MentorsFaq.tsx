import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionData } from '../Data/Data';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { BoldHeading, BottomPosHome, ColDirection, HomeSubHeading1, RowDirection, RowDirectionBetween, WorksImage } from '../pages/Home/HomeStyles';
import Faqimage from '../Assets/Images/faq.svg'
import useMediaQuery from '../hooks/MediaQuery';

const AccordionStyle = styled.div`
background-color: #fffff;
width: 75%;
@media (max-width: 750px) {

width: 95%;
margin: auto;
}
@media (min-width: 451px) and (max-width: 1024px)
{
    width: 100%;
margin: auto;
}
`;
const AccordionHead = styled.p`
font-style: normal;
font-weight: 600;
font-size: 14px;
/* identical to box height, or 300% */
margin: 0;
padding: 1%;

color: #000000;
text-align: left;

`;
const AccordionSubHead = styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
/* or 186% */
text-align: left;

margin: 0;
color: #222222;

`;
const useStyles = makeStyles({
    MuiAccordionroot: {
        "&.MuiAccordion-root:before": {
          backgroundColor: "#7476D1"
        }
      }
  });
export default function MentorsFaq() {
    const isMobile = useMediaQuery('(min-width: 950px)');

    const classes = useStyles();

    return (
        <BottomPosHome>
            <RowDirection>

                <ColDirection>

                    <BoldHeading>Mentors  <BoldHeading style={{ color: '#7476D1' }}>FAQs </BoldHeading></BoldHeading>
                    {isMobile ?
                        <>
                            <HomeSubHeading1>Everything you need to know about Mentorgrad and how it works. Can’t find answer? Please chat to our friendly team.</HomeSubHeading1>
                            <WorksImage src={Faqimage} />
                        </>
                        :
                        <></>
                    }

                </ColDirection>
                <AccordionStyle >
                    {AccordionData.map((data) => {
                        return (
                            <Accordion classes={{
                                root: classes.MuiAccordionroot
                             }}                           
                            elevation={0} style={{ backgroundColor: '#fffff' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: '#7476D1' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <AccordionHead>
                                        {data.title}
                                    </AccordionHead>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <AccordionSubHead>
                                        {data.content}
                                    </AccordionSubHead>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}


                </AccordionStyle>
            </RowDirection>
        </BottomPosHome>
    );
}