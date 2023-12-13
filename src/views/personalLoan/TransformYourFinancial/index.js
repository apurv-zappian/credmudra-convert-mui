import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import transformimg1 from "../../../assets/transformimg1.png";
import transformimg2 from "../../../assets/transformimg2.png";
import transformimg3 from "../../../assets/transformimg3.png";

const TransformYourFinancial = () => {
  return (
    <>
      <Box bgcolor="#FCEFB8">
        <Container>
          <Grid container>
            {/* top section */}
            <Grid item xs={12}>
              <Box sx={{padding:"3rem 3rem 1rem"}}>
                <Typography
                  variant="h4"
                  color="#243771"
                  fontWeight="bolder"
                  textAlign="center"
                >
                  Transform Your Financial Future: Sign Up For These And
                  Discover Credmudra's Proven Strategies
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* bottom section */}
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{
                display:"flex",
                flexWrap:"wrap",
                alignItems:"center",
                justifyContent:"space-evenly",
                flexDirection:{xs:"column",md:"row"},
                padding:"0rem 3rem 3rem"
              }}>
                <Box
                  sx={{
                    width: "33%",
                    minWidth: "250px",
                    minHeight: "auto",
                    position: "relative",
                    backgroundColor:"#10162C",
                    marginTop:"1rem",
                    borderRadius:"10px",
                    marginRight:"10px"
                  }}
                >
                  <Box sx={{
                    width:"100%",
                    // display:"flex",
                    // flexDirection:"column",
                    // justifyContent:"space-evenly",
                    padding:"2rem"
                  }}>
                    <Typography color="white" gutterBottom>  Mudra Mentors+</Typography>
                    <Typography width="65%" color="whitesmoke">
                      Engage with extended community of Financial Advisors.
                    </Typography>
                    <img
                      alt="loading"
                      src={transformimg1}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "10px",
                        width: "66px",
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "33%",
                    minWidth: "250px",
                    minHeight: "auto",
                    position: "relative",
                    backgroundColor:"#5AB56B",
                    marginTop:"1rem",
                    borderRadius:"10px"
                  }}
                >
                  <Box sx={{
                    width:"100%",
                    // display:"flex",
                    // flexDirection:"column",
                    // justifyContent:"space-evenly",
                    padding:"2rem"
                  }}>
                    <Typography color="white" gutterBottom>  Mudra Mentors+</Typography>
                    <Typography width="65%" color="whitesmoke">
                      Engage with extended community of Financial Advisors.
                    </Typography>
                    <img
                      alt="loading"
                      src={transformimg2}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "10px",
                        width: "66px",
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "33%",
                    minWidth: "250px",
                    minHeight: "auto",
                    position: "relative",
                    backgroundColor:"#10162C",
                    marginTop:"1rem",
                    borderRadius:"10px",
                    marginLeft:"10px"
                  }}
                >
                  <Box sx={{
                    width:"100%",
                    // display:"flex",
                    // flexDirection:"column",
                    // justifyContent:"space-evenly",
                    padding:"2rem"
                  }}>
                    <Typography color="white" gutterBottom>  Mudra Mentors+</Typography>
                    <Typography width="65%" color="whitesmoke">
                      Engage with extended community of Financial Advisors.
                    </Typography>
                    <img
                      alt="loading"
                      src={transformimg3}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "10px",
                        width: "66px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          </Container>
      </Box>
    </>
  );
};

export default TransformYourFinancial;
