import React, { FC, useContext, useEffect, useState } from "react";
import { ColumnStudentForm, ContainerForm, ImageContainerpo, LabelProfile, LabelProfileb, PositionProfile, PositionProfileForm, RightBorder, RightContainer, TopText } from "./StudentProfileStyles";
import ButtonComp from "../Button";

import LineInput from "../LineInput";
import { Country, TestCountry } from "../../Data/Data";
import SearchDropdown from "../SearchDropdown";
import { InputHolder } from "../UserForm/UserFormStyles";
import useMediaQuery from "../../hooks/MediaQuery";
import { GetUserData, PassportDetailsapi } from "../../api";
import SkeletonProfile from "../SkeletonLoader/SkeletonProfile";
import { notifyError, notifySuccess } from "../Toastifycom";
import { Context } from "../../Context/ContextStates";
import { Autocomplete, TextField } from "@mui/material";
import TextInput from "./InputProfile";

const customStyles = {
    // Style for the input field
    input: {
      borderRadius: '15px', // Customize the border radius for the input
    },
    // Style for the dropdown list
    listbox: {
      borderRadius: '15px', // Customize the border radius for the list
    },
  };
const Passportinfo: FC = () => {

    const [value, setValue] = useState('')
    const isMobile = useMediaQuery('(min-width: 950px)');
    const [loading, setLoading] = useState(false)
    const [passportnum, setPassportnum] = useState('')
    const [issuedate, setIssuedate] = useState('')
    const [expiry, setExpiry] = useState('')
    const [refresh, setRefresh] = useState(false)
    const { countryList, setCountryList } = useContext(Context)
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    console.log(selectedCountry, "selectedCountry")
    const handleCountryChange = (selectedCountry: any) => {
        setSelectedCountry(selectedCountry.name); // Store the selected country in state
    };

    const [json, setJson] = useState({
        "passport_number": "",
        "issue_date": "",
        "expiry_date": "",
        "countryofissue": "",
    })
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoading(true);

        GetUserData()
            .then((e) => {
                setPassportnum(e.passportDetails.passport_number)
                setIssuedate(e.passportDetails.issue_date.split('T')[0])
                setExpiry(e.passportDetails.expiry_date.split('T')[0])
                setSelectedCountry(e.passportDetails.countryofissue)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, [refresh]);




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
        setPassportnum(formattedValue);
    };
    const handleSubmit = () => {
        json.passport_number = passportnum
        json.issue_date = issuedate
        json.expiry_date = expiry
        json.countryofissue = selectedCountry
        setLoad(true);
        PassportDetailsapi(json).then((e) => {
            if (e.success === true) {
                setLoad(false)
                notifySuccess(e.message)
                setTimeout(() => {
                    setRefresh(!refresh)
                }, 2000)

            }
            else {
                setLoad(false)
                notifyError(e.message)

            }
        })
    }

    return (
        <RightBorder>
            <TopText>Passport Details</TopText>

            <ContainerForm>
                {loading === true ?
                    <SkeletonProfile />
                    :
                    <div>
                        <div style={{ marginTop: '2%' }}>
                            <LabelProfile>Passport Number</LabelProfile>
                            <TextInput  value={passportnum} onChange={handleChange} placeholder='' id={'1'} width={'100%'} type={'text'} />

                        </div>
                        <InputHolder>
                            <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>
                                <div style={{ width: isMobile ? '40%' : '100%' }}>
                                    <LabelProfileb>Issue Date</LabelProfileb>
                                    <TextInput  value={issuedate} onChange={(e) => setIssuedate(e.target.value)} placeholder='DD MM YYYY' id={'1'} width={'100%'} type={'date'} />
                                </div>
                                <div style={{ width: isMobile ? '40%' : '100%' }}>
                                    <LabelProfileb>Expiry Date</LabelProfileb>
                                    <TextInput  value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder='DD MM YYYY' id={'1'} width={'100%'} type={'date'} />
                                </div>

                            </div>
                        </InputHolder>
                        <InputHolder>

                            <LabelProfile>Country of Issue</LabelProfile>
                            <Autocomplete
                                disablePortal
                                id="Country"
                                options={countryList || []}
                                value={{ name: selectedCountry }}
                                sx={{
                                    width: '100%',
                                    borderRadius: '1px',
                                    backgroundColor: '#fffff',
                                    marginTop: '1%',
                                    '& fieldset': {
                                        borderRadius: "15px", borderWidth: '1.5px',
                                        borderColor: '#D6D6D6',
                                        paddingTop:"18px",
                                        paddingBottom:"18px",
                                        marginTop:"-7px"
                                    }
                                }}
                                onChange={(event, selectedValue) => handleCountryChange(selectedValue)}
                                getOptionLabel={(country: any) => (country ? country.name : '')}
                                renderInput={(params) => <TextField {...params} label="" size="small" placeholder='Select' />}
                               
                            />
                        </InputHolder>

                        <ButtonComp load={load} style={{ marginTop: '4%', padding: '8px', marginBottom: '5%' }} fontSize={'12px'} width={isMobile ? '20%' : '60%'} title="Save Changes" onClick={() => handleSubmit()} />
                    </div>
                }
            </ContainerForm>

        </RightBorder>
    )
}
export default Passportinfo;