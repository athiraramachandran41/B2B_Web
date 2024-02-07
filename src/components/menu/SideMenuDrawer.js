import React, { Fragment, useState } from "react";
import {
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Grid,
  useTheme,
  Avatar,
  useMediaQuery,
  Collapse,
  ListItemIcon,
  Fade,
  Typography,
  ListItem,
  Box,
  Stack
} from "@mui/material";
import { logo } from "../../assets";
import { useNavigate } from "react-router-dom";
import { sideMenuItems } from "../../utilities";
import { SideMenuIcon } from "../../icons/SideMenuIcon";

export const SideMenuDrawer = (props) => {
  const { isOpen, openMenu, closeMenu } = props;
  const navigate = useNavigate();
  const [selected, setSelected] = useState(
    1
    //JSON.parse(localStorage.getItem("sideMenuId"))
  );
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  // useEffect(() => {
  //   localStorage.setItem("sideMenuId", JSON.stringify(selected));
  // }, [selected]);

  const menuSelected = (m) => {
    setSelected(m.id);
    navigate(m.link);
    if (!matches) {
      closeMenu();
    }
  };

  const listItemButtonStyle = {
    height: 45,
    borderRadius: 2,
    mb: 1.5,
    pl: 2.5,
    "&.Mui-selected": {
      backgroundColor: "#2C74FFE5",
      "&:hover": {
        backgroundColor: "#2C74FFE5",
      },
    },
    "&:hover": {
      backgroundColor: "#D0F2FF",
    },
  };

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      PaperProps={{
        sx: {
          backgroundColor: '#EDFAFF',
        },
      }}
    >
      {/* disable scrollbar */}
      <style>
        {`
          /* Hide scrollbar for Firefox */
          ::-webkit-scrollbar {
          display: none;
          }
          /* Hide scrollbar for IE/Edge */
          -ms-overflow-style: none;
        `}
      </style>
      <Collapse orientation="horizontal" in={isOpen} collapsedSize={100}>
        <List
          sx={{
            padding: 2,
            width: isOpen ? 250 : 65,
          }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
        <ListItem
            sx={{
              borderRadius: 2,
              bgcolor: "#D0F2FF",
              "&:hover": {
                backgroundColor: "#D0F2FF",
              },
              height: 60,
            }}
          >
            <Avatar sx={{ bgcolor: theme.palette.common.black }}>D</Avatar>
            <Fade in={isOpen} timeout={{ enter: 1000 }}>
              <ListItemText
                sx={{
                  ml: 1.5,
                }}
                primaryTypographyProps={{
                  color: '#040404',
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                Trading Company
              </ListItemText>
            </Fade>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              borderRadius: 2,
              height: 60,
              mt: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#FF4141',
                width: 50,
                height: 50,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              AJ
            </Avatar>
            {isOpen && (
              <Fade in={isOpen} timeout={{ enter: 1000 }}>
                <Grid item sx={{ ml: 1.5, width: 188 }}>
                  <Typography
                    sx={{
                      color: '#040404',
                      fontSize: 20,
                      fontWeight: 500,
                      display: "-webkit-box",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                    }}
                  >
                    Adam John
                  </Typography>
                  <Typography
                    sx={{
                      color: '#040404',
                      fontSize: 16,
                      fontWeight: 400,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    adamjohn@yopmail.com
                  </Typography>
                </Grid>
              </Fade>
            )}
          </ListItem>
          <Box
            sx={{
              mt: 2,
              mb: 2,
              ml: -2,
              mr: -2,
              height: "2px",
              bgcolor: theme.palette.common.white,
            }}
          />
          {sideMenuItems[0].map((m, i) => {
            return (
              <ListItemButton
                key={i}
                sx={listItemButtonStyle}
                selected={selected === m.id}
                onClick={() => {
                  menuSelected(m);
                }}
              >
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <SideMenuIcon id={m.id} selected={selected === m.id} />
                </ListItemIcon>
                <Fade in={isOpen} timeout={{ enter: 1000 }}>
                  <ListItemText
                    sx={{
                      ml: 2,
                    }}
                    primaryTypographyProps={{
                      color:
                        selected === m.id
                          ? theme.palette.common.white
                          : '#040404',
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {m.title}
                  </ListItemText>
                </Fade>
              </ListItemButton>
            );
          })}
          <Divider sx={{ mt: 2, mb: 2, ml: 3, mr: 3 }} />
          {sideMenuItems[1].map((m, i) => {
            return (
              <ListItemButton
                key={i}
                sx={listItemButtonStyle}
                selected={selected === m.id}
                onClick={() => {
                  menuSelected(m);
                }}
              >
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <SideMenuIcon id={m.id} selected={selected === m.id} />
                </ListItemIcon>
                <Fade in={isOpen} timeout={{ enter: 1000 }}>
                  <ListItemText
                    sx={{
                      ml: 2,
                    }}
                    primaryTypographyProps={{
                      color: '#040404',
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {m.title}
                  </ListItemText>
                </Fade>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </Drawer>
  );
};
