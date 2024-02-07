import React from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import {
    ActionButton,
} from "../../components";

const useStyles = makeStyles((theme) => ({
  statusItem: {
    "&.MuiTableCell-root": {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      minHeight: 60,
    },
  },
}));

export function OrderSummary() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow sx={{ fontSize: 16, fontWeight: 600 }}>
                    <TableCell className="tableHead">No</TableCell>
                    <TableCell className="tableHead">Product</TableCell>
                    <TableCell className="tableHead">Quantity</TableCell>
                    <TableCell className="tableHead">Price</TableCell>
                    <TableCell className="tableHead">Total</TableCell>                  
                </TableRow> 
            </TableHead>
            <TableBody>
                <TableRow
                sx={{ cursor: "pointer" }}
                hover    
                >
                    <TableCell className="tableRow">15 Oct 2023, 03:00 PM</TableCell>
                    <TableCell className="tableRow">S9876</TableCell>
                    <TableCell className="tableRow">0/300</TableCell>
                    <TableCell className="tableRow">$ 1122500.00</TableCell>
                    <TableCell className="tableRow">Pending</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  ); 
}
