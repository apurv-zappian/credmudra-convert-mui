import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const BankThatOffer = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#243771",
      color: "white",
      fontWeight: "900",
      // fontSize: "1vmax",
      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      // fontSize: "1vmax",
      textAlign: "center",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FCEFB8",
    },
    // hide last border
    "&:last-child th": {
      border: 0,
      borderRight: "2px solid #C1C5D3",
    },
  }));
  function createData(bank, interestrate) {
    return { bank, interestrate };
  }
  const rows = [
    createData("HDFC Bank", "Starting from 10.50% p.a."),
    createData("IDFC First Bank", "Starting from 10.49% p.a."),
    createData("Kotak Mahindra Bank", "Starting from 10.99% p.a."),
    createData("ICICI Bank", "Starting from 10.75% p.a."),
    createData("Axis Bank", "Starting from 10.25% p.a."),
    createData("Standard Chartered", "Starting from 11% p.a."),
  ];
  return (
    <>
      <Box>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h2">
                  Banks That Offer Travel Loan
                </Typography>
                <Typography variant="body1">
                  Take a look at the following table to learn about some of the
                  top banks that offer travel loans at competitive interest
                  rates:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className="offset-md-2">
              <Paper
                elevation={5}
                sx={{
                  padding: 2,
                  boxShadow: "5px 5px 10px gray",
                  backgroundColor: "#E9E9E9",
                }}
              >
                <TableContainer component={Paper}>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          sx={{
                            borderRight: "2px solid #C1C5D3",
                            //   padding: "16px 10px",
                            fontSize: { xs: "18px" },
                            fontFamily: "Inter,sans-serif",
                          }}
                        >
                          BANK
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{
                            borderRight: "2px solid #C1C5D3",
                            // padding:"16px 10px",
                            fontSize: { xs: "18px" },
                            fontFamily: "Inter,sans-serif",
                          }}
                        >
                          INTEREST RATE
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.i}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{
                              borderRight: "2px solid #C1C5D3",
                              fontSize: "18px",
                              fontFamily: "Inter,sans-serif",
                              padding: "15px",
                              textAlign: "center",
                              color: "#404040",
                            }}
                          >
                            {row.bank}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{
                              borderRight: "2px solid #C1C5D3",
                              fontSize: "18px",
                              fontFamily: "Inter,sans-serif",
                              padding: "15px",
                              textAlign: "center",
                              color: "#404040",
                            }}
                          >
                            {row.interestrate}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BankThatOffer;
