import { Grid, TextField, Typography } from '@mui/material'
import React, { FC, useContext, useState } from 'react'
import LineInput from '../LineInput'
import { BackgroundChecked, Buttonsposition, CheckedPosition, ContainerD, Heading, InputHolder, Label, LabelWhite, Labelb, TextChecked } from './UserFormStyles'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DropdownCompo from '../Dropdown';
import { Area, Budget, Country, Country1, Level, Months, Proficiency, Qualification, Year, options } from '../../Data/Data';
import ChoosFile from '../ChooseFile';
import useMediaQuery from '../../hooks/MediaQuery';
import MultiDropComp from '../MultiDrop/MultiDropComp';
import LinkButton from '../LinkButton';
import IconButton from '../IconButton';
import UserStates from '../../store/UserFormStates';
import { observer } from 'mobx-react-lite';
import RangeSlider from '../RangeSlider';
import RangeInput from '../RangeSlider';
import { Context } from '../../Context/ContextStates';
import { ProgramPrefernceapi } from '../../api';
import { notifySuccess, notifyError } from '../../components/Toastifycom'
import Loadercom from '../Loadercom';
import { MultiSelect } from "react-multi-select-component";
import '../../components/MultiDrop/MultiDrop.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from '../../pages/AuthFlow/AuthStyles';
import '../../components/MultiDrop/MultiDrop.css'

