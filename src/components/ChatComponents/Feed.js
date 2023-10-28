import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Button, Card } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/client';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useStateContext } from '../../Context/state';
import DialogBox from './DialogBox';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { getErrorMsg } from '../../helper-functions';
import {
    SEND_PRIVATE_MSG,
    SEND_GROUP_MSG,
    SEND_GLOBAL_MSG,
} from '../../graphql/mutations';

import {
    GET_MESSAGE_TEMPLATES,
} from '../../graphql/queries';
import LoadingSpinner from './LoadingSpinner';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    toolbar: {
        color: '#000',
        backgroundColor: theme.palette.background.paper,
    },
    options: {
        border: theme.palette.type === 'dark'
            ? '1px solid #d3d3d320'
            : '1px solid #d3d3d395',
        color: '#000',
        background: "transparent"
    }
}));

export default function SelectedListItem() {
    const classes = useStyles();
    const [useTemplateModal, setUseTemplateModal] = React.useState(false);
    const [editorState, setEditorState] = React.useState("Hello");
    const { selectedChat, notify, setMessageBody, messageBody } = useStateContext();

    const { data: templatesData, loading: loadingTemplates } = useQuery(GET_MESSAGE_TEMPLATES, {
        onError: (err) => {
            notify(getErrorMsg(err), 'error');
        },
    });

    const [submitPrivateMsg, { loading: loadingPrivate }] = useMutation(
        SEND_PRIVATE_MSG,
        {
            onError: (err) => {
                notify(getErrorMsg(err), 'error');
            },
        }
    );
    const [submitGroupMsg, { loading: loadingGroup }] = useMutation(
        SEND_GROUP_MSG,
        {
            onError: (err) => {
                notify(getErrorMsg(err), 'error');
            },
        }
    );
    const [submitGlobalMsg, { loading: loadingGlobal }] = useMutation(
        SEND_GLOBAL_MSG,
        {
            onError: (err) => {
                notify(getErrorMsg(err), 'error');
            },
        }
    );





    const handleTemplateClick = (body) => {
        // let draftContent = htmlToDraftBlocks(body);
        // setEditorState(draftContent);
        // setUseTemplateModal(true)
        // setMessageBody(body);
    };

    const closeTemplateBox = () => {
        setEditorState("");
        setUseTemplateModal(false);
    }




    const sendMessage = (type, message) => {
        if (selectedChat.chatType === 'private') {
            submitPrivateMsg({
                variables: { receiverId: selectedChat.chatData.id, body: message, type: type },
                update: () => {
                },
            });
        } else if (selectedChat.chatType === 'group') {
            submitGroupMsg({
                variables: {
                    conversationId: selectedChat.chatData.id,
                    body: message,
                    type: type
                },
                update: () => {
                },
            });
        } else {
            submitGlobalMsg({
                variables: { body: message, type: type },
                update: () => {
                },
            });
        }
    }




    const htmlToDraftBlocks = (html) => {
        // const blocksFromHtml = htmlToDraft(html);
        // const { contentBlocks, entityMap } = blocksFromHtml;
        // const contentState = ContentState.createFromBlockArray(
        //     contentBlocks,
        //     entityMap
        // );
        // const editorState = EditorState.createWithContent(contentState);
        // return editorState;
    };

    const sendTemplate = () => {
        let content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        // setMessageBody(content);
        sendMessage("Template", content);
        setUseTemplateModal(false);
    }



    if (loadingTemplates || !templatesData) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <DialogBox
                modalOpen={useTemplateModal}
                setModalOpen={setUseTemplateModal}
                title="Edit Template"
                size={"md"}
            >
                <Card style={{ marginBottom: 10 }}>
                    <Editor
                        toolbar={{
                            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list'],
                            inline: {
                                className: classes.options,
                            },
                            blockType: {
                                className: classes.options,

                            },
                            fontSize: {
                                className: classes.options,

                            },
                            fontFamily: {
                                className: classes.options,

                            },
                            list: {
                                className: classes.options,

                            },

                        }}
                        editorState={editorState}
                        toolbarClassName={classes.toolbar}
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={setEditorState}
                    />
                </Card>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                        size="medium"
                        color="primary"
                        variant="outlined"
                        onClick={sendTemplate}
                    >
                        Send Message
                    </Button>
                    <Button
                        size="medium"
                        color="secoundary"
                        variant="contained"
                        onClick={closeTemplateBox}
                    >
                        Close
                    </Button>
                </div>
            </DialogBox>
            <List>
                {templatesData?.getMessageTemplates.map((template) => {
                    return (
                        <>
                            <ListItem
                                button
                                onClick={(event) => handleTemplateClick(template.body)}
                            >
                                <ListItemText primary={template.title} />
                            </ListItem>
                            <Divider />
                        </>)
                }) || []}
            </List>
        </>
    );
}
