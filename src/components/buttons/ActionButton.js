import { Button, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      fontSize: 16,
      fontWeight: 500,
      padding: '5px 20px',
      color: "white", 
      "&:hover": {
        background: theme.palette.common.blueTxt,
      },
      textTransform: 'capitalize'
    },
  },
}));

export function ActionButton(props) {
  const theme = useTheme();
  const classes = useStyles();
  const { children, onClick, width, bgcolor } = props;

  return (
    <Button className={classes.root} onClick={onClick} sx={{width: width, bgcolor: bgcolor ? bgcolor : theme.palette.common.blueTxt}}>
      {children}
    </Button>
  );
}

ActionButton.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string,
  bgcolor: PropTypes.string,
};
