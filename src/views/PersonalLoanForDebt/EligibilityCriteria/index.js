import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import eligibilitycriteria from "../../../assets/images/PersonalLoanForDebtImages/eligibilitycriteriaimg.png";
import { FiberManualRecord } from "@mui/icons-material";

const EligibilityCriteria = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "1vmax",
    marginRight: ".5vmax",
    // marginTop:"-10px"
  };

  //   const TypographySubHeadings = {
  //     color: "#F7D64A",
  //   };
  return (

    <>
      <Box
        sx={{
          background: "#243771",
          overflow: "hidden",
          padding: "65px 5px",
          position: "relative",
        }}
      >
        <img
          src={eligibilitycriteria}
          alt="Credmudra logo"
          style={{
            left: "10%",
            maxWidth: "530px",
            opacity: 0.6,
            position: "absolute",
            top: "0",
          }}
        />
        <Grid container>
          <Grid item xs={6} sx={{ display: { xs: "none", sm: "flex" } }} />
          <Grid item xs={12} sm={6}>
            <Box sx={{ color: "#fff" ,padding:{xs:"0",sm:"0 16px 0 0",lg:"0 144px 0 0",xl:"0 240px 0 0"}}}>
              <Typography
                sx={{
                  color: "#f7d64a !important",
                  fontSize: { xs: "24px", md: "36px" },
                  fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: { xs: "center",sm:"left" },
                  lineHeight:"1.1",
                  fontFamily:"Inter"
                }}
              >
                Eligibility Criteria For Debt Consolidation Loan
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "17px", md: "20px" },
                  fontWeight: "300",
                  fontFamily: "Inter",
                  textAlign: { xs: "center",sm:"left" },
                }}
              >
                Although the eligibility criteria for a debt consolidation loan
                can vary from lender to lender, here are some basic parameters
                that an applicant must meet to get the required funds:
              </Typography>
              <List sx={{ listStyle: "none" }}>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px",sm:"18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px",sm:"18px" },
                      display: "inline",
                    }}
                  >
                    Nationality:
                  </Typography>{" "}
                  Indian
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px",sm:"18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      
                      fontFamily: "Inter",
                      fontSize: { xs: "16px",sm:"18px" },
                      display: "inline",
                    }}
                  >
                    Employment:
                  </Typography>{" "}
                  Both salaried and self-employed individuals
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px",sm:"18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                     
                      fontFamily: "Inter",
                      fontSize:{ xs: "16px",sm:"18px" },
                      display: "inline",
                    }}
                  >
                    CIBIL Score:
                  </Typography>{" "}
                  Minimum 685
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px",sm:"18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      fontSize:{ xs: "16px",sm:"18px" },
                      display: "inline",
                    }}
                  >
                    Monthly Income:
                  </Typography>{" "}
                  More than Rs.25,000 per month
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EligibilityCriteria;
