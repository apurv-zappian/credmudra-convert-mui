import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import howwilllendersimg from "../../../assets/images/PersonalLoanForDebtImages/eligibilitycriteriaimg.png";

const HowWillLenders = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FCEFB8",
          overflow: "hidden",
          padding: "65px 5px",
          position: "relative",
        }}
      >
        <Container maxWidth={"xl"} sx={{ padding: "30px 0px 30px" }}>
          <Grid container sx={{ padding: { xs: "30px", sm: "10px" } }}>
            {/* Left Side */}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={5}>
              <Box
                sx={{
                  //   //   height: { xs: "70vh", sm: "100%" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  //   //   flexDirection: "column",
                  // width:{sm:"50%",lg:"70%",xl:"90%"},
                }}
              >
                <Box
                  sx={{
                    width: { sm: "50%", lg: "70%", xl: "100%" },
                    marginRight: { xl: "20%" },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: { md: "left" },
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "24px", sm: "40px" },
                      marginBottom: "23px",
                      fontWeight: "900",
                      color: "#243771",
                      lineHeight: "1.1",
                    }}
                  >
                    How Will Lenders Disburse The Personal Loan Amount?
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* Right Side */}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={7}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  // width: {sm:"80%",md:"100%",xl:"100%"},
                  width: { sm: "80%", md: "100%", xl: "100%" },
                }}
              >
                {/* <Box
                  sx={{
                    // padding: {
                    //   xs: "0 0 1rem",
                    //   sm: "4rem 0 0",
                    //   // md: "3rem 5rem 0 0",
                    //   lg: "3rem 0 3rem",
                    //   xl: "3rem 13rem 0 0",
                    // },
                    // width: { sm: "80%", md: "100%", xl: "100%" },
                    // marginRight:{md:"5%"}
                  }}
                > */}
                  <Typography
                    sx={{
                      // marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#243771",
                      fontWeight: "400",
                      lineHeight: { sm: "1.1", md: "1.5" },
                    }}
                  >
                    Lenders send the personal loan amount directly to the
                    account of their borrowers who can use the amount as they
                    wish. The turn-around time for the disbursal is
                    significantly less. You can get the amount in your account
                    within a few seconds or minutes of the document verification
                    and approval of your loan application.
                  </Typography>
                </Box>
              {/* </Box> */}
            </Grid>
          </Grid>
        </Container>
        <img
          src={howwilllendersimg}
          alt="Credmudra logo"
          style={{
            // left: "0",
            maxWidth: "530px",
            opacity: ".6",
            position: "absolute",
            top: "0",
            right: "0",
          }}
        />
      </Box>
    </>
  );
};

export default HowWillLenders;
