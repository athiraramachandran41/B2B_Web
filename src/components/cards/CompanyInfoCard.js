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
            backgroundColor: theme.palette.common.lightGreyBg,
            boxShadow: 'none'
        },
    },
    companyImg: {
        borderRadius: 6,
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

export function CompanyInfoCard(props) {
    const classes = useStyles(props);
    const { image, date } = props;

    return (
        <Paper className={classes.paper}>
            <Stack direction="column" spacing={2}>
                <Typography variant="body3">Company Details</Typography>
                <img className={classes.companyImg} alt="image" src={image} />
                <Stack direction="row" spacing={2}>
                    <SideMenuIcon name={image} color='black' size={30} />
                    <Stack direction="column">
                        <Typography variant="h7">Joined on</Typography>
                        <Typography variant="body1">{date}</Typography>
                    </Stack>
                </Stack>
                <Stack>
                </Stack>
            </Stack>
        </Paper>
    );
}

CompanyInfoCard.propTypes = {
    date: PropTypes.string,
    image: PropTypes.string,
};
