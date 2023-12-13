import {
    Box,
    Checkbox,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";
  import section1image from "../../../assets/section1image.png";
  import waveimgsection1 from "../../../assets/wavesection1.svg";
import Section1Form from "../../../components/Section1Form";
  
  const PlHomePage = () => {
  
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
  
   
  
    return (
      <>
        {/* <Box sx={{ display: "flex",minHeight:"auto"}}> */}
          <Grid container sx={{minHeight:"100vh"}} p="2rem">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img
                alt="loading"
                src={waveimgsection1}
                style={{
                  position: "absolute",
                  top: "0",
                  left:"0",
                  width: "50%",
                  zIndex: "-1",
                }}
              />
  
              <Box
                sx={{
                  // padding: "0rem 10rem 0rem",
                  display: "flex",
                  minHeight: "100vh",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{
                  padding:{xs:"0 1rem 0rem",xl:"0 9rem 0"},
                  textAlign:{xs:"center",md:"left"}
                  }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    font:'normal normal 900 38px/45px Inter',
                    color: "#243771",
                    // maxWidth:{xs:"400px",sm:"540px"},
                    maxWidth:"540px",
                    fontSize:{xs:"30px",lg:"34px"},
                    lineHeight:"1.3"
                  }}
                >
                  Personal Loans- Handpicked Offers And Highest Disbursal Rate
                </Typography>
                <Typography variant="h6" sx={{
                  font:"normal normal normal 18px/29px Inter",
                  color:"#10162c",
                  marginBottom:"14px"
                }}>
                  So why wait ? Make your move and take that first step towards
                  your aspirations.
                </Typography>
  
                <Typography variant="subtitle1" sx={{
                  marginBottom:"14px",
                  color:"#404040"
                }}>
                  Enter your 10 digit mobile number to proceed
                </Typography>
                <Section1Form />
                <Box
                  display="flex"
                  alignItems="left"
                >
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{ marginTop: "12px" }}
                  />
                  <Typography
                    marginTop="20px"
                    variant="subtitle2"
                    textAlign="justify"
                    width={{md:"80%",xl:"65%"}}
                    sx={{
                      color:"#999",
                      fontSize:"13px",
                      lineHeight:"1.5"
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
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Box sx={{
                  display: {xs:'none',sm:"none",md:"flex",xl:"flex"},
                  minHeight: "100vh",
                  justifyContent: "center",
                  flexDirection: "column",
                }}>
              <img
                src={section1image}
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "2%",
                }}
                alt="loading"
              />
              </Box>
            </Grid>
          </Grid>
        {/* </Box> */}
      </>
    );
  };
  
  export default PlHomePage;
  