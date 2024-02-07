import { Paper, Typography, Stack, Avatar, alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SideMenuIcon } from "../../assets";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme, props) => ({
  paper: {
    flexGrow: 1,
    minHeight: 50,
    "&.MuiPaper-root": {
      // borderRadius: 0,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.common.greyBg,
      boxShadow: 'none'
    },
  },
  userText: {
    "&.MuiTypography-root": {
      fontSize: 20,
      fontWeight: 500,
    },
  },
  roleText: {
    "&.MuiTypography-root": {
      fontSize: 16,
      fontWeight: 500,
    },
  },
  avatarImage: {
    "&.MuiAvatar-root": {
      width: 55,
      height: 55,
    },
  },
}));

export function UserCard(props) {
  const classes = useStyles(props);
  const { id, role, user, image, color } = props;

  return (
    <Paper className={classes.paper} key={id}>
      <Stack direction="row" spacing={2}>
        <Avatar
          className={classes.avatarImage}
          sx={{ bgcolor: color }}
        >
          <SideMenuIcon name={image} color='black' size={30} />
        </Avatar>
        <Stack>
        <Stack> 
          <Typography className={classes.userText}>{user}</Typography>
          <Typography className={classes.removeText}>Remove</Typography>
          </Stack>
          <Typography className={classes.roleText}>Role : {role}</Typography>          
        </Stack>
      </Stack>
    </Paper>
  );
}

UserCard.propTypes = {
  id: PropTypes.number,
  role: PropTypes.string,
  user: PropTypes.number,
  image: PropTypes.string,
  color: PropTypes.string,
};
