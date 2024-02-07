import React, { Fragment, useState, useEffect } from "react";
import { Grid, TextField, MenuItem, Typography, Box, Stack, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import {
    ActionButton,
    AttachmentCard,
    AttachmentStatus
} from "../../components";
import { makeStyles, styled } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '20px 20px',
        textAlign: 'center'
    },
    body: {
        padding: '20px 40px',
    },
    modelFooter: {
        padding: '20px 40px',
    },
    center: {
        justifyContent: 'center'
    }
}));


export function Attachments(props) {
    const { primaryClick, docStatus } = props;
    const classes = useStyles();
    const [attachmentData, setAttachmentData] = useState([]);
        const attachment = [
            {
            required_attachment:"Trade License *",
            id:"1",
            status: "approved"
            },

            {
                required_attachment:"TRN Certificate *",
                id:"2",
                status: "approved"
            },
            {
                required_attachment:"Owner’s Passport *",
                id:"3",
                status: "processing"
            },
            {
                required_attachment:"Owner’s Emirates ID *",
                id:"4",
                status: "rejected"
            }
        ]
    useEffect(() => {
        setAttachmentData(attachment); 
    }, []);

    return (
        <Fragment>
        {docStatus? <>
            <Box className={classes.header}>
                <Typography variant="subtitle4">Document status</Typography>
            </Box>
            <Box className={classes.body}>
            {attachmentData
            .map((item, index) => (
              <AttachmentStatus
                name={item.required_attachment}
                index={index}
                status={item.status}
              />
            ))}
            </Box>
        </>: <>
        <Box className={classes.header}>
                <Typography variant="subtitle4">Upload Document</Typography>
            </Box>
            <Box className={classes.body}>
            {attachmentData
            .map((item, index) => (
              <AttachmentCard
                name={item.required_attachment}
                index={index}
              />
            ))}

            </Box>
            <Box className={classes.modelFooter}>
                <Stack direction="row" spacing={2}>
                    <ActionButton width="100%" onClick={primaryClick}>Submit</ActionButton>
                </Stack>
            </Box>
        </>}
           
           
           
        </Fragment>
    );
}
Attachments.propTypes = {
    primaryClick: PropTypes.func,
    docStatus: PropTypes.string,
  };