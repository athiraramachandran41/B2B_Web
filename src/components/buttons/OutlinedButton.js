import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      fontSize: 16,
      fontWeight: 500,
      padding: '5px 20px',
      borderRadius: 8,
      color: theme.palette.common.blueTxt,
      textTransform: 'capitalize'
    },
  },
}));

export function OutlinedButton(props) {
  const classes = useStyles();
  const { children, onClick } = props;

  return (
    <Button variant="outlined" endIcon={<ArrowDownwardIcon />} className={classes.root} onClick={onClick}>
      {children}
    </Button>
  );
}

OutlinedButton.propTypes = {
  onClick: PropTypes.func,
};
