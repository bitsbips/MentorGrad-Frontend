import React, { FC, useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Autocomplete, Grid, TextField } from '@mui/material';
import PhoneInputComp from '../PhoneInput/PhoneNumberInput';
import { PersonalDetails, uploadprofilepic } from '../../api';
import { notifySuccess, notifyError } from '../../components/Toastifycom';
import RightLinkButton from '../RightIconButton';
import IconButton from '../IconButton';
import { Context } from '../../Context/ContextStates';
import DropdownCompo from '../Dropdown';
import { Level, Proficiency, Qualification } from '../../Data/Data';
import TextInput from '../StudentProfileDetails/InputProfile';
import { Buttonsposition, ContainerD, ErrorCol, Heading, InputHolder, Label, Labelb } from './UserFormStyles';
import { observer } from 'mobx-react-lite';
import { ErrorText } from '../../pages/AuthFlow/AuthStyles';
import useMediaQuery from '../../hooks/MediaQuery';
import UserStates from '../../store/UserFormStates';
import ChoosFile from '../ChooseFile';
import { handleFileChange } from './UploadDocuments';

interface State {
    id: any;
    name: any;
    cities: City[];
}

interface City {
    id: any;
    name: any;
}

const FomikpersonalCompo: FC = () => {
    const isMobile = useMediaQuery('(min-width: 950px)');

    const { value, setValue } = useContext(Context);
    const { countryData, setCountryData } = useContext(Context);
    const { nationality, setNationality } = useContext(Context);
    const { countryList, setCountryList } = useContext(Context)
    const [photo, setPhoto] = useState(null);
    const [load, setLoad] = React.useState(false);

    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [selectedNationality, setSelectedNationality] = useState<string>("");
    const [selectedState, setSelectedState] = useState<State | null>(null);
    const [selectedCity, setSelectedCity] = useState<null>(null);
    const [cob, setCob] = useState<string>("");
    const handleCountryBirth = (selectedCountry: any) => {
        setCob(selectedCountry.name); // Store the selected country in state
    };
    const nextbutton = () => {
        setValue('1')

    }
    const handleSubmit = () => {
        const json = {
            current_country: selectedCountry,
            phone_no: formik.values.phone,
            nationality: selectedNationality,
            address: formik.values.address,
            DOB: formik.values.dob,
            birth_country: cob,
            current_qualification: formik.values.qualification,
            english_proficiency: formik.values.english
        };

        if (photo) {
            const form = new FormData();
            form.append("profile", photo);
            uploadprofilepic(form).then((e) => {
                console.log(e);
            });
        }

        PersonalDetails(json).then((e) => {
            if (e.success === true) {
                notifySuccess(e.message);
                setTimeout(() => {
                    nextbutton()
                }, 2000)
            } else {
                notifyError(e.message);
            }
        });
    };

    const formik = useFormik({
        initialValues: {
            selectedCountry: "",
            selectedNationality: "",
            phone: "",
            state: "",
            city: "",
            address: "",
            dob: "",
            cob: "",
            qualification: "",
            english: "",
            zipcode:""

        },
        validationSchema: Yup.object({
            selectedCountry: Yup.string().required("Country of Current Residence is required"),
            selectedNationality: Yup.string().required("Nationality is required"),
            phone: Yup.string().required("Phone Number is required"),
            state: Yup.string().required("State is required"),
            city: Yup.string().required("City is required"),
            address: Yup.string().required("Street 1 is required"),
            dob: Yup.string().required("Date of Birth is required"),
            cob: Yup.string().required("Country of Birth is required"),
            qualification: Yup.string().required("Qualification is required"),
            english: Yup.string().required("English Proficiency is required"),
            zipcode: Yup.string().max(5).min(5).required("ZipCode is required")




        }),
        onSubmit: handleSubmit,
    });

    const handleCountryChange = (_: any, newValue: any) => {
        setSelectedCountry(newValue);
        setSelectedState(null);
        setSelectedCity(null);
    };

    const handleNationalityChange = (selectedCountry: any) => {
        setSelectedNationality(selectedCountry);
    };
    const handleStateChange = (_: any, newValue: any) => {
        setSelectedState(newValue);
        setSelectedCity(null);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Heading>Personal Data</Heading>
            <InputHolder>
                <Label>Country of Current Residence</Label>
                <Autocomplete
                    disablePortal
                    id="Country"
                    options={countryData || []}
                    value={selectedCountry}
                    onChange={(_, newValue: any) => {
                        const countryName = newValue.name; // Extract the country name from the newValue object
                        handleCountryChange(_, newValue);
                        formik.setFieldValue('selectedCountry', countryName); // Set the country name as the selectedCountry value
                    }}
                    // onChange={handleCountryChange}
                    onBlur={() => formik.setFieldTouched('selectedCountry')}
                    sx={{
                        width: '100%',
                        borderRadius: 5,
                        marginTop: '1%',
                        '& fieldset': {
                            borderRadius: 1.5, borderWidth: '1.5px',
                            borderColor: '#D6D6D6',
                        }
                    }}
                    getOptionLabel={(country: any) => (country ? country.name : '')}
                    renderInput={(params) => (
                        <TextField {...params} label="" size="small" placeholder='Select' />
                    )}
                />
                {formik.touched.selectedCountry && formik.errors.selectedCountry ? (
                    <ErrorText>{formik.errors.selectedCountry}</ErrorText>
                ) : ""}

            </InputHolder>
            <InputHolder>
                <Label>Nationality</Label>
                <Autocomplete
                    disablePortal
                    id="selectedNationality"
                    options={nationality || []}
                    value={selectedNationality}
                    onBlur={formik.handleBlur}
                    onChange={(_, newValue: any) => {
                        handleNationalityChange(newValue);
                        formik.setFieldValue('selectedNationality', newValue); // Set the country name as the selectedCountry value
                    }}
                    sx={{
                        width: '100%',
                        borderRadius: 5,
                        marginTop: '1%',
                        '& fieldset': {
                            borderRadius: 1.5, borderWidth: '1.5px',
                            borderColor: '#D6D6D6',
                        }
                    }}
                    getOptionLabel={(country: any) => (country ? country : '')}
                    renderInput={(params) => (
                        <TextField {...params} label="" size="small" placeholder='Select' />
                    )}
                />
                {formik.touched.selectedNationality && formik.errors.selectedNationality ? (
                    <ErrorText>{formik.errors.selectedNationality}</ErrorText>
                ) : ""}
            </InputHolder>
            <InputHolder>
                <Label>Phone Number</Label>
                <PhoneInputComp
                    value={formik.values.phone}
                    onChange={(newValue: any) => formik.setFieldValue('phone', newValue)}
                    onBlur={formik.handleBlur}
                    name="phone"
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <ErrorText>{formik.errors.phone}</ErrorText>
                ) : ""}
            </InputHolder>
            {/* Rest of your form fields... */}
            <InputHolder>
                <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : { display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: isMobile ? '30%' : '100%' }}>
                        <Labelb>State</Labelb>

                        <Autocomplete
                            disablePortal
                            id="state"
                            options={(selectedCountry as any)?.states || []}
                            value={selectedState}
                            onBlur={formik.handleBlur}
                            onChange={(_, newValue: any) => {
                                const StateName = newValue.name; // Extract the country name from the newValue object
                                handleStateChange(_, newValue);
                                formik.setFieldValue('state', StateName); // Set the country name as the selectedCountry value
                            }}
                            sx={{
                                width: '100%',
                                borderRadius: 5,
                                marginTop: '1%',
                                '& fieldset': {
                                    borderRadius: 1.5, borderWidth: '1.5px',
                                    borderColor: '#D6D6D6',
                                    padding:isMobile ? '6%' :'2%'

                                }
                            }}
                            getOptionLabel={(state: any) => (state ? state.name : '')}
                            renderInput={(params) => (
                                <TextField {...params} label="" disabled={!selectedCountry} size="small"
                                    placeholder='Select'
                                />
                            )}
                        />
                        {formik.touched.state && formik.errors.state ? (
                            <ErrorText>{formik.errors.state}</ErrorText>
                        ) : ""}
                    </div>

                    <div style={{ width: isMobile ? '30%' : '100%', marginTop: isMobile ? '' : '3%' }}>
                        <Labelb>City</Labelb>

                        <Autocomplete
                            id="city"
                            options={selectedState ? selectedState.cities : []}
                            value={selectedCity}
                            onBlur={formik.handleBlur}
                            sx={{
                                width: '100%',
                                borderRadius: 5,
                                marginTop: '1%',
                                '& fieldset': {
                                    borderRadius: 1.5, borderWidth: '1.5px',
                                    borderColor: '#D6D6D6',
                                    padding:isMobile ? '6%' :'2%'
                                }
                            }}
                            onChange={(_, newValue: any) => {
                                const CityName = newValue.name; // Extract the country name from the newValue object
                                setSelectedCity(newValue);
                                formik.setFieldValue('city', CityName); // Set the country name as the selectedCountry value
                            }}
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
                        {formik.touched.city && formik.errors.city ? (
                            <ErrorText>{formik.errors.city}</ErrorText>
                        ) : ""}
                    </div>

                    <div style={{ width: isMobile ? '30%' : '100%', marginTop: isMobile ? '' : '3%' }}>
                        <Labelb>Zip Code</Labelb>

                        <TextInput width={'100%'} id={'zipcode'}  placeholder='3873' value={formik.values.zipcode} onChange={formik.handleChange} type={'number'} maxLength={5}/>
                        {formik.touched.zipcode && formik.errors.zipcode ? (
                    <ErrorText>{formik.errors.zipcode}</ErrorText>
                ) : ""}
                    </div>

                </div>
            </InputHolder>
            <InputHolder>
                <Label>Street 1</Label>

                <TextInput id={'address'} value={formik.values.address} onChange={formik.handleChange} placeholder='2036 Mulberry Avenue, pittsburg' width={'100%'} type={'text'} />
            </InputHolder>
            {formik.touched.address && formik.errors.address ? (
                <ErrorText>{formik.errors.address}</ErrorText>
            ) : ""}
            <InputHolder>
                <Label>Street 2</Label>
                <TextInput width={'100%'}  placeholder='USA' value={UserStates.address1} onChange={(e) => UserStates.setAddress1(e.target.value)} />
            </InputHolder>
            <InputHolder>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%' }}>
                        <Labelb>Date of Birth</Labelb>
                        <TextInput id={'dob'}  value={formik.values.dob} onChange={formik.handleChange} placeholder='DD MM YYYY' width={'100%'} type={'date'} />
                        {formik.touched.dob && formik.errors.dob ? (
                            <ErrorText>{formik.errors.dob}</ErrorText>
                        ) : ""}
                    </div>

                    <div style={{ width: '45%' }}>
                        <Labelb>Country of Birth</Labelb>
                        <Autocomplete
                            disablePortal
                            id="cob"
                            options={countryList || []}
                            value={{ name: cob }}
                            onBlur={formik.handleBlur}
                            sx={{
                                width: '100%',
                                borderRadius: 5,
                                '& fieldset': {
                                    borderRadius: 1.5, borderWidth: '1.5px',
                                    borderColor: '#D6D6D6',
                                    padding:'4.2%'

                                }
                            }}
                            onChange={(_, newValue: any) => {
                                const countryName = newValue.name; // Extract the country name from the newValue object
                                handleCountryBirth(newValue);
                                formik.setFieldValue('cob', countryName); // Set the country name as the selectedCountry value
                            }}
                            getOptionLabel={(country: any) => (country ? country.name : '')}
                            renderInput={(params) => <TextField {...params} label="" size="small" placeholder='Select'/>}
                        />
                        {formik.touched.cob && formik.errors.cob ? (
                            <ErrorText>{formik.errors.cob}</ErrorText>
                        ) : ""}
                    </div>

                </div>
            </InputHolder>
            <InputHolder>
                <Label>Current Qualification</Label>

                <DropdownCompo name='qualification' padding={isMobile ? '0.3%' : '1%'} value={formik.values.qualification} width={'100%'} id={'qualification'} onChange={formik.handleChange} data={Level} />
            </InputHolder>
            {formik.touched.qualification && formik.errors.qualification ? (
                <ErrorText>{formik.errors.qualification}</ErrorText>
            ) : ""}
            <InputHolder>
                <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>
                    <div style={isMobile ? { width: '45%' } : {}}>
                        <Labelb>English Proficiency</Labelb>

                        <DropdownCompo name='english' padding={isMobile ? '0.5%' : '1%'} value={formik.values.english} width={'100%'} id={'english'} onChange={formik.handleChange} data={Proficiency} />

                        {formik.touched.english && formik.errors.english ? (
                            <ErrorText>{formik.errors.english}</ErrorText>
                        ) : ""}
                    </div>
                    <div style={isMobile ? { width: '45%' } : { marginTop: '3%' }}>
                        <Labelb>Profile Photo</Labelb>
                        <ChoosFile padding={'2.5%'} accept="image/*" onChange={(e) => setPhoto(handleFileChange(e))} id={'1'} width={'100%'} inputmode={'file'} />

                    </div>
                    {/* accept={".png, .jpg, .jpeg"} */}

                </div>
            </InputHolder>
            <Buttonsposition>
                <RightLinkButton title="Cancel" onClick={() => ''} />
                <IconButton load={load} style={{ marginLeft: '2%' }} onClick={() => ''} title="Next" type="submit" />
            </Buttonsposition>
        </form>
    );
};

export default observer(FomikpersonalCompo);
