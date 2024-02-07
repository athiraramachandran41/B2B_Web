import { Paper, Typography, Stack, Avatar, alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardImage } from "../../assets";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme, props) => ({
  paper: {
    flexGrow: 1,
    minHeight: 50,
    "&.MuiPaper-root": {
      borderRadius: 10,
      padding: theme.spacing(2),
      boxShadow: 'none'
    },
  },
  counterText: {
    "&.MuiTypography-root": {
      fontSize: 20,
      fontWeight: 600,
    },
  },
  titleText: {
    "&.MuiTypography-root": {
      fontWeight: 400,
      fontSize: 16,
    },
  },
  avatarImage: {
    "&.MuiAvatar-root": {
      width: 55,
      height: 55,
    },
  },
}));

export function CounterCard(props) {
  const classes = useStyles(props);
  const { id, title, count, icon, color } = props;

  return (
    <Paper className={classes.paper} key={id} sx={{ bgcolor: alpha(color, 0.1) }}>
      <Stack direction="row" spacing={2}>
        <Avatar
          className={classes.avatarImage}
          sx={{ bgcolor: color }}
        >
          <CardImage name={icon}/>
        </Avatar>
        <Stack>
          <Typography className={classes.titleText}>{title}</Typography>
          <Typography className={classes.counterText}>{count}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

CounterCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.string,
  color: PropTypes.string,
};
