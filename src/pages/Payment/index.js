import React, { Fragment, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import {
    PageHeader,
    MainCard
} from "../../components";

import {
  dollarSquare
} from "../../assets";


import {
PaymentList,
} from "../../pages";
export function Payment() {   

  return (
    <Fragment>
        <Grid container spacing={2} direction="column">
        <Grid item xs>
          <PageHeader 
          title="Payment"
          counterTitle="Wallet Balance" 
          counterCount="$ 500.00"
          counterColor="#0F8EFF" 
          counterIcon={dollarSquare}
          counter= {true}
          />
        </Grid>
        <Grid item xs>
        <MainCard>
        <PaymentList />
        </MainCard>
     
        </Grid>
       
        </Grid>
    </Fragment>                      
  );
}
