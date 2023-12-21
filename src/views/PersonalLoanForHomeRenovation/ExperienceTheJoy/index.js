import { Box, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import waveimg from "../../../assets/images/PersonalLoanForHomeRenovation/waveimg.svg";
import { Label } from "@mui/icons-material";
import HomeRenovationimg from "../../../assets/images/PersonalLoanForHomeRenovation/homerenovation.png";
import Section1Form from "../../../components/Section1Form";

const ExperienceTheJoy = () => {
  return (
    <Box>
      <Grid
        container
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
                Experience The Joy Of Home Transformation.
              </Typography>
              <Typography
                sx={{
                  font: "normal normal normal 18px/29px Inter",
                  color: "#10162c",
                  fontSize: { xs: "16px", sm: "18px" },
                  marginBottom: "14px",
                  fontWeight: "300",
                }}
              >
              Revamp, Refresh, and Revitalize Your Home with Our Home Improvement Loan.
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
              <Box sx={{ width: { sm: "90%", md: "100%" } }}>
                <Section1Form />
              </Box>
              <Box display="flex" alignItems="flex-start">
                <Checkbox
                  {...Label}
                  defaultChecked
                  sx={{ marginTop: "12px" }}
                />
                <Typography
                  marginTop="20px"
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
        <Grid item xs={12} sm={6} display={{ xs: "none", sm: "flex" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
              // minHeight: {xs:"0vh",sm:"100vh"},
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingY: "48px",
              marginTop: "2%",
            }}
          >
            <img
              src={HomeRenovationimg}
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

export default ExperienceTheJoy;
