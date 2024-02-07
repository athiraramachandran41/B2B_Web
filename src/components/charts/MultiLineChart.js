import { Grid, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";

export const MultiLineChart = (props) => {
  const { type } = props;
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Event listener to update windowWidth on resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid container xs>
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data:
              type === 0
                ? [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20, 21, 22, 23, 24,
                  ]
                : type === 1
                ? [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                  ]
                : [
                    0,
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                  ],
          },
        ]}
        series={[
          {
            curve: "linear",
            data:
              type === 0
                ? [
                    0, 8, 2, 4, 5, 1, 5, 6, 8, 4, 4, 5, 3, 7, 5, 6, 2, 6, 7, 5,
                    1, 2, 4, 5, 4,
                  ]
                : type === 1
                ? [
                    0, 1, 5, 6, 3, 4, 5, 7, 8, 2, 4, 5, 1, 5, 6, 8, 4, 4, 5, 3,
                    7, 5, 6, 2, 6, 7, 5, 1, 2, 4, 5, 4,
                  ]
                : [0, 2, 2, 8, 4, 6, 3, 4, 1, 5, 7, 2, 5],
            //label: "iPhone 15",
            color: theme.palette.secondary.main,
          },
          {
            curve: "linear",
            data:
              type === 0
                ? [
                    0, 6, 4, 1, 3, 2, 3, 3, 6, 8, 5, 4, 2, 6, 3, 2, 1, 5, 3, 2,
                    4, 4, 2, 3, 1,
                  ]
                : type === 1
                ? [
                    0, 2, 3, 3, 1, 2, 4, 5, 6, 8, 3, 2, 3, 2, 5, 6, 1, 3, 4, 2,
                    5, 3, 4, 1, 5, 8, 6, 2, 4, 3, 2, 1,
                  ]
                : [0, 4, 1, 5, 6, 1, 2, 3, 2, 8, 4, 5, 1],
            //label: "iphone 15 Max",
            color: theme.palette.theme.main,
          },
        ]}
        width={windowWidth - 160}
        px
        height={300}
      />
    </Grid>
  );
};
