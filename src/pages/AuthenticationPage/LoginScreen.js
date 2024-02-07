import { Fragment } from "react";
import {
  Grid,
  Typography,
  useTheme,
  TextField,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";

import {
  PhoneInput
} from "../../components";

export const LoginScreen = () => {
  const theme = useTheme();
  const navigate = useNavigate();

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
            {/* <Grid item>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Trading Company
              </Typography>
            </Grid> */}
            <Divider sx={{ width: "100%", mt: 2, mb: 2 }} />
            <Grid item>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                Sign In
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
                Please login to your account
              </Typography>
            </Grid>
            <Grid
              item
              sx={{ width: "100%", pt: 1, pb: 1, pl: 4, pr: 4, mt: 2.5 }}
            >
             <TextField
                id="outlined-required"
                type="email"
                label="Whats’app Number"
                defaultValue="542847575"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: theme.palette.gray.main,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                OTP will be sent to this number
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
                }}
                onClick={() => {
                  navigate("/otp_verification");
                }}
              >
                Get OTP
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
};
