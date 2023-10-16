import React, { useEffect, useState } from 'react'
import LeftImage from '../../../components/LeftImageback'

import { CenterContent, Container, ErrorText, HeadingTop, Position, PositionCol, SubHeading } from '../AuthStyles'

import PasswordInput from '../../../components/PasswordInput'

import useMediaQuery from '../../../hooks/MediaQuery'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom'
import ButtonComp from '../../../components/Button'
import Myuser from '../../../store/AuthStates'
import { observer } from 'mobx-react-lite'
import { ActivatePassword, ResetPasswordNew } from '../../../api'


const ForgetPassword = () => {
    const navigate = useNavigate()


    const isMobile = useMediaQuery('(min-width: 950px)');
    const initialValues = {

        password: '',
        confirmpass: '',

    }
    const validationSchema = Yup.object({



        password: Yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        confirmpass: Yup.string().required("Confirm Password is Required").oneOf([Yup.ref('password'), null], 'Passwords must match'),

    });
    const location = useLocation()
    const path = location.pathname.split("&&")
    useEffect(() => {
        if (path[0].split("/")[2] === undefined || path[1].split("=")[1] === undefined) {
            setTimeout(() => {

                navigate("/")
            }, 2000)

        } else {
            ActivatePassword(path[0].split("/")[2], path[1].split("=")[1]).then((e) => {
                if (e.status === false) {
                    alert(e.message)
                    setTimeout(() => {

                        navigate("/")
                    }, 2000)

                }
            })
        }


    }, [])
    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('values', values)
            Myuser.setPassword(values.password)
            Myuser.setconfirmpassword(values.confirmpass)
            ResetPasswordNew(path[1].split("=")[1], values).then((e) => {
                if (e.status === false) {
                    alert(e.message)
                } else {
                    alert(e.message)
                    setTimeout(() => {

                        navigate("/")
                    }, 2000)
                }
            })

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
                    <HeadingTop>Create new password</HeadingTop>
                    <SubHeading>Please create a new password that you don’t use on any other site.</SubHeading>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginTop: 10 }}>
                            <PasswordInput id={'password'} value={values.password} onChange={handleChange} label={'Password'} placeholder={'Enter your Password'} style={{ marginTop: 5 }} />
                            <ErrorText>{errors.password}</ErrorText>
                            <PasswordInput id={'confirmpass'} value={values.confirmpass} onChange={handleChange} label={'Confirm Password'} placeholder={'Enter your Password'} style={{ marginTop: 5 }} />
                            <ErrorText>{errors.confirmpass}</ErrorText>

                        </div>
                        <div style={{ marginTop: '10%' }}>
                            <ButtonComp fontSize={'14px'} title='Change Password' onClick={() => ''} width={'100%'} />
                        </div>
                    </form>
                </CenterContent>


            </Position>
        </Container>
    )
}

export default observer(ForgetPassword) 
