import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiCard-root": {
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.10)',
        padding: 30
    },
  },
}));

export function MainCard(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <Card className={classes.root}>
      {children}
    </Card>
  );
}