import React, { Fragment, useState } from "react";
import { Grid, Stack, Paper, Tabs, Tab, Divider, useTheme } from "@mui/material";
import { dashboardCounterOptions } from "../../utilities";
import {
  PageHeader,
  CounterCard,
  MainCard,
  MultiLineChart
} from "../../components";

import {
  OrderList,
} from "../../pages";
export function Dashboard() {   
  const theme = useTheme();
  const [timelineTab, setTimelineTab] = useState(0);

  const handleTimelineTabChange = (event, newTimelineTab) => {
    setTimelineTab(newTimelineTab);
  };

  return (
    <Fragment>
        <Grid container spacing={2} direction="column">
        <Grid item xs>
          <PageHeader title="Dashboard"
          />
        </Grid>
        <Grid item xs>
          <Stack direction="row" spacing={2}>
            {dashboardCounterOptions.map((o, i) => (
              <CounterCard
                key={i}
                id={o.type}
                title={o.title}
                count={o.count}
                color={o.color}
                icon={o.icon}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs>
       <Paper elevation={2} sx={{ mt: 2, mb: 2, borderRadius: 2 }}>
          <Grid container direction={"column"} xs>
            <Grid container direction={"row"}>
              <Tabs
                value={timelineTab}
                onChange={handleTimelineTabChange}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: theme.palette.theme.main, // Color for the indicator bar
                  },
                }}
              >
                <Tab
                  label="Today"
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: 12,
                    fontWeight: 500,
                    "&.Mui-selected": {
                      color: theme.palette.theme.main, // Color for the selected text
                    },
                  }}
                />
                <Tab
                  label={"This Month"}
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: 12,
                    fontWeight: 500,
                    "&.Mui-selected": {
                      color: theme.palette.theme.main, // Color for the selected text
                    },
                  }}
                />
                <Tab
                  label="This Year"
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: 12,
                    fontWeight: 500,
                    "&.Mui-selected": {
                      color: theme.palette.theme.main, // Color for the selected text
                    },
                  }}
                />
              </Tabs>
            </Grid>
            <Divider />
            <MultiLineChart type={timelineTab} />
          </Grid>
        </Paper>
        </Grid>
        <Grid item xs>
        <MainCard>
        <OrderList />
        </MainCard>
        </Grid>
        </Grid>
    </Fragment>                      
  );
}
