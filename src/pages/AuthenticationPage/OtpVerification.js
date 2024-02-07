import { Fragment, useState } from "react";
import {
  Grid,
  Typography,
  useTheme,
  TextField,
  Paper,
  Button,
  Divider,
  colors,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import OtpInput from "react-otp-input";
import { makeStyles } from "@mui/styles";

import {
  PhoneInput
} from "../../components";
import { Box } from "iconsax-react";

const useStyles = makeStyles((theme) => ({
  otpContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  otpField: {
    height: 20,
    padding: 10,
    fontSize: 24,
    fontWeight: 700,
    borderRadius: 4, 
    borderRadius: '8px',
    border: '1px solid #E3E3E3',
    background: '#F8F6F6'
  },
  ptb2: {
    padding: '20px 0px'
  },
  ptb1: {
    padding: '10px 0px'
  },
  code: {
    color: theme.palette.blue.main,
    fontWeight: 600,
  }

}));
export const OtpVerification = () => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  return (
    <Fragment>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.theme.main,
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: "25%",
            borderRadius: 2,
            backgroundColor: theme.palette.white.main,
          }}
        >
          <Grid
            container
            sx={{
              width: "100%",
              pt: 4,
              pb: 4,
            }}
            direction="column"
            alignItems={"center"}         
          >
            <Grid item>
              <img
                src={logo}
                style={{
                  width: 76,
                  height: 35,
                }}
              />
            </Grid>
            <Divider sx={{ width: "100%", mt: 2, mb: 2 }} />
            <Grid item className={classes.ptb1}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
              OTP Verification
              </Typography>
            </Grid>
            <Grid alignItems={"start"}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
               Enter the OTP you received to
              </Typography>
            </Grid>
            <Grid alignItems={"start"}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
              +91 7356335201
              </Typography>
            </Grid>
            <Grid
              item
              className={classes.ptb2}
            >
             <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span style={{ margin: 5 }} />}
              renderInput={(props) => <input {...props} />}
              inputStyle={classes.otpField}
              inputType="number"
              shouldAutoFocus
            ></OtpInput>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: theme.palette.gray.main,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
               Didn't receive code? <span className={classes.code} >Resend Code</span> 
              </Typography>
            </Grid>
            <Grid item className={classes.ptb1}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
              01:56
              </Typography>
            </Grid>
            <Grid item sx={{ width: "100%", pl: 4, pr: 4 }}>
              <Button
                variant="contained"
                color="theme"
                sx={{
                  marginTop: 1,
                  width: "100%",
                  height: 45,
                  textTransform: "capitalize"
                }}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
               Verify OTP
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
};
