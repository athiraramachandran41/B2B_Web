import React, { Fragment, useState } from "react";
import { Paper, Grid, Typography, Divider, Box, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SearchTextField, ActionButton } from "../../components";
import PropTypes from "prop-types";


import {
  AddUser,
} from "../../pages";

const useStyles = makeStyles((theme) => ({
  paper: {
    "&.MuiPaper-root": {
      borderRadius: 10,
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  divider: {
    padding: "10px 0px"
  }
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  background: '#FFF',
};


export function ListingHeader(props) {
  const classes = useStyles();
  const { title, placeholder, bgcolor, alignment, divider, user } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
     <Paper className={alignment && classes.paper} sx={{ boxShadow: 'none',bgcolor: bgcolor ? bgcolor : 'white'}}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="subtitle3">{title}</Typography>
        </Grid>
        <Grid item xs />
        {placeholder ?
          <>
            <Grid item>
              <SearchTextField placeholder={placeholder} />
            </Grid>
          </> : <> </>
        }
        {user ?
          <>
            <Grid item>
            <ActionButton sx={{textTransform: 'capitalize'}} onClick={handleOpen}>{user}</ActionButton>
            </Grid>
          </> : <> </>
        }
      </Grid>
      {divider ?
        <Divider className={classes.divider} />
        : <> </>
      }
    </Paper>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <AddUser />
        </Box>
      </Modal>
    </Fragment>
   
  );
}

ListingHeader.propTypes = {
  title: PropTypes.string,
  bgcolor: PropTypes.string,
  alignment: PropTypes.bool,
  divider: PropTypes.bool,
  placeholder: PropTypes.string,
  user: PropTypes.string,
};
