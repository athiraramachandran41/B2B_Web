import { Paper, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SearchTextField } from "..";
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

export function ListingSearchHeader(props) {
  const classes = useStyles();
  const { title, placeholder } = props;

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="subtitle3">{title}</Typography>
        </Grid>
        {/* <Grid item>
          <HeaderButton type="primary" showIcon={true} onClick={onClickPrimary}>
            {btnTitle}
          </HeaderButton>
        </Grid> */}
        <Grid item>
          <SearchTextField placeholder={placeholder} />
        </Grid>
        <Grid item xs />
        
        <Grid item>
        <Typography variant="subtitle2">Remaining : 00:39 sec</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

ListingSearchHeader.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
};
