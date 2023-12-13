import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import { Box, Button, Container, Grid, List, ListItem, Typography } from "@mui/material";
import GetMatchedButton from "../../../components/GetMatchedButton";

const PersonalLoanFees = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
    // marginTop:"-10px"
  };

  const LeftTypographyStyle = {
    color: "#404040",
    fontSize: { xs: "16px", sm: "20px" },
    fontWeight: "900",
    fontFamily: "Inter",
  };

  return (
    <>
    <Box bgcolor="#FCEFB8">
      <Container
        maxWidth={"xl"}
        sx={{ padding: "60px 0px 50px"}}
      >
        <Grid container bgcolor="#FCEFB8">
          {/* Left Side  */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ padding: "0px 10px 0px" }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {/* <Box
                sx={{
                  padding: {
                    // xs:"3rem 1rem 1rem 1.3rem",
                    // sm: "0rem 0rem 0rem 2rem",
                    // md:"3rem",
                    // lg: "3rem 0 0 0",
                    // xl: "3rem 0 0 9rem",
                  },
                  // width: {sm:"100%" }
                }}
              > */}
              <Typography
                sx={{
                  color: "#404040",
                  fontSize: { xs: "15px", sm: "20px" },
                  fontFamily: "Inter",
                  // fontWeight: "900"
                  margin: { xs: "0px 0px 25px" },
                }}
              >
                Following are the different charges applicable on a personal
                loan:
              </Typography>

              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...LeftTypographyStyle }}>
                    Processing fee
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...LeftTypographyStyle }}>
                    Verification charge
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...LeftTypographyStyle }}>
                    Goods and Service Tax
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...LeftTypographyStyle }}>
                    Penal interest
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...LeftTypographyStyle }}>
                    Part-prepayment and foreclosure charge
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...LeftTypographyStyle }}>
                    Documentation charge
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...LeftTypographyStyle }}>
                    Stamp duty
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...LeftTypographyStyle }}>
                    Credit administration fee
                  </Typography>
                </ListItem>
              </List>
              <Typography
                sx={{
                  color: "#404040",
                  fontSize: { xs: "16px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
              >
              Note: The charges of personal loan may vary across our lenders.
              </Typography>
              <Typography
                sx={{
                  color: "#404040",
                  fontSize: { xs: "16px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  margin: { xs: "0px 0px 30px" },
                }}
              >
                Before accepting the personal loan offer, you should ideally
                carefully check these fees.
              </Typography>
              {/* </Box> */}
            </Box>
          </Grid>
          {/* Right Side */}
          <Grid
            item
            xs={12}
            sm={6}

            // sx={{
            //   margin: {
            //     xs: "0% 0% 10%",
            //     sm: "5% 0% 5%",
            //     md: "2% 0% 2%",
            //     xl: "0%",
            //   },
            // }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft:{xl:"15%"}
              }}
            >
              <Box
                sx={{
                  width: { sm: "70%", lg: "70%", xl: "80%" },
                  textAlign: { xs: "center", sm: "left" },
                  // padding:{xl:"0 9rem 0 0"},
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "24px", sm: "40px" },
                    fontFamily: "Inter",
                    margin: "0px 0px 10px",
                    color: "#243771",
                    fontWeight: "900",
                    lineHeight: { sm: "1.1" },
                    // margin:"0 0 32px"
                  }}
                >
                  Personal Loan Fees And Charges
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                >
                  <GetMatchedButton />
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

export default PersonalLoanFees;
