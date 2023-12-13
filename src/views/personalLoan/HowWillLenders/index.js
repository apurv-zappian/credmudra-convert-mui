import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HowWillLenders = () => {
  return (
    <>
      <Grid container bgcolor="#FCEFB8" p="2rem">
        {/* Left Side */}
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
            //   //   height: { xs: "70vh", sm: "100%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            //   //   flexDirection: "column",
            }}
          >
            <Box sx={{
              width:{xl:"60%"},
              padding:{md:"7rem 0 0 7rem",lg:"3rem"}
            }}>
              <Typography variant="h3" fontWeight="bolder" color="#243771" sx={{
                textAlign:{xs:"center",md:"left"},
                  fontFamily:"Inter,sans-serif",
                  fontSize:"24px",
                  marginBottom:"23px",
                  fontWeight:"900"
            
              }}>
                How Will Lenders Disburse The Personal Loan Amount?
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Right Side */}
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
          sx={{
            display:"flex",
            alignItems:"left",
            justifyContent:"center"
          }}

          >
            <Box sx={{
                  padding: {
                  //   xs: "3rem 1rem 1rem 1.3rem",
                  //   sm: "3rem",
                    md: "3rem",
                    lg: "3rem 0 0",
                    xl: "3rem 13rem 0 0",
                  },
                  width: {xs:"90%",xl:"90%"},
                }}>
                
              <Typography variant="h5" sx={{
                      marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: "16px",
                      color: "#404040",
                    }}> 
                Lenders send the personal loan amount directly to the account of
                their borrowers who can use the amount as they wish. The
                turn-around time for the disbursal is significantly less. You
                can get the amount in your account within a few seconds or
                minutes of the document verification and approval of your loan
                application.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HowWillLenders;
