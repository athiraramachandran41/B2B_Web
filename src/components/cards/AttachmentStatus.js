import { Button, Box, Modal, Typography, Stack, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { upload } from "../../assets";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import {
  ColorButton,
  ActionButton,
  AttachmentCard
} from "../../components";

const Cover = styled.div`
  padding: 15px 10px;
  border-bottom: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: 0.4s ease;
  position: relative;
  p {
    &.error_message {
      position: absolute;
      bottom: 5px;
      font-size: 12px;
      left: 17%;
    }
  }
  &::after {
    content: "";
    width: ${({ progress }) => progress + "%"};
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #27bf6f70;
    border-radius: 5px;
    transition: 0.4s ease;
  }
`;
const ImageContainer = styled.div`
  width: 70px;
  height: 53px;
  background: #DDEFFF;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    color: #0F8EFF;
    font-size: 24px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
const Left = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const LeftDetails = styled.div`
  width:100%;
  h4 {
    font-size: 14px;
    line-height: 1.5;
     @media only screen and (max-width: 480px){
      font-size:12px;
     }
  }
  h6 {
    color: #9a9a9a;
  }
`;
const Right = styled.div`
  p {
    color: #ff3e3e;
    font-size: 14px;
    cursor: pointer;
  }
`;
const InputButton = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const InputCover = styled.div`
  width: 114px;
  height: 40px;
  background: red;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0F8EFF;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    width: 84px;
    height: 40px;
  }

  h4 {
    color: #0F8EFF;
    font-size: 14px;
  }
`;
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
  approved: {
    "&.MuiButton-root": {
      background: '#DEFFE1',
      borderRadius: '25px',
      boxShadow: 'none',
      color: '#05BE18',
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'capitalize',
      "&:hover": {
        background: '#DEFFE1',
        boxShadow: 'none',
      },
    }
  },
  processing: {
    "&.MuiButton-root": {
      background: '#FFED91',
      borderRadius: '25px',
      boxShadow: 'none',
      color: '#000000',
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'capitalize',
      "&:hover": {
        background: '#FFED91',
        boxShadow: 'none',
      },
    }
  },
  rejected: {
    "&.MuiButton-root": {
      background: '#FFE4E4',
      borderRadius: '25px',
      boxShadow: 'none',
      color: '#FF4242',
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'capitalize',
      "&:hover": {
        background: '#FFE4E4',
        boxShadow: 'none',
      },
    }
  },
  upload: {
    "&.MuiButton-root": {
      background: '#2C74FF',
      borderRadius: '4px',
      boxShadow: 'none',
      color: '#FFFFFF',
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'capitalize',
      margin: '0px 20px',
      "&:hover": {
        background: '#2C74FF',
        boxShadow: 'none',
      },
    }
  },
  modelHeader: {
    padding: '20px 40px',
    borderBottom: '1px solid #DDDDDD',
    textAlign: 'center'
  },
  modelBody: {
    padding: '20px 40px',
  },
  modelFooter: {
    padding: '20px 40px',
  },
}));

export function AttachmentStatus(props) {
  const classes = useStyles(props);
  const { name, id, status, count, icon, color } = props;
  const [progress, setProgress] = useState(0);
  const [fileData, setFile] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <Fragment>
      <Cover progress={progress}>
        <Left>
          <ImageContainer>
            <img src={upload} style={{ width: "19px" }}></img>
          </ImageContainer>
          <LeftDetails>
            <h4 style={{ width: "100%", margin: 0 }}>{name}</h4>
          </LeftDetails>
        </Left>
        <Right>
          {status === "approved" &&
            <Button variant="contained" className={classes.approved}>
              Approved
            </Button>
          }
          {status === "processing" &&
            <Button variant="contained" className={classes.processing}>
              Processing
            </Button>
          }
          {status === "rejected" &&
            <>
              <Button className={classes.upload} onClick={handleOpen}>Re-Upload</Button>
              <Button variant="contained" className={classes.rejected}>
                Rejected
              </Button>
            </>
          }
        </Right>
      </Cover>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className={classes.modelHeader}>
            <Typography variant="subtitle4">Upload File</Typography>
          </Box>
          <Box className={classes.modelBody}>
            <AttachmentCard />
          </Box>
          <Box className={classes.modelFooter}>
            <Stack direction="row" spacing={2} className={classes.center}>
              <ColorButton width="50%">Cancel</ColorButton>
              <ActionButton 
              width="50%" 
              onClick={() => {
                    navigate("/login");
                }}>Upload</ActionButton>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}

AttachmentStatus.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.string,
  color: PropTypes.string,
};
