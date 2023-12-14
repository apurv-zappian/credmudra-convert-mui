import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Fragment } from "react";

const InterestRateOnLoan = () => {
  const BankName = [
    "Axis Bank",
    "Bajaj Finserv",
    "HDB Financial Services Ltd.",
    "HDFC Bank",
    "IDFC FIRST Bank",
    "Kotak Mahindra Bank",
    "Tata Capital",
  ];

  const InterstDataRange = [
    "14.95% to 19.20% per annum",
    "9.75% to 30% per annum",
    "Up to 36% per annum",
    "10% to 22.50% per annum",
    "10.50% per annum onwards",
    "16% to 26% per annum",
    "12% per annum onwards",
  ];

  const InterestRateArray=[
    {"BANK OR NBFC":"INTEREST RATE RANGE"},
    {"Axis Bank":"14.95% to 19.20% per annum"},
    {"Bajaj Finserv":"9.75% to 30% per annum"},
    {"HDB Financial Services Ltd.":"Up to 36% per annum"},
    {"HDFC Bank":"10% to 22.50% per annum"},
    {"IDFC FIRST Bank":"10.50% per annum onwards"},
    {"Kotak Mahindra Bank":"16% to 26% per annum"},
    {"Tata Capital":"12% per annum onwards"},
  ]

  return (
    <Fragment>
      <Grid
        container
        sx={{ minHeight: "60vh", }}
        spacing={2}
      >
        <Grid
          sx={{
            // border: "2px solid red",
            padding: "10px",
            display: "flex",
            justifyContent: {
              xl:"flex-end",
              lg:"flex-end",
              md:"center",
              sm:"center",
              xs:"center",
            },
            alignItems: "center",
          }}
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <Box sx={{ width:"75%", padding: "20px" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xl: "36px",
                  lg: "36px",
                  md: "24px",
                  sm: "24px",
                  xs: "24px",
                },
                fontWeight: "900",
                color: "#243771",
                marginBottom: "30px",
                textAlign: {
                  xl: "left",
                  lg: "left",
                  md: "center",
                  sm: "center",
                  xs: "center",
                }
              }}
            >
              Interest Rates On Business Loan Offers
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "25px", fontSize: "17px", color: "#404040",textAlign: {
                xl: "left",
                lg: "left",
                md: "center",
                sm: "center",
                xs: "center",
              } }}
            >
              Please check the applicable interest rates on business loan offers
              extended by several leading financial institutions in our country:
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "25px", fontSize: "17px", color: "#404040",textAlign:{
                xl: "left",
                lg: "left",
                md: "center",
                sm: "center",
                xs: "center",
              } }}
            >
              You must note that these interest rates are subject to change
              without any prior notice. Further, the applicable interest rate
              will depend on your eligibility for the credit facility. Hence,
              contact your lending institution in order to know the actual
              interest rate applicable to your business loan.
            </Typography>
            <Box
              sx={{
                width: "100%",
                //   padding: "10px",
                display: "flex",
                justifyContent: {
                  xl: "flex-start",
                  lg: "flex-start",
                  md: "center",
                  sm: "center",
                  xs: "center",
                },
                marginTop: "20px",
              }}
            >
              <Button
                sx={{
                  padding: "12px 34px",
                  backgroundColor: "#f7d64a",
                  fontWeight: "700",
                  color: "#243778",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: "#243778",
                    color: "#f7d64a",
                  },
                }}
              >
                Get Matched Now!
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            // border: "2px solid red",
            display: "flex",
            justifyContent: {
              xl:"flex-start",
              lg:"flex-start",
              md:"center",
              sm:"center",
              xs:"center",
            },
            alignItems: "center",
            padding: "20px",
          }}
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <Box
            sx={{
              width: "85%",
              height: "90%",
              padding: "20px",
              backgroundColor: "#e9e9e9",
            }}
          >
            {/* <Box
              sx={{
                width: "100%",
                // height: "100%",
                // border: "2px solid red",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                  borderRight: "1px solid #c1c5d3",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    padding: "20px",
                    backgroundColor: "#243771",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#fff",
                      fontWeight: "800",
                      textAlign: "center",
                    }}
                  >
                    BANK OR NBFC
                  </Typography>
                </Box>
                {BankName.map((item, index) => (
                  <Fragment>
                    <Box
                      sx={{
                        width: "100%",
                        padding: "15px",
                        backgroundColor: index % 2 === 0 ? "#fcefb8" : "#fff",
                        textAlign: "center",
                        color: "#404040",
                      }}
                    >
                      <Typography>{item}</Typography>
                    </Box>
                  </Fragment>
                ))}
              </Box>
              <Box
                sx={{ width: "50%", height: "100%",}}
              >
                <Box
                  sx={{
                    width: "100%",
                    padding: "20px",
                    backgroundColor: "#243771",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#fff",
                      fontWeight: "800",
                      textAlign: "center",
                    }}
                  >
                    INTEREST RATE RANGE
                  </Typography>
                </Box>
                {InterstDataRange.map((item, index) => (
                  <Fragment>
                    <Box
                      sx={{
                        width: "100%",
                        padding: "15px",
                        backgroundColor: index % 2 === 0 ? "#fcefb8" : "#fff",
                        textAlign: "center",
                        color: "#404040",
                      }}
                    >
                      <Typography>{item}</Typography>
                    </Box>
                  </Fragment>
                ))}
              </Box>
            </Box> */}
           
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default InterestRateOnLoan;
