import { Card, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "&.MuiCard-root": {
            borderRadius: '10px',
            background: '#FFF',
            boxShadow: 'none',
            border: ' 1px solid #EAEAEA',
            // padding: 30
        },
    },
}));

export function OutlinedCard(props) {
    const classes = useStyles();
    const { children } = props;

    return (
        <Card className={classes.root}>
            {children}
        </Card>
    );
}