interface Country {
    name: string;
}
interface Option {
    value: string;
    label: string;
}
const ProgramPref: FC = () => {
    const { value, setValue } = useContext(Context)
    const [load, setLoad] = useState(false)

    const isMobile = useMediaQuery('(min-width: 950px)');
    const [svalue, setSvalue] = useState<Option[]>([]);
    const [area, setArea] = useState([])
    const [insitutude, setInsititude] = useState([])
    const { priceRangeValue, setPriceRangeValue } = useContext(Context)
    const { countryList, setCountryList } = useContext(Context)
    console.log(countryList, "country")
    const handleSelectChange = (selectedOptions: Option[]) => {
        setSvalue(selectedOptions);
    };
    const optionscountry: Option[] = countryList.map((country: Country) => ({
        value: country.name,
        label: country.name,
    }));

    const [json, setJson] = useState({
        "levelofstudy": "",
        "subject_area": [{}],
        "desired_countries": [{}],
        "desired_institutions": [{}],
        "startdate": "",
        "budget_range": [{}],
        "month": ""

    })
    const handleSubmit = () => {
        json.levelofstudy = formik.values.level
        json.subject_area = formik.values.area
        json.budget_range = priceRangeValue
        json.month = formik.values.month
        json.desired_countries = formik.values.svalue
        json.desired_institutions = formik.values.insitutude
        json.startdate = formik.values.year
        setLoad(true);
        ProgramPrefernceapi(json).then((e) => {
            if (e.success === true) {
                setLoad(false)
                notifySuccess(e.message)
                setTimeout(() => {

                    setValue('3')
                }, 2000)
            }
            else {
                setLoad(false)


                notifyError(e.message)

            }
        })


    }
    const validationSchema = Yup.object().shape({
        level: Yup.string().required('Level of study is required'),
        area: Yup.array().min(1, 'At least one subject area is required'),
        svalue: Yup.array().min(1, 'At least one desired country is required'),
        insitutude: Yup.array().min(1, 'At least one desired institution is required'),
        month: Yup.string().required('Month is Required'),
        year: Yup.string().required('Year is Required'),
    });
    const formik = useFormik({
        initialValues: {
            level: '',
            area: [],
            svalue: [],
            insitutude: [],
            month: '',
            year: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });


    return (
        <form onSubmit={formik.handleSubmit}>

            <ContainerD>
                <Heading>Program Preferences</Heading>
                <InputHolder>
                    <Label>Level of Study</Label>

                    <DropdownCompo name='level' padding={isMobile ?'0.2%' :'1%'} placeholder={'Select'} value={formik.values.level} width={'100%'} id={'level'} onChange={formik.handleChange} data={Level} />
                </InputHolder>
                {formik.touched.level && formik.errors.level ? (
                    <ErrorText>{formik.errors.level}</ErrorText>
                ) : ""}

                <InputHolder>
                    <Label>Subject Area</Label>
                    <div style={{ width: '100%' }} className="multi-drop-container">
                        <MultiSelect
                            options={Area}
                            value={formik.values.area}
                            className="dark"
                            overrideStrings={{ "selectSomeItems": 'Subject Area' }} // <- to override strings
                            onChange={(selectedOptions: any) => {
                                formik.setFieldValue('area', selectedOptions); // Update formik field directly
                            }}
                            labelledBy=""                            

                        />
                    </div>
                    <CheckedPosition>

                        {formik.values.area.map((countryName: any, index) =>
                            <BackgroundChecked key={index}>
                                <TextChecked>{countryName.value}</TextChecked>
                            </BackgroundChecked>
                        )}
                    </CheckedPosition>
                </InputHolder>
                {formik.touched.area && formik.errors.area ? (
                    <ErrorText>{formik.errors.area}</ErrorText>
                ) : ""}


                <InputHolder>

                    <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>

                        <div style={{ width: isMobile ? '45%' : '100%' }}>
                            <Labelb>Desired Countries</Labelb>
                            <div style={{ width: '100%' }} className="multi-drop-container">
                                <MultiSelect

                                    options={optionscountry}
                                    className="dark"
                                    value={formik.values.svalue}
                                    onChange={(selectedOptions: any) => {
                                        formik.setFieldValue('svalue', selectedOptions); // Update formik field directly
                                    }}
                                    overrideStrings={{ "selectSomeItems": 'Country' }} // <- to override strings

                                    labelledBy="ndwndiw"
                                />
                            </div>
                            <CheckedPosition>

                                {formik.values.svalue.map((option: Option, index: number) => (
                                    <BackgroundChecked key={index}>
                                        <TextChecked>{option.label}</TextChecked>
                                    </BackgroundChecked>
                                ))}
                            </CheckedPosition>
                            {formik.touched.svalue && formik.errors.svalue ? (
                                <ErrorText>{formik.errors.svalue}</ErrorText>
                            ) : ""}

                        </div>
                        <div style={{ width: isMobile ? '45%' : '100%' }}>
                            <Labelb>Desired Institutions</Labelb>
                            <MultiDropComp label={'Institution'} value={formik.values.insitutude}
                                onChange={(selectedOptions: any) => {
                                    formik.setFieldValue('insitutude', selectedOptions); // Update formik field directly
                                }} width={'100%'} id={'1'} data={options} />
                            <CheckedPosition>

                                {formik.values.insitutude.map((o: any) =>
                                    <BackgroundChecked>
                                        <TextChecked>{o.value}</TextChecked>
                                    </BackgroundChecked>
                                )}
                            </CheckedPosition>
                            {formik.touched.insitutude && formik.errors.insitutude ? (
                                <ErrorText>{formik.errors.insitutude}</ErrorText>
                            ) : ""}
                        </div>
                    </div>
                </InputHolder>



                <InputHolder>

                    <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>
                        <div style={{ display: 'flex', flexDirection: 'column',width:isMobile ?'45%' :'100%' }}>
                            <div>
                                <Labelb>Expected Date of Start</Labelb>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', width:'100%',justifyContent:  'space-between'}}>
                                    <DropdownCompo name='month'  padding={isMobile ?'0.5%' :'1%'} placeholder={''} value={formik.values.month} width={'45%'} id={'month'} onChange={formik.handleChange} data={Months} />
                                    {formik.touched.month && formik.errors.month ? (
                                        <ErrorText>{formik.errors.month}</ErrorText>
                                    ) : ""}
                                    <DropdownCompo name='year' padding={isMobile ? '0.5%' : '1%'} placeholder={''} value={formik.values.year}  width={'45%'} id={'year'} onChange={formik.handleChange} data={Year} />
                                    {formik.touched.year && formik.errors.year ? (
                                        <ErrorText>{formik.errors.year}</ErrorText>
                                    ) : ""}
                                   
                            </div>
                        </div>

                        <div style={{ width: isMobile ? '45%' : '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Labelb>Budget Range</Labelb>
                                <RangeInput />
                            </div>
                        </div>


                    </div>
                </InputHolder>
                <Buttonsposition>
                    <LinkButton title='Back' onClick={() => setValue('1')} />
                    <IconButton load={load} style={{ marginLeft: '2%' }} title='Next' onClick={() => ''}

                    />

                </Buttonsposition>



            </ContainerD>
        </form>
    )
}

export default observer(ProgramPref)
