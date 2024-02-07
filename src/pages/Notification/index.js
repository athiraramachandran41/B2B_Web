import React, { Fragment, useState } from "react";
import {
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  ListingHeader,
} from "../../components";
const useStyles = makeStyles((theme) => ({
  flexStack: {
    "&.MuiStack-root": {
      justifyContent: 'space-between'
    },
  },
  paper: {
    flexGrow: 1,
    minHeight: 50,
    "&.MuiPaper-root": {
      padding: theme.spacing(2),
      backgroundColor: "#FBFBFB",
      boxShadow: 'none'
    },
  },
  paperUnread: {
    flexGrow: 1,
    minHeight: 50,
    "&.MuiPaper-root": {
      padding: theme.spacing(2),
      backgroundColor: "#F3F3F3",
      boxShadow: 'none'
    },
  },
  notification: {
    width: '100%',
    display: 'block',
  },
  desc: {
    opacity: '0.8',
    color: '#131313',
    fontSize: '16px',
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  date: {
    color: 'rgba(48, 48, 48, 0.80)',
    fontSize: '14px',
    fontWeight: 400,
    textTransform: 'capitalize'
  },
  dateUnread: {
    color: ' #FF4242',
    fontSize: '16px',
    fontWeight: 500,
  },
  descUnread: {
    color: '#131313',
    fontSize: '16px',
    fontWeight: 600
  }
}));


export function Notification() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={2} direction="column">
        <Grid item xs>
          <ListingHeader
            title="Notification"
          />
        </Grid>
        <Grid item xs>
          <Grid container spacing={2} direction="row">
            <Grid item md={12}>
              <Stack direction="column" spacing={2}>
                <Paper className={classes.paperUnread}>
                  <Stack direction="column" spacing={1} className={classes.notification}>
                    <Typography className={classes.descUnread}>Today’s Order ( 30.12.23) closes at 2 pm. </Typography>
                    <Typography className={classes.dateUnread}>29th December, 2023</Typography>
                  </Stack>
                </Paper>
                <Paper className={classes.paper}>
                  <Stack direction="column" spacing={1} className={classes.notification}>
                    <Typography className={classes.desc}>Today’s Order ( 30.12.23) closes at 2 pm. </Typography>
                    <Typography className={classes.date}>29th December, 2023</Typography>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
