import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  Popover,
  TextField,
  InputAdornment
} from "@mui/material";
import { Fragment, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  ColorButton,
  ActionButton
} from "../../components";
import { sampleStockItems } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: 'transparent',
    },
    "& .MuiInputBase-root  ": {
      backgroundColor: '#EEEEEE',
      borderRadius: '6px',
      "&.MuiInputBase-input": {
        padding: '10px'
      }
    },

  },
  popoverHead: {
    textAlign: "center",
    padding: '10px'
  }
}));

const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let j = 0; j < 3; j++) {
    const value = (hash >> (j * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
};

export const StockTable = () => {
  const theme = useTheme();
  const classes = useStyles();

  const headerStyle = {
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 600,
  };

  // Popover 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // Popover2 
  const [anchorAddQuantity, setAnchorAddQuantity] = useState(null);
  const openAddQuantity = Boolean(anchorAddQuantity);
  const idAdd = openAddQuantity ? 'add-quantity' : undefined;
  const handleOpenAddQuantity = (event) => {
    setAnchorAddQuantity(event.currentTarget);
  };

  const handleCloseAddQuantity = () => {
    setAnchorAddQuantity(null);
  };
  return (
    <Fragment>
      <TableContainer
        component={Box}
        border={1}
        borderColor={theme.palette.line.main}
        borderRadius={2}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={headerStyle}>
                No.
              </TableCell>
              <TableCell sx={headerStyle}>Product</TableCell>
              <TableCell sx={headerStyle}>Quantity</TableCell>
              <TableCell sx={headerStyle}>My Price</TableCell>
              <TableCell sx={headerStyle}>Best price</TableCell>
              <TableCell sx={headerStyle}>Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleStockItems.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{ verticalAlign: "top", textAlign: "center" }}
                  sx={{ width: 40 }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {index + 1}
                  </Typography>
                </TableCell>
                <TableCell style={{ verticalAlign: "top", textAlign: "left" }}>
                  <Stack direction={"column"}>
                    <Typography
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: 16,
                        fontWeight: 400,
                      }}
                    >
                      {item.productName}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.tertiary.main,
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {item.modelName}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  style={{ verticalAlign: "top", textAlign: "left" }}
                  sx={{ width: 150 }}
                >
                  <Typography
                    aria-describedby={idAdd}
                    onClick={handleOpenAddQuantity}
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: 16,
                      fontWeight: 500,
                      borderRadius: '8px',
                      background: '#F2F2F2',
                      padding: '10px',
                      width: '50px',
                      textAlign: 'center',
                      cursor: 'pointer'

                    }}
                  >
                    {item.quantity}
                  </Typography>
                </TableCell>

                <TableCell
                  style={{ verticalAlign: "top", textAlign: "left" }}
                  sx={{ width: 300 }}
                >
                  <Stack direction={"column"} spacing={1}>
                    {item.myPrice?.map((pItem, pIndex) => (
                      <Stack
                        direction={"row"}
                        display={"flex"}
                        alignItems={"center"}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            mt: pIndex === 0 ? "0px" : "4px",
                            width: "40px",
                            height: "40px",
                            bgcolor: stringToColor(`${pItem.priceGap}+`),
                            borderRadius: 2,
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          <Typography
                            sx={{
                              color: theme.palette.white.main,
                              fontSize: 12,
                              fontWeight: 500,
                            }}
                          >
                            {pItem.priceGap}+
                          </Typography>
                        </Box>
                        <Typography
                          aria-describedby={id}
                          onClick={handleClick}
                          sx={{
                            ml: "14px",
                            mr: "4px",
                            color: theme.palette.primary.main,
                            fontSize: 16,
                            fontWeight: 500,
                            borderRadius: '8px',
                            background: '#F2F2F2',
                            padding: '10px',
                            cursor: 'pointer'
                          }}
                        >
                          {pItem.price}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </TableCell>
                <TableCell> $ {item.bestPrice}</TableCell>
                <TableCell>{item.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Stack direction="row" spacing={1} sx={{ p: 1.5 }} >
          <TextField
            fullWidth
            id="outlined-required"
            variant="outlined"
            className={classes.root}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <ActionButton>Done</ActionButton>
        </Stack>
      </Popover>

      <Popover
        id={idAdd}
        open={openAddQuantity}
        anchorEl={anchorAddQuantity}
        onClose={handleCloseAddQuantity}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Stack direction="column" spacing={1} sx={{ p: 1.5 }} >
          <Typography variant="body1" className={classes.popoverHead}>Enter Quantity</Typography>
          <TextField
            fullWidth
            id="outlined-required"
            variant="outlined"
            className={classes.root}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <Stack direction="row" spacing={1}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: "4px",
                width: "40px",
                height: "40px",
                bgcolor: '#1a0600',
                borderRadius: 2,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.white.main,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                1+
              </Typography>
            </Box>
            <TextField
              fullWidth
              id="outlined-required"
              variant="outlined"
              className={classes.root}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
          <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: "4px",
                width: "40px",
                height: "40px",
                bgcolor: '#960600',
                borderRadius: 2,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.white.main,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                5+
              </Typography>
            </Box>
            <TextField
              fullWidth
              id="outlined-required"
              variant="outlined"
              className={classes.root}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
          <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: "4px",
                width: "40px",
                height: "40px",
                bgcolor: '#adc100',
                borderRadius: 2,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.white.main,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                20+
              </Typography>
            </Box>
            <TextField
              fullWidth
              id="outlined-required"
              variant="outlined"
              className={classes.root}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Stack>
          <Stack direction="row" spacing={1} sx={{ pt: 1, pb: 1 }} >
            <ColorButton width="50%">Cancel</ColorButton>
            <ActionButton width="50%">Done</ActionButton>
          </Stack>
        </Stack>
      </Popover>
    </Fragment>
  );
};
