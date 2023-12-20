import { Box, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import Section1Form from "../../../components/Section1Form";
import waveimg from "../../../assets/images/PersonalLoanForTravelImages/waveimg.svg";
import travelloantailoredimg from "../../../assets/images/PersonalLoanForTravelImages/travelloantailored.png";

const TravelLoanTailored = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          minHeight: { xs: "0vh", sm: "100vh" },
          padding: { xs: "16px", md: "32px" },
        }}
      >
        <Grid item xs={12} sm={6} marginTop={{ xs: "15%", sm: "0%" }}>
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
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", sm: "left" },
                width: { lg: "90%", xl: "70%" },
                marginLeft: { lg: "5%", xl: "18%" },
              }}
            >
              <Typography
                // variant="h3"
                gutterBottom
                sx={{
                  fontFamily: "Inter",
                  color: "#243771",
                  // maxWidth:{xs:"400px",sm:"540px"},
                  maxWidth: "540px",
                  fontSize: { xs: "26px", sm: "34px", md: "34px", lg: "38px" },
                  lineHeight: "1.2",
                  fontWeight: "900",
                }}
              >
                Travel Loan Tailored To Your Dreams!
              </Typography>
              <Typography
                sx={{
                  font: "normal normal normal 18px/29px Inter",
                  color: "#10162c",
                  marginBottom: "14px",
                }}
              >
                Say goodbye to financial worries and bon voyage to your dream
                destination!
              </Typography>

              <Typography
                sx={{
                  marginBottom: "14px",
                  color: "#404040",
                  fontSize: "14px",
                  fontFamily: "Inter",
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
                    fontFamily: "Inter",
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
              // minHeight: {xs:"0vh",sm:"100vh"},
              justifyContent: "center",
              flexDirection: "column",
              paddingY: "3rem",
            }}
          >
            <img
              src={travelloantailoredimg}
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
    </Box>
  );
};

export default TravelLoanTailored;
