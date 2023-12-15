import React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import findoutimg from "../../../assets/images/PersonalLoanForTravelImages/findout.png";

const EligibilityCriteriaTwoWheeler = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    // marginRight: "10px",
    // marginTop:"-10px"
  };
  return (
    <>
      <Box
        sx={{
          background: "#243771",
          overflow: "hidden",
          padding: "65px 0",
          position: "relative",
        }}
      >
        <img
          src={findoutimg}
          alt="Credmudra logo"
          style={{
            left: "0",
            maxWidth: "530px",
            opacity: ".6",
            position: "absolute",
            top: "0",
          }}
        />
        <Grid
          container
          sx={
            {
              // padding: { xs: "10px", md: "32px" }
            }
          }
        >
          <Grid
            item
            xs={12}
            sm={6}
            //   sx={{ display: { xs: "none", sm: "flex" } }}
            // alignContent={"center"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              // backgroundColor:"gray"
              padding: "0px 10px 0px",
            }}
          >
            <Box
              sx={{
                padding: {
                  xs: "20px",
                  sm: "0 0 0 16px",
                //   lg: "0 0 0 144px",
                  // xl: "0 0 0 150px",
                },
                width: { sm: "100%",md:"70%" },
                marginLeft:{md:"5%"},
                // backgroundColor:'pink'
              }}
            >
              <Typography
                sx={{
                  color: "#f7d64a",
                  fontSize: { xs: "24px", sm: "36px" },
                  fontWeight: "900",
                  marginBottom: "25px",
                  lineHeight: "1.1",
                  fontFamily: "Inter",
                  textAlign:{xs:"center",sm:'left'}
                }}
              >
                Eligibility Criteria For Two-Wheeler Personal Loan
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "17px", sm: "20px" },
                //   fontWeight: "200",
                  fontFamily: "Inter",
                  marginBottom: "20px",
                  color: "#fff",
                  textAlign:{xs:"center",sm:'left'}
                }}
              >
                Various lenders set their own set of eligibility parameters. Thus, you must individually check out their regulations before entering into a personal loan relationship. Hereby we have listed some general guidelines that most lenders adhere to while approving a personal loan for two wheeler:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ padding: "0px 10px 0px" }}>
            <Box
              sx={{
                color: "#fff",
                marginRight:{lg:"15%",xl:"35%"},
                padding: {
                  xs: "20px",
                  sm: "0 16px 0 0",
                //   lg: "0 144px 0 0",
                //   xl: "0 240px 0 0",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "18pxpx" },
                  //   fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: "left",
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                {" "}
                <FiberManualRecord sx={{ ...CircleIcon }} />
                You must be an Indian by birth.
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "18pxpx" },
                  //   fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: "left" ,
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                {" "}
                <FiberManualRecord sx={{ ...CircleIcon }} />
                Your age should be at least 18 years while applying. Also, applicants above 65 years are not generally given personal loans.
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "18pxpx" },
                  //   fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: "left",
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                {" "}
                <FiberManualRecord sx={{ ...CircleIcon }} />
                While applying you must have a stable income source, i.e., you must both be a salaried individual, a self-employed person, a pensioner, and so on.
              </Typography>
            
             
              <Typography
                sx={{ fontSize: "15px", fontFamily: "Inter", color: "FFFFFF" }}
              >
                {" "}
                Note: The eligibility criteria for a Two wheeler loan may differ depending on the lender. Therefore, it is recommended to review the lender's eligibility requirements before applying for a Two wheeler loan.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EligibilityCriteriaTwoWheeler;
