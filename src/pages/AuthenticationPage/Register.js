import React, { Fragment, useState } from "react";
import { Grid, TextField, MenuItem, Typography, Box, Stack, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import {
    ActionButton,
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

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    padding: "0 !important",
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor:'#f5f8fa',
    backgroundImage:'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#0F8EFF',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#0F8EFF',
    },
  });
  
// Inspired by blueprintjs
function BpCheckbox(props) {
    return (
      <Checkbox
        // sx={{
        //   '&:hover': { bgcolor: 'transparent' },
        // }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
    );
  }
  


export function Register(props) {
    const { primaryClick } = props;
    const classes = useStyles();
    const [formData, setFormData] = useState([]);
    const [phoneCode, setPhoneCode] = useState("971");
    const [same, setSame] = useState(true);

    const handleInputChange = (fieldName, value, phoneNumb) => {
        // Perform form validation on input change if error state is true
    
        if (phoneNumb) {
          // Handle phone number input changes
          const numbersOnly = value.replace(/[^0-9]/g, "");
          if (numbersOnly.length < 15) {
            setFormData((prevFormData) => {
              const updatedFormData = prevFormData.map((inputObj) => {
                const inputKey = Object.keys(inputObj)[0];
                if (inputKey === fieldName) {
                  return {
                    [fieldName]: {
                      ...inputObj[fieldName],
                      value: numbersOnly,
                      phone_code: phoneCode,
                    },
                  };
                }
                return inputObj;
              });
    
              return updatedFormData;
            });
          }
        } else {
          // Handle other input changes (e.g., validation for different fields)
          if (fieldName === "po_number") {
            value = value.substring(0, 6).replace(/[^0-9]/g, "");
          } else if (fieldName === "iban_number") {
            value = value.substring(0, 25).replace(/[^0-9]/g, "");
          } else if (fieldName === "uuid_number") {
            value = value.replace(/[^0-9]/g, "");
          }
    
          setFormData((prevFormData) => {
            const updatedFormData = prevFormData.map((inputObj) => {
              const inputKey = Object.keys(inputObj)[0];
              if (inputKey === fieldName) {
                return {
                  [fieldName]: {
                    ...inputObj[fieldName],
                    value: value,
                  },
                };
              }
              return inputObj;
            });
    
            return updatedFormData;
          });
        }
      };
    return (
        <Fragment>
            <Box className={classes.header}>
                <Typography variant="subtitle4">Register</Typography>
                <Typography variant="body1">Enter your company details</Typography>
            </Box>
            <Box className={classes.body}>
                <Grid container spacing={2} direction="row">
                    <Grid item md={6}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Company Name"
                            defaultValue="B2B Trading Company"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="TRN Number"
                            defaultValue="12345678"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Your Name"
                            defaultValue="Safwan Ali"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Whatsapp Number"
                            defaultValue="65465461"
                        />
                         {/* <PhoneInput
                      key="Number"
                      label="Whatsapp Number"
                      onChange={(e) =>
                        handleInputChange(
                        //   fieldName,
                          e.target.value,
                        )
                      }
                      maxLength={15}
                      value=""
                      type="tel"
                    //   errorData={fieldData[fieldName].value}
                      setPhoneCode={setPhoneCode}
                      setSame={setSame}
                      same={same}
                      // error={error}
                    //   showError={
                    //     showError && <ErrorLabel>{showError}</ErrorLabel>
                    //   }
                    /> */}
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Alternate Contact Number"
                            defaultValue="01234567890"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Email ID"
                            defaultValue="Safwan99@gmail.com"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Office Address"
                            defaultValue="Rolex Shopping center, Bandu Gore Marg, Goregoan West, Mumbai, Maharashtra 400104"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-required"
                            label="Country"
                            defaultValue="India"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            className="smallText"
                            fullWidth
                            id="outlined-select-currency"
                            select
                            label="City"
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
                    <Grid item md={12}>
                    <Typography variant="h8" sx={{ fontWeight: 400, fontSize: 16, color:'#000000'}}>
                    <BpCheckbox defaultChecked />
                    I accept to the<span className={classes.linkText}>Terms of use</span> and <span className={classes.linkText}>Privacy Policy.</span>
                    </Typography>
                </Grid>
                </Grid>
            </Box>
            <Box className={classes.modelFooter}>
                <Stack direction="row" spacing={2}>
                    <ActionButton width="50%" onClick={primaryClick}>Next</ActionButton>
                </Stack>
            </Box>

        </Fragment>
    );
}
Register.propTypes = {
    primaryClick: PropTypes.func,
  };