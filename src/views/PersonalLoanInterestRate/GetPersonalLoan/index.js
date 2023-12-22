import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
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
import MinimalDocumentation from "../MinimalDocumentation";
import TopWays from "../TopWays";
import FAQS from "../FAQS";

const GetPersonalLoan = () => {
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
  function createData(lending, applicable) {
    return { lending, applicable };
  }
  const rows = [
    createData("mPokket", "0% - 48.0% per annum"),
    createData("MoneyTap", "1.08% per month onward"),
    createData("CASHe", "2.50% per month"),
    createData("Axis Bank", "10.49% - 22.0% per annum"),
    createData("IDFC FIRST Bank", "10.49% - 36.0% per annum"),
    createData("HDFC Bank", "10.50% - 24.0% per annum"),
    createData("ICICI Bank", "10.75% - 19.0% per annum"),
    createData("Bajaj Finance", "10.99% per annum onward"),
    createData("Kotak Mahindra Bank", "11.0% - 39.0% per annum"),
  ];
  function creditData(credit, average) {
    return { credit, average };
  }
  const creditratingData = [
    creditData("720 to 850", "10.73% to 12.50%"),
    creditData("690 to 719", "13.50% to 15.50%"),
    creditData("630 to 689", "17.80% to 19.90%"),
    creditData("300 to 629", "28.50% to 32.00%"),
  ];
  const interestrateData = [
    {
      title: "Fixed interest rates",
      content:
        "This type of interest rate remains fixed throughout the loan repayment tenure. This means that if the lender charges 5% interest on a personal loan at the start of the loan term, it will remain unchanged despite the fluctuations in the market.",
    },
    {
      title: "Variable interest rates",
      content:
        "This interest type gets affected by the changes in the market situations. If you are a prospective borrower, you must choose the interest type carefully to avoid financial burden in the long run.",
    },
  ];
  const aspectData = [
    {
      title: "Income:",
      content:
        "If you have a high monthly income, banks and NBFCs will charge a lower interest rate. This is because lenders consider borrowers with a higher monthly income as more reliable than those with low income. A person with a low monthly income has a higher chance of facing a financial crisis and defaulting on a credit instrument.",
    },
    {
      title: "Repayment History:",
      content:
        "Your repayment history allows the lending intuition to determine your ability to repay the loan on time. Banks will charge a lower interest rate on personal loans if you have a good repayment history with no records of defaulting.",
    },
    {
      title: "Lender and Borrower Relationship:",
      content:
        " If you have built and maintained a good relationship with a financial institution, you are more likely to get a lower interest rate. Due to your relationship with the lender, they will consider you as a low-risk applicant and sanction a personal loan with a lower interest rate.",
    },
    {
      title: "Debt-to-Income Ratio:",
      content:
        " The amount of ongoing debts you have compared to your current monthly income is known as the debt-to-income ratio. If you have a high debt-to-income ratio, you will be charged a higher interest rate on a personal loan. This is because a person with a considerable amount of debt has a higher chance of defaulting on any credit line.",
    },
    {
      title: "Credit Score and Report:",
      content:
        " If you have a decent credit score you will be offered the best personal loan interest rates. This is because, a good credit report, free from defaults and missed payments, indicates excellent financial management.",
    },
  ];
  const PLPagesStyling = {
    borderBottom: "1px solid #858585",
    color: "#243771",
    display: "block",
    fontSize: "16px",
    fontWeight: 700,
    padding: "9px 0 10px",
    textDecoration: "none",
    fontFamily: "Inter,sans-serif",
  };
  const paraStyling = {
    fontSize: { xs: "18px" },
    fontWeight: "300",
    color: "#404040",
    lineHeight: 1.5,
    margin: "23px 0",
    fontFamily: "Inter,sans-serif",
  };
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
    // marginTop:"3px"
  };

  const ListItemTextTitle = {
    color: "#404040",
    fontSize: { xs: "18px" },
    fontFamily: "Inter,sans-serif",
    fontWeight: "900",
    margin: "0 0 20px",
  };
  const ListItemTextContetnt = {
    color: "#404040",
    fontSize: { xs: "18px" },
    fontFamily: "Inter,sans-serif",
    fontWeight: "300",
    margin: "0 0 20px",
  };
  const TabelRowStyling = {
    borderRight: "2px solid #C1C5D3",
    fontSize: "18px",
    fontFamily: "Inter,sans-serif",
    padding: "15px",
    textAlign: "center",
    color: "#404040",
  };
  const TabelHeadingStyling = {
    borderRight: "2px solid #C1C5D3",
    //   padding: "16px 10px",
    fontSize: { xs: "18px" },
    fontFamily: "Inter,sans-serif",
  };
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            paddingRight: { xs: "0", md: "14%" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "35.5px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
                fontFamily: "Inter,sans-serif",
              }}
            >
              Get A Personal Loan Starting From As Low As Rs.1,000 To A Maximum
              Of Rs.20 Lakh Through Credmudra!
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              When in need of urgent funds apply for a personal loan and get a
              sizable sum of money from reputed financial institutions and
              NBFCs. You can get these funds transferred directly to your bank
              account and use them without any end-to-end usage restriction.
              However, you must consider the personal loan interest rates while
              applying for credit. This first-hand information will help you
              choose the best lender offering the most flexible deal per your
              requirements.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
                fontFamily: "Inter,sans-serif",
              }}
            >
              Personal Loan Interest Rates
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              The table below illustrates the current personal loan interest
              rates offered by several banks and NBFCs:
            </Typography>
            <Paper
              // elevation={5}
              sx={{
                padding: 2,
                // boxShadow: "5px 5px 10px gray",
                backgroundColor: "#E9E9E9",
              }}
            >
              <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell sx={{ ...TabelHeadingStyling }}>
                        LENDING INSTITUTION
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{ ...TabelHeadingStyling }}
                      >
                        APPLICABLE RATE OF INTEREST
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.i}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{ ...TabelRowStyling }}
                        >
                          {row.lending}
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{ ...TabelRowStyling }}
                        >
                          {row.applicable}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
                fontFamily: "Inter,sans-serif",
              }}
            >
              Types Of Interest Rates On Personal Loan
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              Usually, financial institutions offer two types of personal loan
              interest rates. You must know the difference between both the
              types as they can affect the affordability of the credit
              instrument significantly.
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              Here are the two types of interest rates applicable to personal
              loans:
            </Typography>
            <List>
              {interestrateData.map((item, index) => (
                <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextTitle }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextContetnt }}
                        >
                          {item.content}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
                fontFamily: "Inter,sans-serif",
              }}
            >
              Aspects That Affect Personal Loan Interest Rates
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              In order to secure the lowest personal loan interest rate, you
              must know the factors on which the rates depend upon:
            </Typography>
            <List>
              {aspectData.map((item, index) => (
                <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextTitle }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ ...ListItemTextContetnt }}
                        >
                          {item.content}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <MinimalDocumentation />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                fontWeight: "900",
                color: "#243771!important",
                lineHeight: 1.2,
                margin: "23px 0",
                fontFamily: "Inter,sans-serif",
              }}
            >
              How Does Credit Rating Influence Personal Loan Interest Rates?
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              Prospective borrowers with an excellent or decent credit score can
              be offered as low as 13.5% as personal loan interest rates due to
              their creditworthiness. However, those with poor or average credit
              scores will have to pay higher interest rates.
            </Typography>
            <Typography sx={{ ...paraStyling }}>
              The table below illustrates the average personal loan interest
              rates as per the credit score ranges:
            </Typography>
            <Paper
              // elevation={5}
              sx={{
                padding: 2,
                // boxShadow: "5px 5px 10px gray",
                backgroundColor: "#E9E9E9",
              }}
            >
              <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell sx={{ ...TabelHeadingStyling }}>
                        CREDIT SCORE RANGE
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{ ...TabelHeadingStyling }}
                      >
                        AVERAGE PERSONAL LOAN INTEREST RATE
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {creditratingData.map((row) => (
                      <StyledTableRow key={row.i}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{ ...TabelRowStyling }}
                        >
                          {row.credit}
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{ ...TabelRowStyling }}
                        >
                          {row.average}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Typography sx={{ ...paraStyling }}>
              However, you must keep in mind that these figures are just an
              average. The rate of interest that the lender charges will depend
              on all the factors mentioned above.
            </Typography>
          </Box>
          <Box>
            <TopWays />
          </Box>
          <Box>
            <MinimalDocumentation/>
          </Box>
          <Box>
            <FAQS/>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <List>
              <Typography
                sx={{
                  background: "#10162c",
                  boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                  color: "#fff !important",
                  fontSize: "18px",
                  marginBottom: "18px",
                  padding: "15px 5px 14px",
                  textAlign: "center",
                }}
              >
                Personal Loan Pages
              </Typography>
              <ListItem sx={{ ...PLPagesStyling }}>
                Personal Loan Interest Rate
              </ListItem>
              <ListItem sx={{ ...PLPagesStyling }}>
                Personal Loan Eligibility
              </ListItem>
              <ListItem sx={{ ...PLPagesStyling }}>
                Personal Loan EMI Calculator
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetPersonalLoan;
