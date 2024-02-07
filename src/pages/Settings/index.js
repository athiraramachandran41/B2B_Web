import React, { Fragment, useState } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Modal,
  Box
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  ListingHeader,
  MainCard,
  ActionButton,
  UserCard,
} from "../../components";
import {
  PaymentList,
} from "../../pages";

const useStyles = makeStyles((theme) => ({
  flexStack: {
    "&.MuiStack-root": {
      justifyContent: 'space-between'
    },
  },
}));


export function Settings() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={2} direction="column">
        <Grid item xs>
          <ListingHeader
            title="Users"
            user="+ Add User"
            alignment={true}
          />
        </Grid>
        <Grid item xs>
          <MainCard>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ fontSize: 16, fontWeight: 600 }}>
                    <TableCell className="tableHead">No</TableCell>
                    <TableCell className="tableHead">Last Updated </TableCell>
                    <TableCell className="tableHead">Name</TableCell>
                    <TableCell className="tableHead">Email</TableCell>
                    <TableCell className="tableHead">User role</TableCell>
                    <TableCell className="tableHead"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ cursor: "pointer" }}
                    hover
                  >
                    <TableCell className="tableHead">1</TableCell>
                    <TableCell className="tableRow">15 Oct 2023</TableCell>
                    <TableCell className="tableRow">Meghan Schaden</TableCell>
                    <TableCell className="tableRow">meghan95@gmail.com</TableCell>
                    <TableCell className="tableRow">Admin</TableCell>
                    <TableCell className="tableRow"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}
