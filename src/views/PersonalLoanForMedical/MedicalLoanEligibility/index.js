import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import GetMatchedButton from "../../../components/GetMatchedButton";

const MedicalLoanEligibility = () => {
  const eligibilityCriteria = [
    {
      title: "Citizenship",
      description:
        "You should not only be residing in India but also have an Indian citizenship.",
    },
    {
      title: "Income",
      description:
        "You should be earning a minimum income of at least ₹20,000 – ₹30,000 per month.",
    },
    {
      title: "Age",
      description:
        "Your age should range from 21 years old to 58 years old to apply for a medical loan.",
    },
    {
      title: "Employment Type",
      description:
        "You must either be a full-time employee on a monthly salary or a self-employed professional in a business vintage.",
    },
    {
      title: "Work Experience",
      description:
        "You must have a total work experience of 1 year or more. Furthermore, you should be employed in your current firm for 6 months or more.",
    },
  ];

  return (
    <>
      <Box bgcolor="#fcefb8">
        <Container
          maxWidth={"xl"}
          sx={{
            display:{xs:"block"},
            padding: { xs: "80px 0px 10px" },
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={4} lg={4} xl={3}>
              <Box
                sx={{
                  // width: { md: "90%", xl: "100%" },
                  // display: "flex",
                  // alignItems: { xs: "center", md: "left" },
                  // justifyContent: { xs: "center", md: "left" },
                  // flexDirection: "column",
                  padding: { md: "0% 0% 0% 25%",lg:"0% 0% 0% 25%",xl:"0%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    fontSize: { xs: "24px", sm: "32px" },
                    fontFamily: "Inter",
                    color: "#243771",
                    fontWeight: "900",
                    lineHeight: "1.1",
                    // margin: { xs: "0px 0px 8px" },
                    // padding: { xl: "0rem 5rem 0rem" },
                  }}
                >
                  Medical Loan Eligibility Criteria
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    fontSize: { xs: "20px", sm: "20px" },
                    fontFamily: "Inter",
                    color: "#404040",
                    // fontWeight: "900",
                    lineHeight: { xs: "1.1", md: "1.5" },
                    // margin: { xs: "0px 0px 8px" },
                    // padding: { xl: "0rem 5rem 0rem" },
                  }}
                >
                  Following are the typical eligibility criteria for a medical
                  loan:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: { xs: "center", sm: "left" },
                    justifyContent: { xs: "center", md: "left" },
                    // margin: "0px 0px 20px",
                    // padding: { lg: "0rem 5rem 0rem 0rem" },
                  }}
                >
                  <GetMatchedButton />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              container
              //   spacing={2}
              xs={12}
              md={8}
              lg={8}
              xl={9}
              //   xl={9}
              sx={{
                width: "90%",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                listStyle: "none",
                marginLeft: "0",
                paddingLeft: "0",
                textAlign: "center",
              }}
            >
              {eligibilityCriteria.map((criteria, index) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  lg={3}
                  key={index}
                  //   spacing={2}
                  sx={{
                    alignContent: "center",
                    background: "#fff",
                    border: "2px solid #243771",
                    borderRadius: "5px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    display: "flex",
                    flexWrap: "wrap",
                    flexFlow: "row wrap",
                    justifyContent: "space-around",
                    margin: { xs: "0px 10px 25px", sm: "0px 20px 55px" },
                    minHeight: { xs: "240px" },
                    padding: "25px 12px",
                    width: { xs: "220px" },
                    textAlign: "center",
                  }}
                >
                  {/* <Paper elevation={3}> */}
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: "20px",
                      fontFamily: "Inter",
                      fontWeight: "900",
                    }}
                  >
                    {criteria.title}
                  </Typography>
                  <Typography>{criteria.description}</Typography>
                  {/* </Paper> */}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MedicalLoanEligibility;
