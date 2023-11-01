import React, { useEffect, useRef, useState } from 'react';
import { Container, ExperticeText } from './MentorStyles';
import useMediaQuery from '../../hooks/MediaQuery';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Radio,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import Rectangle from '../../Assets/Images/Rectangle.png';
import { makeStyles } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { addBlog, getBlogs, getBlogsById, updateBlog } from '../../api';
import { formatDate, jwtDecode } from '../../helper-functions';
import { notifyError, notifySuccess } from '../../components/Toastifycom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HeaderDashboard from '../../components/Header/HeaderDashboard';
import Footer from '../../components/Footer';
import { LabelProfileb } from '../../components/StudentProfileDetails/StudentProfileStyles';
import TextInput from '../../components/StudentProfileDetails/InputProfile';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles
import { BsUpload } from 'react-icons/bs';

const useStyles = makeStyles({
  container: {
    border: '1px solid #D6D6D6',
  },
  subContainer: {
    padding: '15px',
  },
  pageTitle: {
    color: '#000',
    leadingTrim: 'both',
    textEdge: 'cap',
    fontStyle: 'bold',
    fontWeight: 600,
    lineHeight: '48px',
    textAlign: 'left',
    paddingBottom: '20px',
  },
  personImg: {
    width: '54px',
    height: '54px',
    flexShrink: 0,
    borderRadius: '54px',
  },
  heading: {
    fontWeight: 600,
  },
  date: {
    color: '#858585',
    leadingTrim: 'both',
    textEdge: 'cap',
    fontSize: '0.5rem',
    lineHeight: '38px' /* 342.857% */,
    textAlign: 'left',
  },
  description: {
    textAlign: 'left',
    padding: '10px',
    color: '#505050',
  },
});

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MentorCreateBlogs = (): JSX.Element => {
  const isMobile = useMediaQuery('(min-width: 950px)');
  const navigate = useNavigate();
  const classes = useStyles();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Get the user from your authentication system or local storage
  const userId: String = jwtDecode(
    localStorage.getItem('@storage_Key')
  )?.userId;

  let [searchParams, setSearchParams] = useSearchParams();

  const [blog, setBlog] = useState({
    id: '',
    title: '',
    shortDescription: '',
    description: '',
    active: 'Active',
  });
  const [image, setImage] = useState<string | null>(); // Initialize with null or a default image URL
  const [editorHtml, setEditorHtml] = useState('');

  // Custom formats if needed
  const customFormats = [
    {
      name: 'code',
      tag: 'code',
      class: 'code-block',
      title: 'Code Block',
    },
  ];

  // Register custom formats
  customFormats.forEach((format) => {
    Quill.register(format, true);
  });

  useEffect(() => {
    if (searchParams.get('edit')) {
      getBlogbyId();
    }
  }, [searchParams.get('edit')]);

  const handleEditorChange = (html: string) => {
    setEditorHtml(html);
  };

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setBlog((blog) => ({
      ...blog,
      [target.name]: target.value,
    }));
  };

  const handleFileInputClick = () => {
    // Trigger the hidden file input
    fileInputRef.current!.click(); // Use the non-null assertion operator (!)
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Use optional chaining to access files array
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const getBlogbyId = () => {
    getBlogsById(searchParams.get('id'))
      .then((res) => {
        setBlog((blog) => ({
          ...blog,
          title: res?.title,
          shortDescription: res?.shortDescription,
          active: res?.category,
        }));
        setEditorHtml(res?.description);
        setImage(res?.coverImage);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  const createBlog = () => {
    if (blog.title === '' && blog.shortDescription === '') {
      notifyError('Please add Title and Short Description!');
      return;
    }
    let payload = {
      userId: userId,
      shortDescription: blog.shortDescription,
      title: blog.title,
      coverImage: image,
      currDate: new Date(),
      description: editorHtml,
      category: blog.active,
    };
    addBlog(payload)
      .then((res) => {
        navigate('/dashboard?tab=7');
        notifySuccess('Blog Added Successfully!');
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  const editBlog = () => {
    if (blog.title === '' && blog.shortDescription === '') {
      notifyError('Please add Title and Short Description!');
      return;
    }
    let payload = {
      userId: userId,
      shortDescription: blog.shortDescription,
      title: blog.title,
      coverImage: image,
      currDate: new Date(),
      description: editorHtml,
      _id: searchParams.get('id'),
      category: blog.active,
    };
    updateBlog(payload)
      .then((res) => {
        navigate('/dashboard?tab=7');
        notifySuccess(res);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="h5" className={classes.pageTitle}>
          Create Blog
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Typography textAlign={'left'} fontWeight={600} marginBottom={1}>
              Title
            </Typography>
            <TextField
              size="small"
              fullWidth
              name="title"
              value={blog.title}
              onChange={handleChange}
              sx={{
                borderRadius: '12px',
              }}
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <Typography textAlign={'left'} fontWeight={600} marginBottom={1}>
              Cover Image
            </Typography>
            <Stack
              flexDirection={'column'}
              alignItems={'center'}
              sx={{
                border: '1px solid grey',
                borderRadius: '12px',
                p: 2,
                cursor: 'pointer',
              }}
              onClick={handleFileInputClick}
            >
              <input
                accept="image/*"
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              {image ? (
                <img src={image} width={'100px'} />
              ) : (
                <>
                  <BsUpload />
                  <Typography fontWeight={600}>Upload</Typography>
                </>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Stack flexDirection={'column'} alignItems={'flex-start'}>
              <Typography textAlign={'left'} fontWeight={600} marginBottom={1}>
                Short Description
              </Typography>
              <textarea
                name="shortDescription"
                value={blog.shortDescription}
                rows={4}
                onChange={handleChange}
                style={{
                  width: '100%',
                  background: '#f2f5f9',
                  borderRadius: '12px',
                }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Typography textAlign={'left'} fontWeight={600} marginBottom={1}>
              Description
            </Typography>

            <ReactQuill
              value={editorHtml}
              onChange={handleEditorChange}
              modules={{
                toolbar: [
                  [{ header: '1' }, { header: '2' }, { font: [] }],
                  [{ size: [] }],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [
                    { list: 'ordered' },
                    { list: 'bullet' },
                    { indent: '-1' },
                    { indent: '+1' },
                  ],
                  ['link', 'image', 'video'],
                  ['clean'],
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <Stack flexDirection={'column'} alignItems={'flex-start'}>
                  <Typography
                    textAlign={'left'}
                    fontWeight={600}
                    marginBottom={1}
                  >
                    Category
                  </Typography>
                  <Stack flexDirection={'row'}>
                    <Stack flexDirection={'row'} alignItems={'center'}>
                      <IconButton>
                        <Radio
                          checked={blog.active === 'Active'}
                          onChange={(event) =>
                            setBlog((blog) => ({
                              ...blog,
                              active: event.target.checked ? 'Active' : '',
                            }))
                          }
                        />
                      </IconButton>
                      <LabelProfileb>Active</LabelProfileb>
                    </Stack>
                    <Stack flexDirection={'row'} alignItems={'center'}>
                      <IconButton>
                        <Radio
                          checked={blog.active === 'inActive'}
                          onChange={(event) =>
                            setBlog((blog) => ({
                              ...blog,
                              active: event.target.checked ? 'inActive' : '',
                            }))
                          }
                        />
                      </IconButton>
                      <LabelProfileb>In-Active</LabelProfileb>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Button
              onClick={searchParams.get('edit') ? editBlog : createBlog}
              variant="contained"
              sx={{ background: '#7476D1', float: 'left' }}
            >
              Publish
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default MentorCreateBlogs;
