import React, { Fragment, useState } from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {
  PageHeader,
  ProductOwnerTable,
  OrderTable,
  CounterCard,
  ActionButton,
  OutlinedButton,
  MainCard,
  SearchTextField
} from "../../components";
import {
  arrangeSquare,
  moneySend
} from "../../assets"
export function LiveOrder() {
  const [viewProductOwner, setViewProductOwner] = useState(true);
  const [viewOrder, setViewOrder] = useState(false);
  const handleOnclickProductOwner = () => {
    setViewProductOwner(true);
    setViewOrder(false);
  }

// toggle the radio button view as Product owner and view as order
  const handleOnclickOrder = () => {
    setViewProductOwner(false);
    setViewOrder(true);
  }
  
  return (
    <Fragment>
      <Grid container spacing={4} direction="column">
        <Grid item xs>
          <PageHeader
            title="Live Order : # S9876"
            timer={true}
          />
        </Grid>
        <Grid item container spacing={2} direction="row">
          <Grid item md={6}>
            <Stack direction="row" spacing={2}>
              <CounterCard
                title="Total Quantity"
                count="190"
                icon={arrangeSquare}
                color="#FDB82D"
              />
              <CounterCard
                title="Total Amount"
                count="$ 72500.00"
                color="#DD7BF4"
                icon={moneySend}
              />
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack direction="row" sx={{ justifyContent: 'end' }} spacing={2}>
              <OutlinedButton>Download PO</OutlinedButton>
              <ActionButton>Download PO</ActionButton>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs>
          <MainCard>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                sx={{ display: "block" }}
              >
                <FormControlLabel value="female" onChange={handleOnclickProductOwner} control={<Radio className="radio" />} label="view as PO" />
                <FormControlLabel value="male" onChange={handleOnclickOrder} control={<Radio className="radio" />} label="view as Order" />
              </RadioGroup>
              <FormControl>
                <SearchTextField placeholder="search" />
              </FormControl>
            </Stack>
            <Divider className="divider"/>
            {viewProductOwner ?
              <ProductOwnerTable />
              :
              <OrderTable />
            }
          </MainCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}
