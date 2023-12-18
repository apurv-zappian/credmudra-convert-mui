import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
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

const InterestRate = () => {
  const TableStyle = {
    // width: { xs: "100%", sm: "width: 100%", lg: "width: 100%", xl: "100%" },
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#243771",
      color: "white",
      fontWeight: "bolder",
      fontSize: "18px",
      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "18px",
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
  function createData(lender, interestrate) {
    return { lender, interestrate };
  }

  const rows = [
    createData("mPokket", "0% to 48.0% per annum "),
    createData("CASHe", "2.50% per month"),
    createData("MoneyTap", "1.08% per month onward"),
    createData("Fibe", "24.0% to 30.0% per annum"),
    createData("ICICI Bank", "10.75% to 19.0% per annum"),
    createData("Bajaj Finance", "11.0% to 39.0% per annum"),
    createData("HDFC Bank", "10.50% to 24.0% per annum"),
    createData("Axis Bank", "10.49% to 22.0% per annum"),
    createData("Kotak Mahindra Bank", "10.99% per annum onward"),
    createData("IDFC FIRST Bank", "10.49% to 36.0% per annum"),
  ];

  return (
    <>
      <Box>
        <Grid container spacing={2} sx={{ padding: "60px 0px 50px" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              alignItems: { sm: "center" },
              justifyContent: { sm: "center" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: { sm: "80%", lg: "80%", xl: "70%" },
                marginLeft: { sm: "20%" },
                paddingRight: { sm: "10%" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "26px", sm: "30px", lg: "44px" },
                  // lineHeight:"1.4",
                  font: "normal normal 900 44px/50px Inter",
                  marginBottom: "10px",
                  color: "#243771",
                  fontWeight: "900",
                }}
              >
                Attractive Personal Loan Interest Rates
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "17px", sm: "18px", lg: "16px", xl: "18px" },
                  font: "Inter",
                  marginBottom: "10px",
                  color: "#10162c",
                  // fontWeight:"900"
                  opacity: 1,
                }}
              >
                Check out the applicable interest rate on personal loan across
                several lenders:
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              alignItems: { sm: "flex-start" },
              justifyContent: { sm: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: { lg: "90%", xl: "70%" },
              }}
            >
              <Paper
                elevation={5}
                sx={{
                  padding: 2,
                  boxShadow: "5px 5px 10px gray",
                  backgroundColor: "#E9E9E9",
                }}
              >
                <TableContainer component={Paper}>
                  <Table sx={{ ...TableStyle }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          sx={{ borderRight: "2px solid #C1C5D3" }}
                        >
                          Lender
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          APPLICABLE INTEREST RATE
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.i}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{ borderRight: "2px solid #C1C5D3" }}
                          >
                            {row.lender}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.interestrate}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InterestRate;
