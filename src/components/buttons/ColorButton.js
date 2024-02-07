import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      fontSize: 16,
      fontWeight: 500,
      padding: '5px 20px',
      color: theme.palette.common.blueTxt,
      background: '#E3F2FF',
      "&:hover": {
        background: "#E3F2FF",
      },
      textTransform: 'capitalize'
    },
  },
}));

export function ColorButton(props) {
  const classes = useStyles();
  const { children, onClick, width } = props;

  return (
    <Button className={classes.root} onClick={onClick} sx={{width: width}}>
      {children}
    </Button>
  );
}

ColorButton.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string
};
