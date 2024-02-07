import { Fragment } from "react";
import PropTypes from "prop-types";
import {
  InfoCircle,
  Profile2User,
  Element3,
  Activity,
  ShoppingCart,
  ShoppingBag,
  Tag,
  UserAdd,
  DollarSquare,
  Setting,
  Notification,
  Box,
  Logout
} from "iconsax-react";
import { useTheme } from "@mui/material";

export const SideMenuIcon = (props) => {
  const { id, selected } = props;
  const theme = useTheme();

  const getIcon = () => {
    switch (id) {
      case 1:
        return (
          <Element3
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 2:
        return (
          <Activity
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 3:
        return (
          <ShoppingCart
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 4:
        return (
          <ShoppingBag
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 5:
        return (
          <DollarSquare
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 6:
        return (
          <UserAdd
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 7:
        return (
          <Setting
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 8:
        return (
          <Notification
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 9:
        return (
          <Logout
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 10:
        return (
          <Setting
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      case 11:
        return (
          <Notification
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
      default:
        return (
          <InfoCircle
            variant={selected ? "Bold" : "Outline"}
            size={24}
            color={
              selected ? theme.palette.common.white : '#0F8EFF'
            }
          />
        );
    }
  };

  return <Fragment>{getIcon()}</Fragment>;
};

SideMenuIcon.propTypes = {
  id: PropTypes.number,
  selected: PropTypes.bool,
};
