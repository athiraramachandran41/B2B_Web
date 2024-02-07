import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import DoneIcon from '@mui/icons-material/Done';
import { Box } from "@mui/material";


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
export function customCheckBox(props) {
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