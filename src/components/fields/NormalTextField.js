import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export function NormalTextField(props) {
  const classes = useStyles();
  const { label, multiline, disabled, onChange, type, value } = props;

  return (
    <TextField
      id="normal-field"
      className={classes.root}
      label={label}
      multiline={multiline}
      onChange={onChange}
      type={type}
      variant="outlined"
      disabled={disabled}
      value={value}
    />
  );
}

NormalTextField.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};
