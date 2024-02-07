import React from "react";
import {
  Grid, Paper, Typography, Collapse, IconButton, Stack, List, ListItem, ListItemButton, ListItemText, Card, Stepper, Step, StepLabel, StepContent, Button
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  ActionButton,
  MainCard
} from "../../components";
import {
  OrderSummary,
} from "../../pages";

const useStyles = makeStyles((theme) => ({
  statusItem: {
    "&.MuiTableCell-root": {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      minHeight: 60,
    },
  },
  paper: {
    "&.MuiPaper-root": {
      borderRadius: 0,
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      boxShadow: 'none'
    },
  },
  listItem: {
    borderRadius: '5px',
    background: '#F7F7F7',
  },
  listItemText: {
    padding: '10px 20px',
    borderBottom: '1px solid #ebe9e9'
  },
  step: {
    "&.MuiStep-root .MuiStepIcon-root.Mui-active": {
      color: '#189224'
    },
  },
  btnComplete: {
    "&.MuiButton-root": {
      borderRadius: '23px',
      background: '#189224',
      color: 'white',
      fontSize: '16px',
      fontWeight: '500',
      textTransform: 'capitalize',
      padding: '5px 20px'
    }
  }
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const steps = [
  {
    step: 'Waiting for delivery',
    date: '12 oct 2023, 3:00PM'
  },
  {
    step: 'Package Delivered',
    date: '12 oct 2023, 6:00PM'
  },
  {
    step: 'Waiting for payment',
    date: '12 oct 2023, 7:00PM'
  },
  {
    step: 'Paid',
    date: '12 oct 2023, 7:00PM'
  }
];
export function OrderDetails() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="subtitle3">Order Details: #S9876</Typography>
          </Grid>
          <Grid item xs />
          <Grid item>
            <ActionButton>Download Pdf</ActionButton>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={2} direction="row">
        <Grid item md={8}>
          <MainCard>
            <Typography variant="subtitle1">Order Summary</Typography>
            <OrderSummary />
          </MainCard>
        </Grid>
        <Grid item md={4}>
          <Stack direction="column" spacing={2}>
            <MainCard>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1">Payment Summary</Typography>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Stack>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <List className={classes.listItem}>
                  <ListItem disablePadding className={classes.listItemText}
                    secondaryAction={
                      <ListItemText primary="$ 162500.00" />
                    }
                  >
                    <ListItemText primary="Total Amount" />
                  </ListItem>
                  <ListItem disablePadding className={classes.listItemText}
                    secondaryAction={
                      <ListItemButton>
                        <ListItemText primary="-$ 150.00" />
                      </ListItemButton>
                    }
                  >
                    <ListItemText primary="Charges" />
                  </ListItem>
                  <ListItem disablePadding className={classes.listItemText}
                    secondaryAction={
                      <ListItemText primary="+$ 150.00" />
                    }
                  >
                    <ListItemText primary="Rebate" />
                  </ListItem>
                </List>
              </Collapse>
              <List>
                <ListItem disablePadding
                  secondaryAction={
                    <ListItemText primary="$ 162500.00" />
                  }
                >
                  <ListItemText primary="Grand Total" />
                </ListItem>
              </List>
            </MainCard>

            <Card sx={{ background: 'rgba(176, 176, 176, 0.09)', boxShadow: 'none', padding: '20px', borderRadius: '10px' }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1">Status</Typography>
                <Button className={classes.btnComplete}>Completed</Button>
              </Stack>
              <Stepper orientation="vertical" activeStep={4}>
                {steps.map((item) => (
                  <Step key={item} active expanded className={classes.step}>
                    <StepLabel variant="h6">{item.step}</StepLabel>
                    <StepContent>
                    <Typography variant="h8">{item.date}</Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </>

  );
}
