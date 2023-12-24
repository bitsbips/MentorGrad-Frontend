import { Autocomplete, Grid, TextField } from '@mui/material'
import React, { FC, useContext, useEffect, useState } from 'react'
import LineInput from '../LineInput'
import { Buttonsposition, ContainerD, Heading, InputHolder, Label } from './UserFormStyles'
import 'react-dropdown/style.css';
import DropdownCompo from '../Dropdown';
import {Level, Proficiency, Qualification } from '../../Data/Data';
import ChoosFile from '../ChooseFile';
import useMediaQuery from '../../hooks/MediaQuery';
import IconButton from '../IconButton';
import UserStates from '../../store/UserFormStates';
import { observer } from 'mobx-react-lite';
import RightLinkButton from '../RightIconButton';
import { Context } from '../../Context/ContextStates';
import PhoneInputComp from '../PhoneInput/PhoneNumberInput';
import { PersonalDetails, uploadprofilepic } from '../../api';
import { notifySuccess, notifyError } from '../../components/Toastifycom'
import { handleFileChange } from './UploadDocuments';
import TextInput from '../StudentProfileDetails/InputProfile';
import { useFormik } from 'formik'
import * as Yup from "yup";

interface State {
    id: any;
    name: any;
    cities: City[];
}

interface City {
    id: any;
    name: any;
}
const PersonalData: FC = () => {
    const { value, setValue } = useContext(Context)
    const { countryData, setCountryData } = useContext(Context)
    const { countryList, setCountryList } = useContext(Context)
    const { nationality, setNationality } = useContext(Context)
    const [photo, setPhoto] = useState(null)
    const isMobile = useMediaQuery('(min-width: 950px)');
    const [load, setLoad] = React.useState(false);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    console.log(selectedCountry,"selectedCountry11")
    const [selectedNationality, setSelectedNationality] = useState<string>("");
    const [selectedState, setSelectedState] = useState<State | null>(null);
    console.log(selectedState,"selectedCountry11")
    const [selectedCity, setSelectedCity] = useState<null>(null);
    console.log(selectedCity,"selectedCountry11")

    const [cob, setCob] = useState<string>("");
    const handleCountryBirth = (selectedCountry: any) => {
        setCob(selectedCountry.name); // Store the selected country in state
    };

    const handleCountryChange = (_: any, newValue: any) => {
        setSelectedCountry(newValue);
        setSelectedState(null);
        setSelectedCity(null);
    };

    const handleStateChange = (_: any, newValue: any) => {
        setSelectedState(newValue);
        setSelectedCity(null);
    };
    const handleNationalityChange = (selectedCountry: any) => {
        setSelectedNationality(selectedCountry); // Store the selected country in state
    };
   
    const [json, setJson] = useState({
        "current_country": "",
        "nationality":"",
        "address": "",
        "phone_no": "",
        "english_proficiency": "",
        "current_qualification": "",
        "birth_country": "",
        "DOB": ""
    })

    const clearFileInput = () => {
        // Clear the file input by resetting the state
        UserStates.setPhoto('');


    };

    const nextbutton = () => {
        setValue('1')

    }
    
    

    const handleSubmit = () => {
        json.address = UserStates.address
        json.current_country = selectedCountry;
        json.current_qualification = UserStates.qualification
        json.phone_no = UserStates.phone
        json.english_proficiency = UserStates.proficiency
        json.birth_country = cob
        json.DOB = UserStates.dob
        json.nationality=selectedNationality
        setLoad(true)

        if (photo) {
            const form = new FormData()
            form.append("profile", photo)
            uploadprofilepic(form).then(e => {
                console.log(e)
            })
        }
        PersonalDetails(json).then((e) => {
            console.log(e)
            if (e.success === true) {
                setLoad(false)
                notifySuccess(e.message)
                setTimeout(() => {
                    nextbutton()
                }, 2000)
            }
            else {
                setLoad(false)
                notifyError(e.message)

            }
        })
    }


    return (
        <>
            <Heading>Personal Data</Heading>
            <InputHolder>
                <Label>Country of  Current Residence</Label>
                <Autocomplete
                    disablePortal
                    id="Country"
                    options={countryData || []}
                    value={selectedCountry}
                    sx={{
                        width: '100%',
                        borderRadius: 5,
                        backgroundColor: '#fffff',
                        marginTop: '1%',
                        '& fieldset': {
                            borderRadius: 2, borderWidth: '1.5px',
                            borderColor: '#D6D6D6',

                        }
                    }}
                    onChange={handleCountryChange}
                    getOptionLabel={(country: any) => (country ? country.name : '')}
                    renderInput={(params) => <TextField {...params} label="" size="small" placeholder='Select'/>}
                />
            </InputHolder>
            <InputHolder>
                <Label>Nationality</Label>
                <Autocomplete
                    disablePortal
                    id="Country"
                    options={nationality || []}
                    value={selectedNationality}
                    sx={{
                        width: '100%',
                        borderRadius: 5,
                        backgroundColor: '#fffff',
                        marginTop: '1%',
                        '& fieldset': {
                            borderRadius: 2, borderWidth: '1.5px',
                            borderColor: '#D6D6D6',

                        }
                    }}
                    onChange={(event, selectedValue) => handleNationalityChange(selectedValue)}
                    getOptionLabel={(country: any) => (country ? country : '')}
                    renderInput={(params) => <TextField {...params} label="" size="small" placeholder='Select' />}
                />
            </InputHolder>
            <InputHolder>
                <Label>Phone Number</Label>
                <PhoneInputComp value={UserStates.phone} onChange={(newValue: any) => { UserStates.setPhone(newValue); }} />
            </InputHolder>
            <InputHolder>
                <div style={isMobile  ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } :{ display: 'flex', flexDirection:'column' }}>
                    <div style={{ width: isMobile  ? '30%' :'100%'}}>
                        <Label>State</Label>
                        <Autocomplete
                            disablePortal
                            id="state"
                            options={(selectedCountry as any)?.states || []}
                            value={selectedState}
                            onChange={handleStateChange}
                            sx={{
                                width: '100%',
                                borderRadius: 5,
                                backgroundColor: '#fffff',
                                marginTop: '1%',
                                '& fieldset': {
                                    borderRadius: 2, borderWidth: '1.5px',
                                    borderColor: '#D6D6D6',
                                }
                            }}
                            getOptionLabel={(state: any) => (state ? state.name : '')}
                            renderInput={(params) => (
                                <TextField {...params} label="" disabled={!selectedCountry} size="small"
                                placeholder='Select'
                                />
                            )}
                        />
                    </div>
                    <div style={{ width: isMobile  ? '30%' :'100%',marginTop:isMobile ? '' :'3%' }}>
                        <Label>City</Label>
                        <Autocomplete
                            id="city"
                            options={selectedState ? selectedState.cities : []}
                            value={selectedCity}
                            sx={{
                                width: '100%',
                                borderRadius: 5,
                                backgroundColor: '#fffff',
                                marginTop: '1%',
                                '& fieldset': {
                                    borderRadius: 2, borderWidth: '1.5px',
                                    borderColor: '#D6D6D6',
                                }
                            }}
                            onChange={(_, newValue: any) => setSelectedCity(newValue)}
                            getOptionLabel={(city) => (city ? city.name : '')}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label=""
                                    disabled={!selectedCountry || !selectedState}
                                    size="small"
                                    placeholder='Select'
                                />
                            )}
                        />
                    </div>
                    <div style={{ width: isMobile  ? '30%' :'100%',marginTop:isMobile ? '' :'3%' }}>
                        <Label>Zip Code</Label>
                        <TextInput  width={'100%'} placeholder='3873' value={UserStates.zipcode} onChange={(e) => UserStates.setZipCode(e.target.value)} />

                    </div>

                </div>
            </InputHolder>

            <InputHolder>
                <Label>Street 1</Label>
                <TextInput  value={UserStates.address} onChange={(e) => UserStates.setAddress(e.target.value)} placeholder='2036 Mulberry Avenue, pittsburg'  width={'100%'} type={'text'} />
            </InputHolder>
            <InputHolder>
                <Label>Street 2</Label>
                <TextInput  value={UserStates.address1} onChange={(e) => UserStates.setAddress1(e.target.value)} placeholder='United States'  width={'100%'} type={'text'} />
            </InputHolder>
            <InputHolder>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '40%' }}>
                        <Label>Date of Birth</Label>
                        <TextInput  value={UserStates.dob} onChange={(e) => UserStates.setDob(e.target.value)} placeholder='DD MM YYYY'  width={'100%'} type={'date'} />
                    </div>
                    <div style={{ width: '40%' }}>
                        <Label>Country of Birth</Label>
                        <Autocomplete
                    disablePortal
                    id="Country"
                    options={countryList || []}
                    value={{ name: cob }}
                    sx={{
                        width: '100%',
                        borderRadius: 10,
                        backgroundColor: '#fffff',
                        marginTop: '1%',
                        '& fieldset': {
                            borderRadius: 2, borderWidth: '1.5px',
                            borderColor: '#D6D6D6',

                        }
                    }}
                    onChange={(event, selectedValue) => handleCountryBirth(selectedValue)}
                    getOptionLabel={(country: any) => (country ? country.name : '')}
                    renderInput={(params) => <TextField {...params} label="" size="small" placeholder='Select' />}
                />
                    </div>

                </div>
            </InputHolder>
            <InputHolder>
                <Label>Current Qualification</Label>

                <DropdownCompo padding={isMobile? '1.5%' : '3%'} value={UserStates.qualification} width={'100%'} id={'1'} onChange={(e) => UserStates.setQualification(e.target.value)} data={Level} />
            </InputHolder>
            <InputHolder>
                <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>
                    <div style={isMobile ? { width: '45%' } : {}}>
                        <Label>English Proficiency</Label>

                        <DropdownCompo padding={isMobile? '3.5%' : '3%'} value={UserStates.proficiency} width={'100%'} id={'1'} onChange={(e) => UserStates.setProficiency(e.target.value)} data={Proficiency} />
                    </div>
                    <div style={isMobile ? { width: '45%' } : {marginTop:'3%'}}>
                        <Label>Profile Photo</Label>
                        <ChoosFile padding={'2%'} accept="image/*" onChange={(e) => setPhoto(handleFileChange(e))} id={'1'} width={'100%'} inputmode={'file'} />

                    </div>
                    {/* accept={".png, .jpg, .jpeg"} */}

                </div>
            </InputHolder>
            <Buttonsposition>
                <RightLinkButton title='Cancel' onClick={() => ''} />
                {/* {load === true &&<Loadercom />} */}
                <IconButton load={load} style={{ marginLeft: '2%' }} title='Next' onClick={() => handleSubmit()} />

            </Buttonsposition>




        </>
    )
}

export default observer(PersonalData)
