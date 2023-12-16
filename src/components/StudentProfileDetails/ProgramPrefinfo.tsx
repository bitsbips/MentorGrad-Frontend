import React, { FC, useContext, useEffect, useState } from "react";
import { ColumnStudentForm, ContainerForm, ImageContainerpo, LabelProfile, PositionProfile, PositionProfileForm, RightBorder, RightContainer, TopText } from "./StudentProfileStyles";
import ButtonComp from "../Button";

import LineInput from "../LineInput";
import { Area, Level, TestCountry, options } from "../../Data/Data";
import SearchDropdown from "../SearchDropdown";
import { BackgroundChecked, CheckedPosition, InputHolder, TextChecked } from "../UserForm/UserFormStyles";
import useMediaQuery from "../../hooks/MediaQuery";
import DropdownCompo from "../Dropdown";
import MultiDropComp from "../MultiDrop/MultiDropComp";
import { GetUserData, ProgramPrefernceapi } from "../../api";
import SkeletonProfile from "../SkeletonLoader/SkeletonProfile";
import { notifyError, notifySuccess } from "../Toastifycom";
import { MultiSelect } from "react-multi-select-component";
import '../../components/MultiDrop/MultiDrop.css'
import { Context } from "../../Context/ContextStates";
interface Option {
    value: string;
    label: string;
}
interface Country {
    name: string;
}

const ProgramPref: FC = () => {
    const [value, setValue] = useState('')
    const isMobile = useMediaQuery('(min-width: 950px)');
    const { countryList, setCountryList } = useContext(Context)

    const [levelstudy, setLevel] = useState('')
    const [loading, setLoading] = useState(false)
    const [country, setCountry] = useState<Option[]>([])
    const [insitutude, setInsititude] = useState([])
    const [load,setLoad]=useState(false)
    const [refresh, setRefresh] = useState(false)
    const [area, setArea] = useState([])
    const handleSelectChange = (selectedOptions: Option[]) => {
        setCountry(selectedOptions);
    };
    const optionscountry: Option[] = countryList.map((country: Country) => ({
        value: country.name,
        label: country.name,
    }));

   const [json , setJson] = useState({
    "levelofstudy": "",
    "subject_area": [],
    "desired_countries":  [{}],
    "desired_institutions": [{}]
    
   })
    useEffect(() => {
        setLoading(true);

        GetUserData()
            .then((e) => {    
                setLevel(e.programPreference.levelofstudy)
                setArea(e.programPreference.subject_area)
                setCountry(e.programPreference.desired_countries)
                setInsititude(e.programPreference.desired_institutions)
                setLoading(false);
             
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, [refresh]);

    const handleSubmit = () => {
        json.levelofstudy = levelstudy
        json.subject_area = area
        json.desired_countries = country
        json.desired_institutions = insitutude
        setLoad(true);
        ProgramPrefernceapi(json).then((e) => {
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
            <TopText>Program Preferences</TopText>

            <ContainerForm>
                {loading === true ?
                    <SkeletonProfile />
                    :
                    <div>
                        <InputHolder>
                            <LabelProfile>Level of Study</LabelProfile>
                            <DropdownCompo padding={isMobile ? '0.2%' :'1%'} value={levelstudy} width={'100%'} id={'1'} onChange={(e) => setLevel(e.target.value)} data={Level} />
                        </InputHolder>

                        <InputHolder>
                            <LabelProfile>Subject Area</LabelProfile>
                            <MultiDropComp label={'Select'} value={area} onChange={setArea}  width={'100%'} id={'1'} data={Area} />
                            <CheckedPosition>

                                {area.map((countryName: any, index) =>
                                    <BackgroundChecked key={index}>
                                        <TextChecked>{countryName.value}</TextChecked>
                                    </BackgroundChecked>
                                )}
                            </CheckedPosition>
                        </InputHolder>
                        <InputHolder>
                            <LabelProfile>Desired Countries</LabelProfile>
                            <div style={{ width: '100%' }} className="multi-drop-container">
                            <MultiSelect

                                options={optionscountry}
                                className="dark"
                                value={country}
                                onChange={handleSelectChange}
                                overrideStrings={{ "selectSomeItems": 'Country' }} // <- to override strings

                                labelledBy="ndwndiw"
                            />
                        </div>
                        <CheckedPosition>

                            {country.map((option: Option, index: number) => (
                                <BackgroundChecked key={index}>
                                    <TextChecked>{option.label}</TextChecked>
                                </BackgroundChecked>
                            ))}
                        </CheckedPosition>
                            {/* <MultiDropComp label={'Country'} value={country} onChange={setCountry}  width={'100%'} id={'1'} data={Country} />
                            <CheckedPosition>

                                {country.map((countryName: any, index) =>
                                    <BackgroundChecked key={index}>
                                        <TextChecked>{countryName.value}</TextChecked>
                                    </BackgroundChecked>
                                )}
                            </CheckedPosition> */}
                        </InputHolder>


                        {/* <InputHolder>
                            <LabelProfile>Desired Institutions</LabelProfile>
                            <MultiDropComp label={'Institution'} value={insitutude} onChange={setInsititude} width={'100%'} id={'1'} data={options} />
                            <CheckedPosition>

                                {insitutude.map((o: any) =>
                                    <BackgroundChecked>
                                        <TextChecked>{o.value}</TextChecked>
                                    </BackgroundChecked>
                                )}
                            </CheckedPosition>
                        </InputHolder> */}


                        <ButtonComp load={load} style={{ marginTop: '4%', padding: '8px', marginBottom: '5%' }} fontSize={'12px'} width={isMobile ?'20%' :'60%'} title="Save Changes" onClick={() => handleSubmit()} />
                    </div>
                }
            </ContainerForm>

        </RightBorder>
    )
}
export default ProgramPref;