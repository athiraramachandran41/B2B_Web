import React, { Children, Fragment, useState } from "react";
import {
  SideMenuDrawer
} from "../../components";
import { Box, Stack, useTheme } from "@mui/material";


export function Layout(props) {
  const { children } = props;
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsOpen(true);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
    <Stack direction={"row"}>
    <SideMenuDrawer
        isOpen={isOpen}
        openMenu={handleOpenMenu}
        closeMenu={handleCloseMenu}
      />
      <Box
        sx={{
          width: "100%",
          // height: "100vh",
          pt: 2,
          pb: 2,
          ml: 15,
          mr: 2,
        }}
      >
      {children}
      </Box>
    </Stack>
  </Fragment>
    
  );
}
