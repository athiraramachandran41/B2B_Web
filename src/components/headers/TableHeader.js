import { Paper, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SearchTextField } from "../../components";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    "&.MuiPaper-root": {
      borderRadius: 0,
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      backgroundColor: theme.palette.common.greyBg,
      boxShadow:'none'
    },
  },
}));

export function TableHeader(props) {
  const classes = useStyles();
  const { title, amount } = props;

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1">{amount}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

TableHeader.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
};
