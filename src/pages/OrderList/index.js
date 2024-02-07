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

export function OrderList() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <TableContainer>
     <ListingHeader
            title="New Orders (3)"
          />
    <Table>
      <TableHead>
        <TableRow sx={{ fontSize: 16, fontWeight: 600 }}>
          <TableCell className="tableHead">No.</TableCell>
          <TableCell className="tableHead">Product</TableCell>
          <TableCell className="tableHead">Quantity</TableCell>
          <TableCell className="tableHead">Price</TableCell>
          <TableCell className="tableHead" align="right" sx={{ pr: 2 }}>
            Total
          </TableCell>
          <TableCell className="tableHead"></TableCell>
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
          <TableCell className="tableRow">iphone 15 plus 125GB black - UAE UPC: 194342243567, Model ID : MNW89RL/A   </TableCell>
          <TableCell className="tableRow">20</TableCell>
          <TableCell className="tableRow">$ 390.00</TableCell>
          <TableCell className="tableRow" align="right" sx={{ pr: 2 }}>1</TableCell>
          <TableCell className="tableRow"> </TableCell>
        </TableRow>
        <TableRow sx={{ cursor: "pointer" }} hover>
          <TableCell className="tableHead">2</TableCell>
          <TableCell className="tableRow">iphone 15 Min 125GB Black- UAE UPC: 194342243777, Model ID: MNW78RD/A </TableCell>
          <TableCell className="tableRow">50</TableCell>
          <TableCell className="tableRow">$ 370.00</TableCell>
          <TableCell className="tableRow" align="right" sx={{ pr: 2 }}>1</TableCell>
          <TableCell className="tableRow"> </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  ); 
}
