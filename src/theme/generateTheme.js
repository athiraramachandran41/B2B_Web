import { createTheme } from "@mui/material/styles";
import themeTypography from './typography';
const generateTheme = (mode) => {
  const isDarkMode = mode === "dark";

  const palette = {
    mode,
    transparent: {
      main: isDarkMode ? "#00000000" : "#00000000",
    },
    common: {
      black: "#000",
      white: "#FFFFFF",
      lightGreyBg: "#F7F7F7",
      greyBg: "#E8E8E8",
      blueTxt: "#2C74FF",
      redBtn: "#FF1818",
      greyTxt: "#CECECE",
      bgclr: "#EDFAFF",
      greenBg: "#1ACA2C",
    },
    primary: {
      main: isDarkMode ? "#040404" : "#040404",
    },
    secondary: {
      main: isDarkMode ? "#FF80AB" : "#FF4081",
    },
    tertiary: {
      main: isDarkMode ? "#5D5D5D" : "#5D5D5D",
    },
    background: {
      main: isDarkMode ? "#F7FAFF" : "#F7FAFF",
    },
    white: {
      main: isDarkMode ? "#FFFFFF" : "#FFFFFF",
    },
    black: {
      main: isDarkMode ? "#000000" : "#000000",
    },
    blue: {
      main: isDarkMode ? "#2C74FF" : "#2C74FF",
    },
    gray: {
      main: isDarkMode ? "#757575" : "#757575",
    },
    lightGray: {
      main: isDarkMode ? "#F9F9F9" : "#F9F9F9",
    },
    theme: {
      main: isDarkMode ? "#2C74FFE5" : "#2C74FFE5",
      contrastText: isDarkMode ? "#FFFFFF" : "#FFFFFF",
    },
    vlightTheme: {
      main: isDarkMode ? "#EDFAFF" : "#EDFAFF",
    },
    lightTheme: {
      main: isDarkMode ? "#D0F2FF" : "#D0F2FF",
    },
    altThemeOne: {
      main: isDarkMode ? "#FF8D06" : "#FF8D06",
    },
    altThemeOneLight: {
      main: isDarkMode ? "#FFF8E7" : "#FFF8E7",
    },
    altThemeTwo: {
      main: isDarkMode ? "#FF4242" : "#FF4242",
    },
    altThemeTwoLight: {
      main: isDarkMode ? "#FFEAEA" : "#FFEAEA",
    },
    altThemeThree: {
      main: isDarkMode ? "#12B322" : "#12B322",
    },
    altThemeThreeLight: {
      main: isDarkMode ? "#E9FFEB" : "#E9FFEB",
    },
    menu: {
      main: isDarkMode ? "#FAFAFA" : "#FAFAFA",
    },
    menuAlt: {
      main: isDarkMode ? "#F8F8F8" : "#F8F8F8",
    },
    menuHeader: {
      main: isDarkMode ? "#F5F5F5" : "#F5F5F5",
    },
    menuSel: {
      main: isDarkMode ? "#323232" : "#323232",
    },
    menuSelLight: {
      main: isDarkMode ? "#F0EAEA" : "#F0EAEA",
    },
    badgeTheme: {
      main: isDarkMode ? "#2C74FFE5" : "#2C74FFE5",
      contrastText: isDarkMode ? "#FFFFFF" : "#FFFFFF",
    },
    badgePrimary: {
      main: isDarkMode ? "#FF4141" : "#FF4141",
      contrastText: isDarkMode ? "#FFFFFF" : "#FFFFFF",
    },
    badgeSecondary: {
      main: isDarkMode ? "#767676" : "#767676",
      contrastText: isDarkMode ? "#FFFFFF" : "#FFFFFF",
    },
    search: {
      main: isDarkMode ? "#EEEEEE" : "#EEEEEE",
    },
    searchDark: {
      main: isDarkMode ? "#929292" : "#929292",
    },
    line: {
      main: isDarkMode ? "#E0E0E0" : "#E0E0E0",
    },
  };

  return createTheme({
    palette: palette,
    typography: themeTypography(),
  });
};

export { generateTheme };
