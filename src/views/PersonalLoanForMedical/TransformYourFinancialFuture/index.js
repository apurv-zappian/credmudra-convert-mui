import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import transformimg1 from "../../../assets/images/PersonalLoanImages/transformimg1.png";
import transformimg2 from "../../../assets/images/PersonalLoanImages/transformimg2.png";
import transformimg3 from "../../../assets/images/PersonalLoanImages/transformimg3.png";

const TransformYourFinancialFuture = () => {
  return (
    <>
       <Box bgcolor="#FCEFB8">
        <Container
          maxWidth={"xl"}
          sx={{ padding: "60px 0px 50px",}}
        >
          <Grid
            container
            spacing={2}
            sx={{ padding: { xs: "10px", md: "32px" } }}
          >
            <Grid item xs={12}>
              <Typography
                sx={{
                  // color: "#fff",
                  fontSize: { xs: "24px", sm: "36px", md: "45px" },
                  fontFamily: "Inter",
                  fontWeight: "900",
                  margin: "25px 0px",
                  textAlign: "center",
                  color: "#243771",
                  lineHeight: "1.3",
                }}
              >
                Transform Your Financial Future: Sign Up For These And Discover
                Credmudra's Proven Strategies
              </Typography>
            </Grid>
          </Grid>
          <Grid container  spacing={2}  sx={{ padding: { xs: "10px", md: "32px",} }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  // padding:{sm:"0px 10px 0px 10px"}
                  // flexDirection: { xs: "column", md: "row" },
                  // padding:"0rem 3rem 3rem"
                }}
              >
                <Card
                  sx={{
                    // maxWidth: "100%",
                    minWidth: {xs:"250px",sm:"600px",md:"250px"},
                    minHeight: "150px",
                    position: "relative",
                    backgroundColor: "#10162C",
                    // marginTop: "1rem",
                    borderRadius: "10px",
                    // marginRight: "10px",
                  }}
                >
                  <CardContent
                    sx={{
                      width: "100%",
                      // display:"flex",
                      // flexDirection:"column",
                      // justifyContent:"space-evenly",

                      // marginBottom: "0 0 3rem",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "18px",
                        fontFamily: "Inter",
                        fontWeight: "900",
                        margin: "0px 0px 8px",
                      }}
                    >
                      Mudra Mentors+
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "18px",
                        fontFamily: "Inter",
                        margin: "0px 0px 8px",
                        width: "65%",
                      }}
                    >
                      Engage with an extended community of Financial Advisors.
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    alt="Mudra Mentors"
                    // height="140"
                    image={transformimg1}
                    sx={{
                      position: "absolute",
                      right: "15px",
                      top: "10px",
                      width: "66px",
                    }}
                  />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  // flexDirection: { xs: "column", md: "row" },
                  // padding:"0rem 3rem 3rem"
                  padding:{sm:"0px 10px 0px 10px"}

                }}
              >
              <Card  sx={{
                    //  maxWidth: "100%",
                    minWidth: {xs:"250px",sm:"600px",md:"250px"},
                    minHeight: "150px",
                    position: "relative",
                    backgroundColor: "#5ab56b",
                    // marginTop: "1rem",
                    borderRadius: "10px",
                    // marginRight: "10px",
                  }}>
                <CardContent  sx={{
                      width: "100%",
                      // display:"flex",
                      // flexDirection:"column",
                      // justifyContent:"space-evenly",

                      // marginBottom: "0 0 3rem",
                    }}>
                  <Typography  sx={{
                       color: "#fff",
                       fontSize: "18px",
                       fontFamily: "Inter",
                       fontWeight: "900",
                       margin: "0px 0px 8px",
                      }}>Resources</Typography>
                  <Typography sx={{ color: "#fff",
                        fontSize: "18px",
                        fontFamily: "Inter",
                        margin: "0px 0px 8px",
                        width: "65%",}}>
                    Know the moves that lead to Financial Freedom.
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="Resources"
                  image={transformimg2}
                  sx={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    width: "66px",
                  }}
                />
              </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  // flexDirection: { xs: "column", md: "row" },
                  // padding:"0rem 3rem 3rem"
                  padding:{sm:"0px 10px 0px 10px"}

                }}
              >
              <Card  sx={{
                    //  maxWidth: "100%",
                    minWidth: {xs:"250px",sm:"600px",md:"250px"},
                    minHeight: "150px",
                    position: "relative",
                    backgroundColor: "#10162C",
                    // marginTop: "1rem",
                    borderRadius: "10px",
                    // marginRight: "10px",
                  }}>
                <CardContent  sx={{
                      width: "100%",
                      // display:"flex",
                      // flexDirection:"column",
                      // justifyContent:"space-evenly",

                      // marginBottom: "0 0 3rem",
                    }}>
                  <Typography  sx={{
                       color: "#fff",
                       fontSize: "18px",
                       fontFamily: "Inter",
                       fontWeight: "900",
                       margin: "0px 0px 8px",
                      }}>Seek Solutions?</Typography>
                  <Typography sx={{ color: "#fff",
                        fontSize: "18px",
                        fontFamily: "Inter",
                        margin: "0px 0px 8px",
                        width: "65%",}}>
                   Let’s connect at Support@Credmudra.com
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="Resources"
                  image={transformimg3}
                  sx={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    width: "66px",
                  }}
                />
              </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default TransformYourFinancialFuture
