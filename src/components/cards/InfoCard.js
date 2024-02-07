import { Paper, Grid, Typography, Stack, Box, Checkbox, FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SearchTextField } from "..";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import {
  ActionButton,
  customCheckBox
} from "../../components";

const useStyles = makeStyles((theme) => ({
  paper: {
    "&.MuiPaper-root": {
      borderRadius: 0,
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      backgroundColor: theme.palette.common.greyBg,
      boxShadow: 'none'
    },
  },
  stackJustify: {
    "&.MuiStack-root": {
      justifyContent: 'space-between'
    },
  },
  center: {
    justifyContent: 'center'
  },
  grid: {
    display: 'grid'
  }
}));
//---------------customised checkbox --------->
const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '3px',
  width: 20,
  height: 20,
  padding: "0 !important",
  boxShadow: 'none',
  backgroundColor: 'transparent',
  border: '1px solid black',
 
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'transparent',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(https://thumbs.dreamstime.com/z/black-check-mark-icon-isolated-transparent-background-black-checkmark-icon-black-check-mark-icon-isolated-transparent-126448069.jpg)",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#transparent',
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={
        <Box sx={{    
          border: '1px solid black',
          width: '20px',
          height: '20px',
          borderRadius: '3px'}}>
      <DoneIcon sx={{width: '20px',
    height: '20px'}}/>
        </Box>
      }
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}
export function InfoCard(props) {
  const classes = useStyles();
  const { firstTotal, secoundTotal, thirdTotal, onClickPrimary } = props;

  return (
    <Paper className={classes.paper}>
      <Stack direction='row' spacing={2} alignItems="center" className={classes.stackJustify}>
        <Box>
          <Typography variant="h5">Total Quantity</Typography>
          <Typography variant="h5">{firstTotal}</Typography>
        </Box>
        <Box>
          <Typography variant="h5">Total Amount</Typography>
          <Typography variant="h5">{secoundTotal}</Typography>
        </Box>
        <Box>
          <Typography variant="h5">Order No:</Typography>
          <Typography variant="h5">{thirdTotal}</Typography>
        </Box>
        <Box className={classes.grid}>
        <ActionButton>Download PO</ActionButton>
        <FormControlLabel className={classes.center} onChange={onClickPrimary} control={<BpCheckbox />} label="view as PO" />
        </Box>
        <Box className={classes.grid}>
        <ActionButton>Download Order</ActionButton>
          <FormControlLabel className={classes.center}  control={<BpCheckbox />} label="view as Order" />
        </Box>
      </Stack>
    </Paper>
  );
}

InfoCard.propTypes = {
  firstTotal: PropTypes.string,
  secoundTotal: PropTypes.string,
  thirdTotal: PropTypes.string,
  onClickPrimary: PropTypes.func,
};
