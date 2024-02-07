import React, { Fragment, useState } from "react";
import { Grid, TextField, MenuItem, Typography, Box, Stack } from "@mui/material";
import {
    ListingHeader,
    TableHeader,
    PageHeader,
    MainCard,
    ActionButton,
    ColorButton
} from "../../components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    modelHeader: {
        padding: '20px 40px',
        borderBottom: '1px solid #DDDDDD',
        textAlign: 'center'
    },
    modelBody: {
        padding: '20px 40px',
    },
    modelFooter: {
        padding: '20px 40px',
    },
    center: {
        justifyContent: 'center'
    }
}));

export function AddUser() {
    const classes = useStyles();
    return (
        <Fragment>
            <Box className={classes.modelHeader}>
                <Typography variant="subtitle4">Add User</Typography>
            </Box>
            <Box className={classes.modelBody}>
                <Grid container spacing={2} direction="column">
                    <Grid item md={12}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Name"
                            defaultValue="Nolan Smith"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Email"
                            defaultValue="nolan07@gmail.com"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-select-currency"
                            select
                            label="Select"
                            defaultValue="EUR"
                        >
                            <MenuItem key="1" value="Admin Role">
                                Admin Role
                            </MenuItem>
                            <MenuItem key="2" value="Admin Role1">
                                Admin Role1
                            </MenuItem>
                        </TextField>
                    </Grid>

                </Grid>
            </Box>
            <Box className={classes.modelFooter}>
                <Stack direction="row" spacing={2} className={classes.center}>
                    <ColorButton width="50%">Cancel</ColorButton>
                    <ActionButton width="50%">Add User</ActionButton>
                </Stack>
            </Box>

        </Fragment>
    );
}
