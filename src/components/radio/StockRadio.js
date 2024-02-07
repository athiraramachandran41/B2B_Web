import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material";

export function StockRadio() {
  const theme = useTheme();

  return (
    <FormControl>
      <RadioGroup row name="row-radio-buttons-group">
        <FormControlLabel
          value="all"
          control={
            <Radio
              sx={{
                color: theme.palette.theme.main,
                "&.Mui-checked": {
                  color: theme.palette.theme.main,
                },
              }}
            />
          }
          label={
            <span
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: theme.palette.primary.main,
              }}
            >
              All
            </span>
          }
        />
        <FormControlLabel
          value="stock"
          control={
            <Radio
              color="theme"
              sx={{
                color: theme.palette.theme.main,
                "&.Mui-checked": {
                  color: theme.palette.theme.main,
                },
              }}
            />
          }
          label={
            <span
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: theme.palette.primary.main,
              }}
            >
              In Stock
            </span>
          }
        />
        <FormControlLabel
          value="outOfStock"
          control={
            <Radio
              color="theme"
              sx={{
                color: theme.palette.theme.main,
                "&.Mui-checked": {
                  color: theme.palette.theme.main,
                },
              }}
            />
          }
          label={
            <span
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: theme.palette.primary.main,
              }}
            >
              Out of Stock
            </span>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
