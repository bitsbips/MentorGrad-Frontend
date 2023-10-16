import { Autocomplete, Button, Grid, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { FC, useContext, useState } from 'react'
import LineInput from '../LineInput'
import { BackgroundChecked, Buttonsposition, CheckBoxPos, CheckedPosition, Container, ContainerD, Heading, InputHolder, Label, Labelb, SubContainer, TextChecked } from '../../components/UserForm/UserFormStyles'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DropdownCompo from '../Dropdown';
import { Country, English, Level, Level1, Organization, Proficiency, Qualification, Uni, options, optionsMulti } from '../../Data/Data';
import ChoosFile from '../ChooseFile';
import useMediaQuery from '../../hooks/MediaQuery';
import RadioComp from '../RadioButton';
import MultiDropComp from '../MultiDrop/MultiDropComp';
import MultiCheckBox from '../MultiCheckBox';
import MultilineInput from '../MultilineInput';
import MultiRadio from '../MultiRadio';
import LinkButton from '../LinkButton';
import IconButton from '../IconButton';
import { Content } from '../../pages/About/AboutStyles';
import MyMentor from '../../store/MentorStates';
import { observer } from 'mobx-react-lite';
import RightLinkButton from '../RightIconButton';
import SearchDropdown from '../SearchDropdown';
import RadioButtonsGroup from '../MultiRadio';
import { Context } from '../../Context/ContextStates';
import { MentorForm, RegisterMentor } from '../../api';
import { useNavigate } from 'react-router-dom';
import Toast, { notifyError, notifySuccess } from '../Toastifycom';
import TextInput from '../StudentProfileDetails/InputProfile';
import Loadercom from '../Loadercom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from '../../pages/AuthFlow/AuthStyles';
import { MultiSelect } from 'react-multi-select-component';

interface University {
    id: number;
    label: string;
    value: string;
}
const MentorAppDetails: FC = () => {
    const navigate = useNavigate()
    const { countryData, setCountryData } = useContext(Context)
    const { countryList, setCountryList } = useContext(Context)
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const handleCountryChange = (selectedCountry: any) => {
        setSelectedCountry(selectedCountry.name); // Store the selected country in state
    };
    const [multiradio, setMultiRadio] = useState('');

    const handleChange = (event: any) => {
        setMultiRadio(event.target.value);
    };
    const [student, setStudent] = useState('');

    const handleChangeStudent = (event: any) => {
        setStudent(event.target.value);
    };
    const [work, setWork] = useState('');

    const handleChangeWork = (event: any) => {
        setWork(event.target.value);
    };
    const [university, setUniversity] = useState<University | null>(null);

    const [organization, setOrganization] = useState('')
    const [load, setLoad] = useState(false)
    const isMobile = useMediaQuery('(min-width: 950px)');


    const [svalue, setSvalue] = useState([])
    const [state, setState] = React.useState<{ selections: string[] }>({ selections: [] });
    function handleCheckboxChange(key: string) {
        console.log(state, "state")
        let sel = state.selections
        let find = sel.indexOf(key)
        if (find > -1) {
            sel.splice(find, 1)
        } else {
            sel.push(key)
        }

        setState({
            selections: sel,
        })
    }



    const handleSubmit = async () => {
        setLoad(true)
        RegisterMentor(formik.values.fname, formik.values.lname, formik.values.email).then(e => {
            const mentorId = e["message"];
            console.log(mentorId)
            if (e.status) {
                const formResponse = MentorForm(university, selectedCountry, student, work, organization, multiradio, state, formik.values.svalue, formik.values.desc, mentorId).then((e) => {
                    if (e.success === true) {
                        setLoad(false)
                        notifySuccess("Form Submitted Successfully ,Please Check your Email!")
                        setTimeout(() => {
                            navigate('/login')
                        }, 2000)
                    } else
                        setLoad(false)

                    console.log('error')
                    // notifyError(e.message)

                })
            }
            else {
                setLoad(false)

                notifyError(e.message)
            }

        }).catch(err => {
            setLoad(false)
            alert(err)
            // console.log(err, " Maybe network error")
        })

    }
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            university: "",
            selectedCountry: "",
            svalue: [],
            desc: '',



        },
        validationSchema: Yup.object({
            svalue: Yup.array().min(1, 'At least one language is required'),
            selectedCountry: Yup.string().required("Country of Current Residence is required"),
            fname: Yup.string().required("First Name is required"),
            lname: Yup.string().required("Last Name is required"),
            email: Yup.string()
                .email('Enter a valid email')
                .required('Email is required'),
            university: Yup.string().required("University is required"),
            desc: Yup.string().min(300, 'Description must be at least 300 characters').required('Description is required'),




        }),
        onSubmit: handleSubmit,
    });


    return (

        <Container>
            <ContainerD>
                <form onSubmit={formik.handleSubmit}>

                    <Heading>Mentor Application Form</Heading>
                    <InputHolder>
                        <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>
                            <div style={isMobile ? { width: '45%' } : {}}>
                                <Labelb>First Name</Labelb>
                                <TextInput value={formik.values.fname} onChange={formik.handleChange} placeholder='John' id={'fname'} width={'100%'} type={'text'} />
                                {formik.touched.fname && formik.errors.fname ? (
                                    <ErrorText>{formik.errors.fname}</ErrorText>
                                ) : ""}
                            </div>
                            <div style={isMobile ? { width: '45%' } : { marginTop: '3%' }}>
                                <Labelb>Last Name</Labelb>
                                <TextInput value={formik.values.lname} onChange={formik.handleChange} placeholder='Doe' id={'lname'} width={'100%'} type={'text'} />
                                {formik.touched.lname && formik.errors.lname ? (
                                    <ErrorText>{formik.errors.lname}</ErrorText>
                                ) : ""}
                            </div>
                        </div>

                    </InputHolder>
                    <InputHolder>
                        <Label>Email</Label>
                        <TextInput value={formik.values.email} onChange={formik.handleChange} placeholder='Doe@gmail.com' id={'email'} width={'100%'} type={'text'} />
                    </InputHolder>
                    {formik.touched.email && formik.errors.email ? (
                        <ErrorText>{formik.errors.email}</ErrorText>
                    ) : ""}
                    <InputHolder>
                        <Label>University Name</Label>
                        <Autocomplete
                            disablePortal
                            id="university"
                            options={Uni}
                            value={university}
                            onBlur={formik.handleBlur}
                            sx={{
                                width: '100%',
                                borderRadius: 5,
                                '& fieldset': {
                                    borderRadius: 1.5, borderWidth: '1.5px',
                                    borderColor: '#D6D6D6',
                                    padding: '1.5%'

                                }
                            }}
                            onChange={(_, newValue: any) => {
                                setUniversity(newValue);
                                formik.setFieldValue('university', newValue ? newValue.value : ''); // Set the value if newValue is not null, otherwise set it to an empty string
                            }}
                            getOptionLabel={(country: any) => (country ? country.label : '')}
                            renderInput={(params) => <TextField {...params} label="" size="small" placeholder='Select' />}
                        />
                        {formik.touched.university && formik.errors.university ? (
                            <ErrorText>{formik.errors.university}</ErrorText>
                        ) : ""}
                    </InputHolder>
                    <InputHolder>
                        <Label>Country of Residence</Label>
                        <Autocomplete
                            disablePortal
                            id="Country"
                            options={countryList || []}
                            value={{ name: selectedCountry }}
                            sx={{
                                width: '100%',
                                borderRadius: 5,
                                backgroundColor: '#F2F5F9',
                                marginTop: '1%',
                                '& fieldset': {
                                    borderRadius: 1.5, borderWidth: '1.5px',
                                    borderColor: '#D6D6D6',
                                    padding: '1.5%'

                                }
                            }}
                            onBlur={() => formik.setFieldTouched('selectedCountry')}
                            onChange={(_, newValue: any) => {
                                const countryName = newValue.name; // Extract the country name from the newValue object
                                handleCountryChange(newValue);
                                formik.setFieldValue('selectedCountry', countryName); // Set the country name as the selectedCountry value
                            }} getOptionLabel={(country: any) => (country ? country.name : '')}
                            renderInput={(params) => <TextField {...params} label="" size="small" placeholder='Select' />}
                        />
                        {formik.touched.selectedCountry && formik.errors.selectedCountry ? (
                            <ErrorText>{formik.errors.selectedCountry}</ErrorText>
                        ) : ""}
                    </InputHolder>
                    <InputHolder>
                        <RadioComp heading='Are you a current student?' id={'1'} value1={student} onChange={handleChangeStudent} />
                    </InputHolder>
                    {student === 'No' &&
                        <InputHolder>
                            <RadioComp heading='If you are not a current student, are you currently working?' id={'1'} value1={work} onChange={handleChangeWork} />
                        </InputHolder>
                    }
                    {work === 'Yes' &&
                        <InputHolder>
                            <Label>Organization Name</Label>
                            <SearchDropdown label={'Organization'} value={organization} width={'100%'} id={'1'} onChange={(e) => setOrganization(e)} data={Organization} />
                        </InputHolder>
                    }
                    <InputHolder>
                        <MultiRadio value1={multiradio} onChange={handleChange} heading={'What level of program are you enrolled in?'} />
                    </InputHolder>

                    <InputHolder>

                        <Label>In which areas can you mentor students?</Label>
                        <CheckBoxPos>
                            {optionsMulti.map((option) => (
                                <MultiCheckBox

                                    key={option}
                                    text={option}
                                    handleOnChange={() => handleCheckboxChange(option)}
                                    selected={state.selections.includes(option)}
                                />
                            ))}
                        </CheckBoxPos>
                    </InputHolder>
                    <InputHolder>
                        <Label>English Proficiency</Label>
                        <div style={{ width: '100%' }} className="multi-drop-container">
                            <MultiSelect
                                options={English}
                                value={formik.values.svalue}
                                className="dark"
                                overrideStrings={{ "selectSomeItems": 'Language' }} // <- to override strings
                                onChange={(selectedOptions: any) => {
                                    formik.setFieldValue('svalue', selectedOptions); // Update formik field directly
                                }}
                                labelledBy=""

                            />
                        </div>
                        <CheckedPosition>

                            {formik.values.svalue.map((countryName: any, index) =>
                                <BackgroundChecked key={index}>
                                    <TextChecked>{countryName.value}</TextChecked>
                                </BackgroundChecked>
                            )}
                        </CheckedPosition>
                        {formik.touched.svalue && formik.errors.svalue ? (
                            <ErrorText>{formik.errors.svalue}</ErrorText>
                        ) : ""}
                    </InputHolder>
                    <InputHolder style={{ marginBottom: '4%' }}>
                        <Label>What would make you a fantastic mentor for students seeking to study abroad, especially in your
                            country and/or institution?</Label>
                        <div style={{ borderWidth: 1, borderColor: '#D6D6D6', marginTop: '1%' }}>
                            <OutlinedInput
                                style={{ textAlign: 'start' }}
                                fullWidth
                                multiline
                                autoComplete="off"
                                maxRows={5}
                                minRows={5}
                                value={formik.values.desc}
                                onChange={formik.handleChange('desc')}
                                placeholder={'Write minimum 300 words'}
                            />
                        </div>
                        {formik.touched.desc && formik.errors.desc ? (
                            <ErrorText>{formik.errors.desc}</ErrorText>
                        ) : ""}
                        {/* <MultilineInput value={MyMentor.desc} onChange={(e) => MyMentor.setDesc(e.target.value)} placeholder={'Write minimum 300 words'} /> */}
                    </InputHolder>
                    <Buttonsposition>
                        <RightLinkButton title='Cancel' onClick={() => ''} />
                        {load === true ?
                            <Loadercom /> :
                            <IconButton style={{ marginLeft: '2%' }} title='Submit' type={'submit'} onClick={() => ''} />
                        }
                    </Buttonsposition>
                </form>
            </ContainerD>
            <Toast />

        </Container >

    )
}

export default observer(MentorAppDetails);
