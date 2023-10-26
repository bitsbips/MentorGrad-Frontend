import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100%;
  max-width: 1161px;
  margin: 0 auto;

  & .group {
    position: relative;
    width: 100%;
    max-width: 1261px;
  }

  /* Media query for small screens */
  @media (max-width: 768px) {
    & .group {
      padding: 0 10px; /* Add padding for smaller screens */
    }
  }

  & .overlap {
    position: relative;
    width: 100%;
    max-width: 1281px;
  }

  & .overlap-group-wrapper {
    position: relative;
    width: 100%;
    max-width: 1281px;
  }

  & .overlap-group {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 0px 2px #919eab33, 0px 12px 24px #919eab1f;
    height: 154px;
    position: relative;
    width: 1261px;
  }

  & .text-wrapper {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 24px;
    font-weight: 600;
    left: 153px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 24px;
    width: 389px;
  }

  & .div {
    color: #7a7a7a;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: 153px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 64px;
    width: 389px;
  }

  & .icons-ic-location {
    height: 16px;
    left: 932px;
    position: absolute;
    top: 123px;
    width: 16px;
  }

  & .jun-mon-wrapper {
    background-image: url(https://c.animaapp.com/2kY30kB9/img/rectangle-262.svg);
    background-size: 100% 100%;
    height: 154px;
    left: 0;
    position: absolute;
    top: 0;
    width: 114px;
  }

  & .jun-mon {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 120px;
    left: 24px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 17px;
    width: 65px;

    & .span {
      color: #ffffff;
      font-family: "Inter", Helvetica;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 22px;
    }

    & .text-wrapper-2 {
      font-size: 32px;
      font-weight: 700;
    }
  }

  & .img-avatar {
    height: 52px;
    left: 981px;
    object-fit: cover;
    position: absolute;
    top: 17px;
    width: 52px;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 600;
    left: 929px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 77px;
    white-space: nowrap;
    width: 156px;
  }

  & .overlap-2 {
    height: 43px;
    left: 948px;
    position: absolute;
    top: 100px;
    width: 117px;
  }

  & .text-wrapper-4 {
    color: #7a7a7a;
    font-family: "Inter", Helvetica;
    font-size: 11px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 20px;
    white-space: nowrap;
    width: 117px;
  }

  & .text-wrapper-5 {
    color: #7a7a7a;
    font-family: "Inter", Helvetica;
    font-size: 11px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 117px;
  }

  & .text-wrapper-6 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 600;
    left: 664px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 44px;
    white-space: nowrap;
    width: 143px;
  }

  & .overlap-3 {
    background-color: #cccdfc;
    border-radius: 10px;
    height: 27px;
    left: 661px;
    position: absolute;
    top: 70px;
    width: 150px;
  }

  & .p {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 10px;
    font-weight: 500;
    left: 33px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 7px;
    width: 104px;
  }

  & .clock {
    height: 13px;
    left: 13px;
    object-fit: cover;
    position: absolute;
    top: 7px;
    width: 13px;
  }

  & .overlap-4 {
    height: 21px;
    left: 1150px;
    position: absolute;
    top: 52px;
    width: 73px;
  }

  & .rectangle {
    background-color: #ececec;
    border-radius: 5px;
    height: 19px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 73px;
  }

  & .eye {
    height: 12px;
    left: 8px;
    object-fit: cover;
    position: absolute;
    top: 5px;
    width: 16px;
  }

  & .text-wrapper-7 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 27px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 36px;
  }

  & .overlap-5 {
    height: 21px;
    left: 1150px;
    position: absolute;
    top: 81px;
    width: 73px;
  }

  & .rectangle-2 {
    background-color: #ff0000b2;
    border-radius: 5px;
    height: 19px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 73px;
  }

  & .text-wrapper-8 {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 24px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 43px;
  }

  & .line {
    height: 88px;
    left: 596px;
    object-fit: cover;
    position: absolute;
    top: 33px;
    width: 1px;
  }

  & .img {
    height: 88px;
    left: 871px;
    object-fit: cover;
    position: absolute;
    top: 33px;
    width: 1px;
  }
`;

export const MentorBooking = (): JSX.Element => {
  return (
    <Grid container>
      <Grid item lg={12}>
        <StyledBox>
          <div className="group">
            <div className="overlap">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="text-wrapper">Introduction to Computing</div>
                  <p className="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus id magna consectetur, sodales lorem convallis,
                    mollis urna.
                  </p>
                  <img
                    className="icons-ic-location"
                    alt="Icons ic location"
                    src="https://c.animaapp.com/2kY30kB9/img/icons-ic-location.svg"
                  />
                  <div className="jun-mon-wrapper">
                    <p className="jun-mon">
                      <span className="span">
                        Jun
                        <br />
                        <br />
                      </span>
                      <span className="text-wrapper-2">
                        17
                        <br />
                      </span>
                      <span className="span">
                        <br />
                        Mon
                      </span>
                    </p>
                  </div>
                  <img
                    className="img-avatar"
                    alt="Img avatar"
                    src="https://c.animaapp.com/2kY30kB9/img/-img-avatar-1@2x.png"
                  />
                  <div className="text-wrapper-3">Baji Darakshan</div>
                  <div className="overlap-2">
                    <div className="text-wrapper-4">Tuddiwala, Faisalabad</div>
                    <div className="text-wrapper-5">test@test.com</div>
                  </div>
                  <div className="text-wrapper-6">30 Minutes</div>
                  <div className="overlap-3">
                    <p className="p">01:00 PM - 01:30 PM</p>
                    <img
                      className="clock"
                      alt="Clock"
                      src="https://c.animaapp.com/2kY30kB9/img/clock--1--1@2x.png"
                    />
                  </div>
                  <div className="overlap-4">
                    <div className="rectangle" />
                    <img
                      className="eye"
                      alt="Eye"
                      src="https://c.animaapp.com/2kY30kB9/img/eye--1--1@2x.png"
                    />
                    <div className="text-wrapper-7">view</div>
                  </div>
                  <div className="overlap-5">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-8">cancel</div>
                  </div>
                </div>
              </div>
              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/2kY30kB9/img/line-59.svg"
              />
              <img
                className="img"
                alt="Line"
                src="https://c.animaapp.com/2kY30kB9/img/line-59.svg"
              />
            </div>
          </div>
        </StyledBox>
      </Grid>
    </Grid>
  );
};
