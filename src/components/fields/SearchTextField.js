import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import InputAdornment from '@mui/material/InputAdornment';
import { searchNormal } from "../../assets";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: 'transparent',
    }, 
    "& .MuiInputBase-root  ": {
      backgroundColor: '#EEEEEE',
      borderRadius: '6px'
    },  
   
  },
}));

export function SearchTextField(props) {
  const classes = useStyles();
  const { placeholder, onChange } = props;

  return (
    <TextField
      id="search-field"
      className={classes.root}
      placeholder={placeholder}
      onChange={onChange}
      variant="outlined"
      size="small"
      InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{backgroundColor: '#EEEEEE'}}>
             <img style={{ fontSize: 30 }} alt="image" src={searchNormal} />
            </InputAdornment>
          ),
        }}
    />
  );
}

SearchTextField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
