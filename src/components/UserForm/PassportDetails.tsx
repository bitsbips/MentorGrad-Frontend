import { Autocomplete, Grid, TextField, Typography } from '@mui/material'
import React, { FC, useContext, useState } from 'react'
import LineInput from '../LineInput'
import { Buttonsposition, ContainerD, Heading, InputHolder, Label, Labelb } from './UserFormStyles'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DropdownCompo from '../Dropdown';
import { Country, Proficiency, Qualification, TestCountry } from '../../Data/Data';
import ChoosFile from '../ChooseFile';
import useMediaQuery from '../../hooks/MediaQuery';
import LinkButton from '../LinkButton';
import IconButton from '../IconButton';
import UserStates from '../../store/UserFormStates';
import { observer } from 'mobx-react-lite';
import SearchDropdown from '../SearchDropdown';
import { Context } from '../../Context/ContextStates';
import { PassportDetailsapi } from '../../api';
import { notifySuccess, notifyError } from '../../components/Toastifycom'
import Loadercom from '../Loadercom';
import TextInput from '../StudentProfileDetails/InputProfile';
const PassportDetails: FC = () => {
    const { value, setValue } = useContext(Context)
    const { countryList, setCountryList } = useContext(Context)
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    console.log(selectedCountry, "selectedCountry")
    const handleCountryChange = (selectedCountry: any) => {
        setSelectedCountry(selectedCountry.name); // Store the selected country in state
    };
    const [load, setLoad] = useState(false)

    const isMobile = useMediaQuery('(min-width: 950px)');
    const [json, setJson] = useState({
        "passport_number": "",
        "issue_date": "",
        "expiry_date": "",
        "countryofissue": "",
    })


    const handleChange = (e: any) => {
        const inputValue = e.target.value;

        // Remove all non-numeric characters
        const numericValue = inputValue.replace(/\D/g, '');

        // Apply the desired formatting with dashes
        let formattedValue = '';
        if (numericValue.length > 0) {
            formattedValue += numericValue.slice(0, 3);
        }
        if (numericValue.length > 3) {
            formattedValue += '-' + numericValue.slice(3, 7);
        }
        if (numericValue.length > 7) {
            formattedValue += '-' + numericValue.slice(7, 11);
        }

        // Update the state with the formatted value
        UserStates.setPassport(formattedValue);
    };
    const handleSubmit = () => {
        json.passport_number = UserStates.passport
        json.issue_date = UserStates.issue
        json.expiry_date = UserStates.expiry
        json.countryofissue = selectedCountry
        setLoad(true);
        PassportDetailsapi(json).then((e) => {
            if (e.success === true) {
                setLoad(false)
                notifySuccess(e.message)
                setTimeout(() => {

                    setValue('2')
                }, 2000)

            }
            else {
                setLoad(false)
                notifyError(e.message)

            }
        })
    }

    return (
        <ContainerD>
            <Heading>Copy of Your Passport Details</Heading>

            <InputHolder>
                <Label>Passport Number (Optional)</Label>
                <TextInput  value={UserStates.passport} onChange={handleChange} placeholder='(---) --- ----'  width={'100%'} type={'text'} />
            </InputHolder>
            <InputHolder>
                <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>
                    <div style={{ width: isMobile ? '40%' : '100%' }}>
                        <Labelb>Issue Date</Labelb>
                        <TextInput  value={UserStates.issue} onChange={(e) => UserStates.setIssue(e.target.value)} placeholder='DD MM YYYY'  width={'100%'} type={'date'} />
                    </div>
                    <div style={{ width: isMobile ? '40%' : '100%' }}>
                        <Labelb>Expiry Date</Labelb>
                        <TextInput  value={UserStates.expiry} onChange={(e) => UserStates.setExpiry(e.target.value)} placeholder='DD MM YYYY'  width={'100%'} type={'date'} />
                    </div>

                </div>
            </InputHolder>

            <InputHolder>
                <Label>Country of Issue</Label>
                <Autocomplete
                    disablePortal
                    id="Country"
                    options={countryList || []}
                    value={{ name: selectedCountry }}
                    sx={{
                        width: '100%',
                        borderRadius:2,
                        backgroundColor: '#fffff',
                        marginTop: '1%',
                        fontSize:12,

                        '& fieldset': {
                            borderRadius: 1.5, borderWidth: '1.5px',
                            borderColor: '#D6D6D6',

                        }
                    }}
                    onChange={(event, selectedValue) => handleCountryChange(selectedValue)}
                    getOptionLabel={(country: any) => (country ? country.name : '')}
                    renderInput={(params) => <TextField {...params} label="" size="small" placeholder='Select' />}
                />
            </InputHolder>
            <Buttonsposition>
                <LinkButton title='Back' onClick={() => setValue('0')} />
                <IconButton load={load} style={{ marginLeft: '2%' }} title='Next' onClick={() => handleSubmit()} />

            </Buttonsposition>

        </ContainerD>
    )
}

export default observer(PassportDetails)
