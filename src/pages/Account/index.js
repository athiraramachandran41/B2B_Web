import React, { Fragment, useState } from "react";
import {
  Grid,
  Paper,
  Stack,
  Typography,
  Box,
  Link,
  Divider,
  Item,
  Button
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  ListingHeader,
  CompanyInfoCard,
  ActionButton,
  OutlinedCard,
} from "../../components";
import {
  cmpnyImg,
} from "../../assets"
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
      backgroundColor: theme.palette.common.lightGreyBg,
      boxShadow: 'none'
    },
  },
  status: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    padding: '20px',
    borderBottom: '1px solid #EAEAEA',
    justifyContent: 'space-between',
    display: 'flex'
  },
  body: {
    padding: '20px',
  }
}));


export function Account() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={2} direction="column">
        <Grid item xs>
          <ListingHeader
            title="My Account"
            alignment={true}
          />
        </Grid>
        <Grid item xs>
          <Grid container spacing={2} direction="row">
            <Grid item md={4}>
              <Stack direction="column" spacing={2}>
                <CompanyInfoCard image={cmpnyImg} date="15 feb 2023" />
                <Paper className={classes.paper}>
                  <Stack direction="row" spacing={2} className={classes.status}>
                    <Typography variant="body1">Status</Typography>
                    <Button className="secoundayBtn">Active</Button>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs md={8}>
              <Stack direction="column" spacing={2}>
                <OutlinedCard>
                  <Box className={classes.header}>
                    <Typography variant="body3">About Company</Typography>
                    <Link href="#" underline="none" className="link">
                      Edit
                    </Link>
                  </Box>
                  <Box className={classes.body}>
                    <Grid container spacing={3} direction="row">
                      <Grid item md={6}>
                        <Typography variant="h8">Company Name</Typography>
                        <Typography variant="h9">A K G Technologies</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography variant="h8">Company Admin</Typography>
                        <Typography variant="h9">Sheikh Abdhulla</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography variant="h8">Phone Number</Typography>
                        <Typography variant="h9">+91 999 228 614</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography variant="h8">Landline Number</Typography>
                        <Typography variant="h9">222 0222 172 788</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </OutlinedCard>
                <OutlinedCard>
                  <Box className={classes.header}>
                    <Typography variant="body3">Documents</Typography>
                  </Box>
                  <Box className={classes.body}>
                    <Stack
                      direction="column"
                      divider={<Divider orientation="horizondal" flexItem />}
                      spacing={2}
                    >
                      <Stack direction="row" className={classes.flexStack}>
                        <Box>
                          <Typography variant="h8">Company Name</Typography>
                          <Typography variant="h9">A K G Technologies</Typography>
                        </Box>
                        <Stack spacing={2} direction="row">
                     
                        <Button className="secoundayBtn">Upload</Button>
                          <Link href="#" underline="none" className="link">
                            View
                          </Link>
                        </Stack>
                      </Stack>
                      <Stack direction="row" className={classes.flexStack}>
                        <Box>
                          <Typography variant="h8">Company Name</Typography>
                          <Typography variant="h9">A K G Technologies</Typography>
                        </Box>
                        <Stack spacing={2} direction="row">
                        <Button className="secoundayBtn">Upload</Button>
                          <Link href="#" underline="none" className="link">
                            View
                          </Link>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </OutlinedCard>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
