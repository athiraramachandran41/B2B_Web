import { Paper, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

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
}));

export function DashboardHeader(props) {
  const classes = useStyles();
  const { onClickPrimary, onClickSecondary } = props;

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="subtitle3">Dashboard</Typography>
        </Grid>
        <Grid item xs />
        <Grid item>
        <Typography variant="subtitle2">Remaining : 00:39 sec</Typography>
        </Grid>
      
      </Grid>
    </Paper>
  );
}

DashboardHeader.propTypes = {
  onClickPrimary: PropTypes.func,
  onClickSecondary: PropTypes.func,
};
