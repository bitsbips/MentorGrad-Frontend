import React, { FC, useEffect, useState } from 'react';
import {
  ColumnStudentForm,
  ContainerForm,
  FileName,
  FileNamepo,
  ImageContainerpo,
  LabelProfile,
  PositionProfile,
  PositionProfileForm,
  RightBorder,
  RightContainer,
  TopText,
} from './StudentProfileStyles';
import ButtonComp from '../Button';
import ChoosFile from '../ChooseFile';
import { InputHolder } from '../UserForm/UserFormStyles';
import { Link } from 'react-router-dom';
import { TopRightText1 } from '../../pages/AuthFlow/AuthStyles';
import { GetUserData, UploadDocumentsapi } from '../../api';
import { Flip, ToastContainer, toast } from 'react-toastify';
import SkeletonProfile from '../SkeletonLoader/SkeletonProfile';
import { handleFileChange } from '../UserForm/UploadDocuments';
import { notifyError, notifySuccess } from '../Toastifycom';
import useMediaQuery from '../../hooks/MediaQuery';

const DocumentDetail: FC = () => {
  const isMobile = useMediaQuery('(min-width: 950px)');

  const [value, setValue] = useState('');
  const [files, setFiles] = useState([
    {
      name: '',
      file: '',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [documents, setDocuments] = useState({
    destination: '',
    encoding: '',
    fieldname: '',
    filename: '',
    mimetype: '',
    originalname: null,
    size: 0,
  });
  const [passport, setPassport] = useState({
    destination: '',
    encoding: '',
    fieldname: '',
    filename: '',
    mimetype: '',
    originalname: null,
    size: 0,
  });
  const [awards, setAwards] = useState({
    destination: '',
    encoding: '',
    fieldname: '',
    filename: '',
    mimetype: '',
    originalname: null,
    size: 0,
  });
  const [english, setEnglish] = useState({
    destination: '',
    encoding: '',
    fieldname: '',
    filename: '',
    mimetype: '',
    originalname: null,
    size: 0,
  });
  const [reference, setReference] = useState({
    destination: '',
    encoding: '',
    fieldname: '',
    filename: '',
    mimetype: '',
    originalname: null,
    size: 0,
  });
  const [motivation, setMotivation] = useState({
    destination: '',
    encoding: '',
    fieldname: '',
    filename: '',
    mimetype: '',
    originalname: null,
    size: 0,
  });
  useEffect(() => {
    setLoading(true);

    GetUserData()
      .then((e) => {
        console.log(e.uploadDocuments);
        documents.originalname =
          e.uploadDocuments.academic_degrees &&
          e.uploadDocuments.academic_degrees.originalname;
        passport.originalname =
          e.uploadDocuments.passport && e.uploadDocuments.passport.originalname;
        awards.originalname =
          e.uploadDocuments.awardsandcertificates &&
          e.uploadDocuments.awardsandcertificates.originalname;
        english.originalname =
          e.uploadDocuments.englishtest_results &&
          e.uploadDocuments.englishtest_results.originalname;
        reference.originalname =
          e.uploadDocuments.references &&
          e.uploadDocuments.references.originalname;
        motivation.originalname =
          e.uploadDocuments.motivation_letter &&
          e.uploadDocuments.motivation_letter.originalname;

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message, {
          transition: Flip,
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
          theme: 'light',
        });
        setLoading(false);
      });
  }, [refresh]);
  return (
    <RightBorder>
      <TopText>Document Detail</TopText>
      {loading === true ? (
        <SkeletonProfile />
      ) : (
        <ContainerForm>
          <InputHolder>
            <LabelProfile>Academic Degrees and Certificates</LabelProfile>
            <FileNamepo>
              <FileName>
                {documents['originalname'] != null
                  ? documents['originalname']
                  : 'No file uploaded'}
              </FileName>
              {documents['originalname'] != null && (
                <Link
                  to={''}
                  style={{ marginLeft: '0px', alignSelf: 'center' }}
                >
                  <TopRightText1
                    style={{ marginLeft: '0px', alignSelf: 'center' }}
                  >
                    Delete
                  </TopRightText1>
                </Link>
              )}
            </FileNamepo>
            <ChoosFile
              padding={'1%'}
              onChange={(e) =>
                files.push({
                  name: 'academic_degrees',
                  file: handleFileChange(e),
                })
              }
              id={'1'}
              width={'100%'}
              inputmode={'file'}
            />
          </InputHolder>
          <InputHolder>
            <LabelProfile>English Proficiency Test Results</LabelProfile>
            <FileNamepo>
              <FileName>
                {english['originalname'] != null
                  ? english['originalname']
                  : 'No file uploaded'}
              </FileName>
              {english['originalname'] != null && (
                <Link
                  to={''}
                  style={{ marginLeft: '0px', alignSelf: 'center' }}
                >
                  <TopRightText1
                    style={{ marginLeft: '0px', alignSelf: 'center' }}
                  >
                    Delete
                  </TopRightText1>
                </Link>
              )}
            </FileNamepo>
            <ChoosFile
              padding={'1%'}
              onChange={(e) =>
                files.push({
                  name: 'englishtest_results',
                  file: handleFileChange(e),
                })
              }
              id={'1'}
              width={'100%'}
              inputmode={'file'}
            />
          </InputHolder>
          <InputHolder>
            <LabelProfile>Motivation Letter</LabelProfile>
            <FileNamepo>
              <FileName>
                {' '}
                {motivation['originalname'] != null
                  ? motivation['originalname']
                  : 'No file uploaded'}
              </FileName>
              {motivation['originalname'] != null && (
                <Link
                  to={''}
                  style={{ marginLeft: '0px', alignSelf: 'center' }}
                >
                  <TopRightText1
                    style={{ marginLeft: '0px', alignSelf: 'center' }}
                  >
                    Delete
                  </TopRightText1>
                </Link>
              )}
            </FileNamepo>
            <ChoosFile
              padding={'1%'}
              onChange={(e) =>
                files.push({
                  name: 'motivation_letter',
                  file: handleFileChange(e),
                })
              }
              id={'1'}
              width={'100%'}
              inputmode={'file'}
            />
          </InputHolder>
          <InputHolder>
            <LabelProfile>References</LabelProfile>
            <FileNamepo>
              <FileName>
                {reference['originalname'] != null
                  ? reference['originalname']
                  : 'No file uploaded'}
              </FileName>
              {reference['originalname'] != null && (
                <Link
                  to={''}
                  style={{ marginLeft: '0px', alignSelf: 'center' }}
                >
                  <TopRightText1
                    style={{ marginLeft: '0px', alignSelf: 'center' }}
                  >
                    Delete
                  </TopRightText1>
                </Link>
              )}
            </FileNamepo>
            <ChoosFile
              padding={'1%'}
              onChange={(e) =>
                files.push({ name: 'references', file: handleFileChange(e) })
              }
              id={'1'}
              width={'100%'}
              inputmode={'file'}
            />
          </InputHolder>
          <InputHolder>
            <LabelProfile>Awards and Certificates</LabelProfile>
            <FileNamepo>
              <FileName>
                {awards['originalname'] != null
                  ? awards['originalname']
                  : 'No file uploaded'}
              </FileName>
              {awards['originalname'] != null && (
                <Link
                  to={''}
                  style={{ marginLeft: '0px', alignSelf: 'center' }}
                >
                  <TopRightText1
                    style={{ marginLeft: '0px', alignSelf: 'center' }}
                  >
                    Delete
                  </TopRightText1>
                </Link>
              )}
            </FileNamepo>
            <ChoosFile
              padding={'1%'}
              onChange={(e) =>
                files.push({
                  name: 'awardsandcertificates',
                  file: handleFileChange(e),
                })
              }
              id={'1'}
              width={'100%'}
              inputmode={'file'}
            />
          </InputHolder>
          <InputHolder>
            <LabelProfile>Passport</LabelProfile>
            <FileNamepo>
              <FileName>
                {' '}
                {passport['originalname'] != null
                  ? passport['originalname']
                  : 'No file uploaded'}
              </FileName>
              {passport['originalname'] != null && (
                <Link
                  to={''}
                  style={{ marginLeft: '0px', alignSelf: 'center' }}
                >
                  <TopRightText1
                    style={{ marginLeft: '0px', alignSelf: 'center' }}
                  >
                    Delete
                  </TopRightText1>
                </Link>
              )}
            </FileNamepo>
            <ChoosFile
              padding={'1%'}
              onChange={(e) =>
                files.push({ name: 'passport', file: handleFileChange(e) })
              }
              id={'1'}
              width={'100%'}
              inputmode={'file'}
            />
          </InputHolder>

          <ButtonComp
            style={{ marginTop: '4%', padding: '8px', marginBottom: '5%' }}
            fontSize={'12px'}
            width={isMobile ? '20%' : '60%'}
            title="Save Changes"
            onClick={() => {
              console.log(files.length);
              const form = new FormData();
              for (let i = 1; i < files.length; i++) {
                form.append('name', files[i].name);
                form.append('files', files[i].file);
                console.log(form, files);
              }
              console.log(form, files[1].file[0]);

              setLoading(true);
              UploadDocumentsapi(form).then((e) => {
                if (e.success === true) {
                  notifySuccess(e.message);

                  setRefresh(!refresh);

                  setLoading(false);
                } else {
                  notifyError(e.message);
                  setLoading(false);
                }
              });
            }}
          />
        </ContainerForm>
      )}
    </RightBorder>
  );
};
export default DocumentDetail;
