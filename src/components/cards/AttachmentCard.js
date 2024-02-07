import { Paper, Typography, Stack, Avatar, alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { upload } from "../../assets";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

import { Fragment, useState } from "react";

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

export function AttachmentCard(props) {
  const classes = useStyles(props);
  const { name, id, title, count, icon, color } = props;
  const [progress, setProgress] = useState(0);
  const [fileData, setFile] = useState();

  return (
    <Fragment>
    <Cover progress={progress}>
      <Left>
        <ImageContainer>
        <img src={upload} style={{width:"19px"}}></img>
        </ImageContainer>
        <LeftDetails>
          <h4 style={{width:"100%",margin: 0}}>{name}</h4>
          <h6 style={{fontSize:'14px',textAlign:'left', margin: 0, fontWeight: 400}}>No file</h6>
          {/* <h6 style={{padding:"25px 0px  40px 0px "}}>{fileData ? '' : "No file"}</h6> */}
          {/* <h6 style={{color:'#A04646',fontSize:'13px',position:'absolute',left:0}}>*If Son or Daughter age below 15, need a copy of mother residence visa</h6> */}
          {/* <h6>{fileData ? truncateText(fileData.name, 12) : "No file"}</h6> */}
        </LeftDetails>
      </Left>
      <Right>
        {fileData ? (
          <p style={{float: 'inline-end'}}
          >
            Remove
          </p>
        ) : (
            <InputCover style={{top:10, fontWeight:500}}>
            <h4>
              Upload 
            </h4>
            <ArrowUpwardOutlinedIcon sx={{ 
                color: '#0F8EFF',
                fontSize: '22px',
                marginLeft: '5px',
            }}/>
            <InputButton
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .png"
            //   onChange={handleFileChange}
            />
          </InputCover>
        )}
      </Right>

      {/* {error && <p className='error_message'>{errorMessage}</p>} */}
    </Cover>
    </Fragment>
  );
}

AttachmentCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.string,
  color: PropTypes.string,
};
