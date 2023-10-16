import React, { useState } from 'react'
import LeftImage from '../../../components/LeftImageback'

import { CenterContent, Container, ErrorText, HeadingTop, Position, PositionCol, SubHeading } from '../AuthStyles'

import Input from '../../../components/Input'
import { Grid } from '@mui/material'

import BottomLink from '../../../components/BottomLink'
import { useNavigate } from 'react-router-dom'
import useMediaQuery from '../../../hooks/MediaQuery'
import { useFormik } from 'formik'
import * as Yup from "yup";
import ButtonComp from '../../../components/Button'
import Myuser from '../../../store/AuthStates'
import { observer } from 'mobx-react-lite'
import { ForgetEmailNew } from '../../../api'


const ForgetEmail = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const isMobile = useMediaQuery('(min-width: 950px)');

    const initialValues = {
        email: '',


    }
    const validationSchema = Yup.object({


        email: Yup.string()
            .email('Enter a valid email')
            .required('Email is required'),
      
    });
    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('values', values)
            Myuser.setEmail(values.email)
            ForgetEmailNew(values).then((e) => {
                if(e.status === false){
                    alert(e.message)
                }else{
                    alert(e.message)
                    setTimeout(() => {

                        navigate("/")
                    }, 2000)
                }
            })
            // navigate("/Forget-Password")

        },
    });

    return (
        <Container>
            <Position>
                {isMobile ?
                    <LeftImage height={'100vh'} />
                    :
                    <></>
                }
                <CenterContent>
                    <HeadingTop>Forgot password?</HeadingTop>
                    <SubHeading>No worries! Just enter your email and we’ll send you a reset password link.</SubHeading>
                    <form onSubmit={handleSubmit}>
                    <div style={{ marginTop: 10 }}>
                        <Input id={'email'} width={'100%'} label='Email address' value={values.email} onChange={handleChange} placeholder='Johndoe11gmail.com' inputmode={'text'} />
                         <ErrorText>{errors.email}</ErrorText>
                    </div>
                    <ButtonComp fontSize={'14px'} title='Send Recovery Email' onClick={() => ''} width={'100%'} />
                    </form>
                    <BottomLink title='Just remember?' title1='Sign in' onClick={() => '/'} to='/' />
                </CenterContent>


            </Position>
        </Container>
    )
}

export default observer(ForgetEmail) 
