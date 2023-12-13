import { Box, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import waveimg from "../../../assets/images/PersonalLoanForDebtImages/waveimg.svg";
import personalloanfordebtimg from "../../../assets/images/PersonalLoanForDebtImages/personalloanfordebtimg.png";
import Section1Form from "../../../components/Section1Form";

const PersonalLoanForDebtConsolidation = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Grid
        container
        sx={{
          minHeight: { xs: "0vh", sm: "100vh" },
          padding:{xs:"16px",sm:"8px",md:"32px"}
        }}
        // bgcolor="gray"
      >
        <Grid item xs={12} sm={6} sx={{marginTop:{xs:"20%",sm:"0%"}}}>
          <img
            alt="loading"
            src={waveimg}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "50%",
              zIndex: "-1",
            }}
          />

          <Box
            sx={{
              display: "flex",
              minHeight: { xs: "72vh", sm: "100vh" },
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                padding:{sm:"16px",xl:"0 0 0 112px"},
                textAlign: { xs: "center", sm: "left" },
                width: { md: "80%", lg: "90%", xl: "90%" },
                // height:{xs:"50vh"}
              }}
            >
              <Typography
                // variant="h3"
                gutterBottom
                sx={{
                  font: "normal normal 900 38px/45px Inter",
                  color: "#243771",
                  // maxWidth:{xs:"400px",sm:"540px"},
                  maxWidth: "540px",
                  fontSize: { xs: "26px", md: "40px" },
                  lineHeight: "1.3",
                  fontWeight: "900",
                }}
              >
                Personal Loan For Debt Consolidation
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: "#10162c",
                  marginBottom: "14px",
                  fontSize:{xs:"16px"}
                }}
              >
                Debts can severely affect your financial strength and prevent
                you from saving money for future goals. To bypass such
                complications, you can consider consolidating your debt using a
                personal loan.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: "#10162c",
                  margin: "0px 0px 24px",
                  fontSize:{xs:"16px"}
                }}
              >
                In this regard, you can consider applying for a debt
                consolidation loan on Credmudra and reduce your financial burden
                considerably.
              </Typography>

              <Typography
                sx={{
                  marginBottom: "14px",
                  color: "#404040",
                  fontSize: "16px",
                }}
              >
                Enter your 10 digit mobile number to proceed
              </Typography>
              <Section1Form />
              <Box display="flex" alignItems="left">
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{ marginTop: "12px" }}
                />
                <Typography
                  marginTop="20px"
                  // variant="subtitle2"
                  textAlign="justify"
                  width={{ md: "80%", xl: "65%" }}
                  sx={{
                    color: "#999",
                    fontSize: "13px",
                    lineHeight: "1.5",
                    fontFamily:"Inter"
                  }}
                >
                  By continuing, I agree to Credmudra's Privacy Policy and Terms
                  & Conditions and receive communication from Credmudra via SMS,
                  E-mail, and WhatsApp.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Right Side */}
        <Grid item xs={12} sm={6} display={{ xs: "none", sm: "flex" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
            //   minHeight: {xs:"0vh",sm:"100vh"},
              justifyContent: "center",
              flexDirection: "column",
              paddingY:"3rem"
            }}
          >
            <img
              src={personalloanfordebtimg}
              style={{
                width: "100%",
                height: "auto",
                // marginTop: "2%",
              }}
              alt="loading"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalLoanForDebtConsolidation;
