import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";

const PersonalLoanFees = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "1vmax",
    marginRight: ".5vmax",
    // marginTop:"-10px"
  };

  const LeftTypographyStyle = {
    color: "#404040",
    fontSize: { xs: "2vmax", xl: "1.2vmax" },
    fontWeight: "bolder",
  };

  return (
    <>
        <Grid container bgcolor="#FCEFB8" p="2rem">
          {/* Left Side  */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems:"center",
                justifyContent: "center",
                flexDirection: "column",
                }}
            >
              <Box
                sx={{
                  padding: {
                    // xs:"3rem 1rem 1rem 1.3rem",
                    // sm:"3rem",
                    // md:"3rem",
                    lg:"3rem 0 0 0",
                    xl:"3rem 0 0 9rem"
                  },
                  width:{sm:"90%"}
                }}
              >
                <Typography variant="h6">
                  Following are the different charges applicable on a personal
                  loan:
                </Typography>

                <List>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography variant="body1" sx={{ ...LeftTypographyStyle }}>
                      Processing fee
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography variant="body1" sx={{ ...LeftTypographyStyle }}>
                      Verification charge
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography variant="body1" sx={{ ...LeftTypographyStyle }}>
                      Goods and Service Tax
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography variant="body1" sx={{ ...LeftTypographyStyle }}>
                      Penal interest
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography variant="body1" sx={{ ...LeftTypographyStyle }}>
                      Part-prepayment and foreclosure charge
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography variant="body1" sx={{ ...LeftTypographyStyle }}>
                      Documentation charge
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography variant="body1" sx={{ ...LeftTypographyStyle }}>
                      Stamp duty
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography variant="body1" sx={{ ...LeftTypographyStyle }}>
                      Credit administration fee
                    </Typography>
                  </ListItem>
                </List>
                <Typography>
                  Note: The charges of personal loan may vary across our
                  lenders.
                </Typography>
                <Typography>
                  Before accepting the personal loan offer, you should ideally
                  carefully check these fees.
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
              display: "flex",
              alignItems:"center",
              justifyContent: "center",
              flexDirection: "column",
              marginRight:"7rem"
              }}
            >
              <Box
                sx={{
                  width: {  md: "70%", lg: "70%", xl: "60%" },
                  textAlign: {xs:"center",md:"left"},
                  // padding:{xl:"0 9rem 0 0"},

                }}
              >
                <Typography variant="h3" fontWeight="bolder" color="#243771" sx={{
                  fontSize:"40px",
                  marginTop:"10px"
                }}>
                  Personal Loan Fees And Charges
                </Typography>

                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#243788",
                      color: "#F7D64A",
                    },
                    padding: {
                      xs: "12px 15px 12px",
                      xl: "12px 25px 12px 25px",
                    },
                    boxShadow: "0px 3px 6px #00000029",
                    borderRadius: "10px",
                    backgroundColor: "#F7D64A",
                    color: "#243788",
                    fontWeight: "900",
                    transition: ".4s all ease-in-out",
                    textTransform: "capitalize ",
                    fontSize: "1rem",
                    width: { xs: "200px", xl: "250px" },
                    marginTop: "1rem",
                  }}
                >
                  Get Matched Now!
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
    </>
  );
};

export default PersonalLoanFees;
