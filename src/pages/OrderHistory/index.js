import React, { Fragment, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import {
    ListingHeader,
    MainCard
} from "../../components";
import {
OrderHistorytList,
} from "../../pages";
export function OrderHistory() {   

  return (
    <Fragment>
        <Grid container spacing={2} direction="column">
        <Grid item xs>
        <ListingHeader
            title="Order History"
            placeholder="Search"
            bgcolor="#FAFAFA"
            alignment={true}
          />
        </Grid>
        <Grid item xs>
        <MainCard>
        <OrderHistorytList />
        </MainCard>
        </Grid>
        </Grid>
    </Fragment>                      
  );
}
