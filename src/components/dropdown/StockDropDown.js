import {
  Box,
  Button,
  Divider,
  Grid,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import { dropDownArrow, userPlaceholder } from "../../assets";
import { useState } from "react";
import { countries } from "../../utilities/other";
import { sampleSelectItems } from "../../utilities";

const CountryMenuDropDown = (props) => {
  const {
    countryMenuAnchorEl,
    handleCountryMenuClose,
    handleCountryMenuItemClick,
  } = props;

  return (
    <Menu
      anchorEl={countryMenuAnchorEl}
      open={Boolean(countryMenuAnchorEl)}
      onClose={handleCountryMenuClose}
    >
      {countries.map((item) => (
        <MenuItem
          key={item.phone}
          onClick={() => handleCountryMenuItemClick(item)}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

const TypeMenuDropDown = (props) => {
  const { typeMenuAnchorEl, handleTypeMenuClose, handleTypeMenuItemClick } =
    props;

  return (
    <Menu
      anchorEl={typeMenuAnchorEl}
      open={Boolean(typeMenuAnchorEl)}
      onClose={handleTypeMenuClose}
    >
      {sampleSelectItems.map((item) => (
        <MenuItem
          key={item.id}
          onClick={() => handleTypeMenuItemClick(item.name)}
        >
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  );
};

const ColorMenuDropDown = (props) => {
  const { colorMenuAnchorEl, handleColorMenuClose, handleColorMenuItemClick } =
    props;

  return (
    <Menu
      anchorEl={colorMenuAnchorEl}
      open={Boolean(colorMenuAnchorEl)}
      onClose={handleColorMenuClose}
    >
      {sampleSelectItems.map((item) => (
        <MenuItem
          key={item.id}
          onClick={() => handleColorMenuItemClick(item.name)}
        >
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  );
};

export const StockDropDown = () => {
  const theme = useTheme();
  const [countryMenuAnchorEl, setCountryMenuAnchorEl] = useState(null);
  const [countrySelectedMenu, setCountrySelectedMenu] = useState("");
  const [typeMenuAnchorEl, setTypeMenuAnchorEl] = useState(null);
  const [typeSelectedMenu, setTypeSelectedMenu] = useState("");
  const [colorMenuAnchorEl, setColorMenuAnchorEl] = useState(null);
  const [colorSelectedMenu, setColorSelectedMenu] = useState("");

  const handleCountryMenuClick = (event) => {
    setCountryMenuAnchorEl(event.currentTarget);
  };

  const handleCountryMenuClose = () => {
    setCountryMenuAnchorEl(null);
  };

  const handleCountryMenuItemClick = (value) => {
    setCountrySelectedMenu(value);
    handleCountryMenuClose();
  };

  const handleTypeMenuClick = (event) => {
    setTypeMenuAnchorEl(event.currentTarget);
  };

  const handleTypeMenuClose = () => {
    setTypeMenuAnchorEl(null);
  };

  const handleTypeMenuItemClick = (value) => {
    setTypeSelectedMenu(value);
    handleTypeMenuClose();
  };

  const handleColorMenuClick = (event) => {
    setColorMenuAnchorEl(event.currentTarget);
  };

  const handleColorMenuClose = () => {
    setColorMenuAnchorEl(null);
  };

  const handleColorMenuItemClick = (value) => {
    setColorSelectedMenu(value);
    handleColorMenuClose();
  };

  return (
    <Grid
      container
      direction={"row"}
      sx={{
        height: 45,
        bgcolor: theme.palette.menuAlt.main,
        borderRadius: "8px",
      }}
    >
      <Grid item>
        <Button
          variant="contained"
          color="transparent"
          onClick={handleCountryMenuClick}
          disableElevation
          startIcon={
            <img
              loading="lazy"
              src={
                countrySelectedMenu.code
                  ? `https://flagcdn.com/48x36/${countrySelectedMenu.code.toLowerCase()}.png`
                  : userPlaceholder
              }
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "12px",
              }}
            />
          }
          endIcon={
            <img
              src={dropDownArrow}
              style={{
                width: "14px",
                height: "10px",
              }}
            />
          }
          sx={{ height: "100%" }}
        >
          {countrySelectedMenu.code || "Select"}
        </Button>
        <CountryMenuDropDown
          countryMenuAnchorEl={countryMenuAnchorEl}
          handleCountryMenuClose={handleCountryMenuClose}
          handleCountryMenuItemClick={handleCountryMenuItemClick}
        />
      </Grid>

      <Grid item>
        <Divider orientation="vertical" />
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="transparent"
          onClick={handleTypeMenuClick}
          style={{ textTransform: "none" }}
          disableElevation
          endIcon={
            <img
              src={dropDownArrow}
              style={{
                width: "14px",
                height: "10px",
              }}
            />
          }
          sx={{ height: "100%" }}
        >
          {typeSelectedMenu || "Select"}
        </Button>
        <TypeMenuDropDown
          typeMenuAnchorEl={typeMenuAnchorEl}
          handleTypeMenuClose={handleTypeMenuClose}
          handleTypeMenuItemClick={handleTypeMenuItemClick}
        />
      </Grid>

      <Grid item>
        <Divider orientation="vertical" />
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="transparent"
          onClick={handleColorMenuClick}
          style={{ textTransform: "none" }}
          disableElevation
          startIcon={
            <Box
              sx={{
                width: "16px",
                height: "16px",
                border: `2px solid ${theme.palette.black.main}`,
                borderRadius: "10px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "70%",
                  height: "70%",
                  bgcolor: theme.palette.black.main,
                  borderRadius: "10px",
                }}
              />
            </Box>
          }
          endIcon={
            <img
              src={dropDownArrow}
              style={{
                width: "14px",
                height: "10px",
              }}
            />
          }
          sx={{ height: "100%" }}
        >
          {colorSelectedMenu || "Select"}
        </Button>
        <ColorMenuDropDown
          colorMenuAnchorEl={colorMenuAnchorEl}
          handleColorMenuClose={handleColorMenuClose}
          handleColorMenuItemClick={handleColorMenuItemClick}
        />
      </Grid>
    </Grid>
  );
};
