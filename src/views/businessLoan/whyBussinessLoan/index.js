import React, { Fragment } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { WhyBussinessLoanImage } from "../../../assets/images/BussinessLoanImage/index";
const WhyBussinessLoanSection = () => {
  return (
    <Fragment>
      <Grid
        container
        sx={{
          minHeight: "50vh",
          backgroundColor: "#fcefd8",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          //   sx={{ border: "2px solid red" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "auto",
              padding: { lg: "0px", md: "0px", sm: "10px" },
            }}
          >
            <img
              src={WhyBussinessLoanImage}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt="photoimage"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              padding: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ width: "90%", padding: "25px" }}
            >
              <Typography
                variant="h3"
                sx={{
                  width: "100%",
                  padding: "10px 0px",
                  //border: "2px solid yellow",
                  fontSize: {
                    xl: "38px",
                    lg: "38px",
                    md: "28px",
                    sm: "28px",
                    xs: "20px",
                  },
                  color: "#243778",
                  fontWeight: "900",
                  marginBottom: {
                    xl: "28px",
                    lg: "28px",
                    md: "24px",
                    sm: "24px",
                    xs: "24px",
                  },
                  textAlign: {
                    xl: "left",
                    lg: "left",
                    md: "center",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                What are Business Loans?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xl: "20px",
                    lg: "20px",
                    md: "16px",
                    sm: "16px",
                    xs: "16px",
                  },
                  fontWeight: "300",
                  color: "#4a4948",
                  marginBottom: "28px",
                  textAlign: {
                    xl: "left",
                    lg: "left",
                    md: "center",
                    sm: "center",
                    xs: "center",
                  },
                  paddingRight: {
                    xl: "35px",
                    lg: "35px",
                    md: "0px",
                    sm: "0px",
                    xs: "0px",
                  },
                }}
              >
                A business loan is a type of unsecured credit instrument that
                business owners can apply for in order to fund planned as well
                as urgent business-related expenses.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  width: "100%",
                  fontSize: {
                    xl: "20px",
                    lg: "20px",
                    md: "16px",
                    sm: "16px",
                    xs: "16px",
                  },
                  fontWeight: "300",
                  color: "#4a4948",
                  marginBottom: "28px",
                  textAlign: {
                    xl: "left",
                    lg: "left",
                    md: "center",
                    sm: "center",
                    xs: "center",
                  },
                  paddingRight: {
                    xl: "35px",
                    lg: "35px",
                    md: "0px",
                    sm: "0px",
                    xs: "0px",
                  },
                }}
              >
                Further, leading financial institutions and NBFCs offer business
                loans at competitive interest rates and do not demand any
                collateral against the borrowed sum.
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
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default WhyBussinessLoanSection;
