import React from "react";
import './Confirm.css'
import { Thanyou, ThanyouMessage } from "../UserForm/UserFormStyles";
import { ResponseButton, SessionsButton, SessionsButtonText } from "../../pages/Mentor/MentorStyles";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="wrapper">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
            <Thanyou>Thank You!</Thanyou>
            <ThanyouMessage>Your response has been successfully recorded.</ThanyouMessage>
            <ResponseButton onClick={() => navigate('/dashboard')}>
                <SessionsButtonText>Ok</SessionsButtonText>
            </ResponseButton>
        </div>
    )
}
export default Confirm;