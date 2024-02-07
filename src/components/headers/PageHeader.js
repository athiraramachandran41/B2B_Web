import { Paper, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import {
  CounterCard,

} from "../../components";
const useStyles = makeStyles((theme) => ({
  paper: {
    "&.MuiPaper-root": {
      borderRadius: 0,
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      boxShadow: 'none'
    },
  },
}));

export function PageHeader(props) {

  const classes = useStyles();
  const { title, counterTitle, counterCount, counterColor, counterIcon, counter, timer, onClickPrimary, onClickSecondary } = props;

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="subtitle3">{title}</Typography>
        </Grid>
        {counter ? <>

          <Grid item>
            <CounterCard
              title={counterTitle}
              count={counterCount}
              color={counterColor}
              icon={counterIcon}
            />
          </Grid>
        </> : <>

        </>
         
      }
        <Grid item xs />
        {timer? <>
          <Grid item>
          <Typography variant="subtitle2">Order closes At: 3:00 pM</Typography>
        </Grid>
        </>: <></>
        }
       
      </Grid>
    </Paper>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  counter: PropTypes.bool,
  timer: PropTypes.bool,
  counterTitle: PropTypes.string,
  counterCount: PropTypes.string,
  counterColor: PropTypes.string,
  counterIcon: PropTypes.string,
  onClickPrimary: PropTypes.func,
  onClickSecondary: PropTypes.func,
};
