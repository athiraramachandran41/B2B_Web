import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { sampleTreeItems } from "../../utilities";
import { Badge, Divider, ListItemButton } from "@mui/material";
import { addSquare, minusSquare } from "../../assets";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: "transparent !important",
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.transparent.main})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

const StyledTreeItem = React.forwardRef(function StyledTreeItem(props, ref) {
  const theme = useTheme();
  const {
    productSelected,
    onProductSelected,
    bgColor,
    color,
    labelIcon,
    labelText,
    labelBadge,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const listItemButtonStyle = {
    borderRadius: 1,
    pt: 1,
    pb: 1,
    pl: 1,
    pr: 3,
    mt: "6px",
    mb: "6px",
    "&.Mui-selected": {
      backgroundColor: theme.palette.menuSel.main,
      "&:hover": {
        backgroundColor: theme.palette.menuSel.main,
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.menuSelLight.main,
    },
  };

  const menuSelected = (nodeId) => {
    if (props.children === null || props.children.length === 0) {
      onProductSelected(nodeId);
    }
  };

  return (
    <StyledTreeItemRoot
      label={
        <>
          {labelIcon !== undefined && <Divider sx={{ ml: -6, mr: -2 }} />}
          <ListItemButton
            onClick={() => {
              menuSelected(props.nodeId);
            }}
            selected={productSelected === props.nodeId}
            sx={listItemButtonStyle}
          >
            {labelIcon !== undefined && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: "6px",
                }}
              >
                <img
                  src={labelIcon}
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            )}
            <Typography
              sx={{
                color:
                  productSelected === props.nodeId
                    ? theme.palette.white.main
                    : theme.palette.primary.main,
                fontSize: 16,
                fontWeight: 600,
                flexGrow: labelIcon !== undefined ? 1 : 0,
              }}
            >
              {labelText}
            </Typography>
            <Badge
              badgeContent={labelBadge}
              color={
                productSelected === props.nodeId
                  ? "badgeTheme"
                  : "badgeSecondary"
              }
              sx={{ ml: 3 }}
            />
          </ListItemButton>
        </>
      }
      {...other}
      ref={ref}
    />
  );
});

const RenderTreeMenu = (props) => {
  const { nodes, productSelected, onProductSelected } = props;
  return (
    <StyledTreeItem
      productSelected={productSelected}
      onProductSelected={onProductSelected}
      key={nodes.id}
      nodeId={nodes.id}
      labelText={nodes.name}
      labelIcon={nodes.icon}
      labelBadge={nodes.badge}
    >
      {nodes.children?.map((node) => (
        <RenderTreeMenu
          nodes={node}
          productSelected={productSelected}
          onProductSelected={onProductSelected}
        />
      ))}
    </StyledTreeItem>
  );
};

export const TreeMenu = (props) => {
  const theme = useTheme();
  const { productSelected, onProductSelected } = props;

  return (
    <TreeView
      //defaultExpanded={["3"]}
      defaultCollapseIcon={
        <img src={minusSquare} style={{ width: "20px", height: "20px" }} />
      }
      defaultExpandIcon={
        <img src={addSquare} style={{ width: "20px", height: "20px" }} />
      }
      //defaultEndIcon={<div style={{ width: 24 }} />}
      //sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {sampleTreeItems.map((node) => (
        <RenderTreeMenu
          nodes={node}
          productSelected={productSelected}
          onProductSelected={onProductSelected}
        />
      ))}
    </TreeView>
  );
};
