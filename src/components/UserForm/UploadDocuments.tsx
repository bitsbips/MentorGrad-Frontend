import { Grid, TextField, Typography } from '@mui/material'
import React, { FC, useContext, useState } from 'react'
import LineInput from '../LineInput'
import { Buttonsposition, ContainerD, Heading, InputHolder, Label, Labelb } from './UserFormStyles'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DropdownCompo from '../Dropdown';
import { Country, Proficiency, Qualification } from '../../Data/Data';
import ChoosFile from '../ChooseFile';
import useMediaQuery from '../../hooks/MediaQuery';
import LinkButton from '../LinkButton';
import IconButton from '../IconButton';
import UserStates from '../../store/UserFormStates';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/ContextStates';
import { UploadDocumentsapi } from '../../api';
import { notifySuccess, notifyError } from '../../components/Toastifycom'
import Loadercom from '../Loadercom';
import fs from 'fs'



const UploadDocuments: FC = () => {
    const navigate = useNavigate()
    const { value, setValue } = useContext(Context)
    const [load, setLoad] = useState(false)
    const [academic, setAcademic] = useState([{name:"" , file:""}])
    const [english, setEnglish] = useState('')

    const [motivation, setMotivation] = useState('')
    const [refrence, setRefence] = useState('')
    const [awards, setAwards] = useState('')
    const [passport, setPassport] = useState('')
   
    const isMobile = useMediaQuery('(min-width: 950px)');
    const clearFileInput = () => {
        // Clear the file input by resetting the state
        UserStates.setAcademic('');
        UserStates.setEnglishFile('')
        UserStates.setLetter('');
        UserStates.setRef('');
        UserStates.setAwards('');
        UserStates.setPassportFile('')

    };

    const backbutton = () => {
        clearFileInput();
        setValue('2')

    }
    const Nextbutton = () => {
        clearFileInput();
        setValue('0')
        navigate('/response')

    }

  

  

    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
  
    const handleFile1Change = (e:any) => {
      setFile1(e.target.files[0]);
    };
  
    const handleFile2Change = (e:any) => {
      setFile2(e.target.files[0]);
    };
  
    const handleUpload = () => {
      const formData = new FormData();
  
      if (file1) {
        formData.append('name', 'academic_degrees');
        formData.append('files', file1);
      }
  
      if (file2) {
        formData.append('name', 'awardsandcertificates');
        formData.append('files', file2);
      }
  
      // Now formData contains the selected files and names
      console.log(formData.getAll("files"));
      UploadDocumentsapi(formData).then(e=>{
        console.log(e)
      })
  
      // You can send formData to your server using an HTTP request (e.g., axios)
    };



    return (
        <ContainerD>
            <Heading>Upload Your Documents</Heading>
           
            <InputHolder>
                <Label>Academic Degrees and  Certificates</Label>
                <ChoosFile padding={'1%'} onChange={(e) => academic.push({name:"academic_degrees" ,file:handleFileChange(e)})} id={'1'} width={'100%'} inputmode={'file'} />

            </InputHolder>
            <InputHolder>
                <Label>English Proficiency Test Results</Label>
                <ChoosFile padding={'1%'} onChange={(e) => academic.push({name:"englishtest_results",file:handleFileChange(e)})} id={'1'} width={'100%'} inputmode={'file'} />

            </InputHolder>

            <InputHolder>
                <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>
                    <div style={isMobile ? { width: '40%' } : {}}>
                        <Labelb>Motivation Letter</Labelb>
                        <ChoosFile padding={'2%'} onChange={(e) => academic.push({name:"motivation_letter",file:handleFileChange(e)})}   id={'1'} width={'100%'} inputmode={'file'} />

                    </div>
                    <div style={isMobile ? { width: '40%' } : {}}>
                        <Labelb>References</Labelb>
                        <ChoosFile padding={'2%'} onChange={(e) => academic.push({name:"references",file:handleFileChange(e)})}   id={'1'} width={'100%'} inputmode={'file'} />
                    </div>


                </div>
            </InputHolder >
            <InputHolder>
                <div style={isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } : {}}>
                    <div style={isMobile ? { width: '40%' } : {}}>
                        <Labelb>Awards and Certificates</Labelb>
                        <ChoosFile padding={'2%'} onChange={(e) => academic.push({name:"awardsandcertificates",file:handleFileChange(e)})} id={'1'} width={'100%'} inputmode={'file'} />

                    </div>
                    <div style={isMobile ? { width: '40%' } : {}}>
                        <Labelb>Passport</Labelb>
                        <ChoosFile padding={'2%'}  onChange={(e) => academic.push({name:"passport",file:handleFileChange(e)})} id={'1'} width={'100%'} inputmode={'file'} />
                    </div>


                </div>
            </InputHolder >

            <Buttonsposition>
                <LinkButton title='Back' onClick={() => backbutton()} />
                <IconButton load={load} style={{ marginLeft: '2%' }} title='Next' onClick={() => {
                    const form = new FormData()
                    for(let i = 1 ; i<academic.length;i++)
                    {
                        form.append("name",academic[i].name)
                        form.append("files",academic[i].file)
                        console.log(form,academic)
                    }
                    console.log(form,academic[1].file[0])

                    setLoad(true);
                    UploadDocumentsapi(form).then((e) => {
                        if (e.success === true) {
                            setLoad(false)
                            notifySuccess(e.message)
                            setTimeout(() => {
                                Nextbutton()
                            }, 2000)
                        }
                        else {
                            setLoad(false)

                            notifyError(e.message)

                        }
                    })


                }} />

            </Buttonsposition>


        </ContainerD >
    )
}
export const handleFileChange =(e: any)=> {
    const selectedFile = e.target.files[0];
    console.log('Selected File:', selectedFile);
    return selectedFile

    // Now you can work with the selected file as needed
}

export default observer(UploadDocuments) 
