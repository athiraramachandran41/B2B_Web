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
    ListingHeader
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

export function PaymentList() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <TableContainer>
        <ListingHeader
            title="Payment Lists"
            placeholder="Search"
            divider={true}
          />
        <Table>
            <TableHead>
                <TableRow sx={{ fontSize: 16, fontWeight: 600 }}>
                    <TableCell className="tableHead">No</TableCell>
                    <TableCell className="tableHead">Date</TableCell>
                    <TableCell className="tableHead">Transaction ID</TableCell>
                    <TableCell className="tableHead">Description</TableCell>
                    <TableCell className="tableHead">Amount</TableCell>
                </TableRow> 
            </TableHead>
            <TableBody>
                <TableRow
                sx={{ cursor: "pointer" }}
                hover
                onClick={() => {
                    navigate("1");
                }}
                >
                    <TableCell className="tableHead">1</TableCell>
                    <TableCell className="tableRow">15 Oct 2023,  03:00 PM</TableCell>
                    <TableCell className="tableRow">1312</TableCell>
                    <TableCell className="tableRow">Order S76554</TableCell>
                    <TableCell className="tableRow">$ 10000.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  ); 
}
