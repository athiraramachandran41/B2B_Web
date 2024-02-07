import {
    Button,
    Divider,
    Grid,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import { Fragment, useState } from "react";

  import { TreeMenu, StockDropDown, StockRadio, StockTable, SearchField, SearchTextField } from "../../components";
  import { Add } from "iconsax-react";
  
  export const Stocks = () => {
    const theme = useTheme();
    const [productSelected, setProductSelected] = useState();
  
    const handleProductSelected = (nodeId) => {
      setProductSelected(nodeId);
    };
  
    return (
      <Fragment>
        <Grid container direction={"row"} sx={{ width: "100%", height: "100vh" }}>
          <Grid
            item
            sx={{
              pr: 2,
              bgcolor: theme.palette.menu.main,
              mt: -2,
              ml: -2.5,
              mb: -2,
              pl: 2,
              pb: 2,
            }}
          >
            <Typography
              sx={{
                mt: 2,
                mb: 2,
                color: theme.palette.primary.main,
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              Stocks
            </Typography>
            <TreeMenu
              onProductSelected={handleProductSelected}
              productSelected={productSelected}
            />
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mt: -2, mb: -2 }} />
          <Grid
            item
            direction={"column"}
            xs
            sx={{ ml: 2, mr: 2, display: "flex" }}
          >
            <Grid
              container
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid item>
                <Typography
                  sx={{
                    color: theme.palette.tertiary.main,
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Apple/iPhone/iPhone 15 Max
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"}>
                  <SearchTextField placeholder="Search" />
                </Stack>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 3,
              }}
            >
              <Grid item>
                <StockRadio />
              </Grid>
              <Grid item>
                <StockDropDown />
              </Grid>
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <StockTable />
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  };
  