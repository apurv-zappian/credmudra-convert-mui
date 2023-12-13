import { FiberManualRecord } from "@mui/icons-material";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

const WhenShouldYouAvoid = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "1.2rem",
    // marginRight: ".5vmax",
    position:"absolute",
    top:"15px",
    left:"0"
  };

  const TypographySubHeadings = {
    color: "#404040",
    fontWeight: "900",
    fontSize:"16px",
    fontFamily:"Inter,sans-serif"
  };

  return (
    <Grid container bgcolor="#FCEFB8" p="2rem">
      {/* Left Side  */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={5}>
        <Box
          sx={{
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            flexDirection: "column",
            //   marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              // width: {
              //   xs: "100%",
              //   md: "70%",
              //   lg: "70%",
              //   xl: "80%",
              //   display: "flex",
              //   flexDirection: "column",
              padding: {
                // xs:"3rem 1rem 1rem 1.3rem",
                // sm:"3rem",
                // md:"3rem",
                lg:"3rem 0 0 0",
                xl:"5rem 0 0 9rem"
              },
              width:{sm:"90%"},
            
              // align: {xs:"center",md:"left"},
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bolder"
              color="#243771"
              textAlign={{ xs: "center", md: "left" }}
              sx={{
                fontFamily:"Inter,sans-serif",
                fontSize:"24px",
                marginBottom:"23px",
                fontWeight:"900"
              }}
            >
              When Should You Avoid Taking A Personal Loan?
            </Typography>
            <Typography variant="h6" textAlign={{ xs: "center", md: "left" }} sx={{
              fontSize:"16px",
              marginBottom:"23px"
            }}>
              To safeguard your financial stability, it is advisable that you
              avoid taking a personal loan if you are facing situations as
              mentioned here:
            </Typography>
            <Box textAlign={{xs:"center",md:"left"}} sx={{marginBottom:'23px'}}>
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "#243788",
                    color: "#F7D64A",
                  },
                  padding: { xs: "12px 15px 12px", xl: "12px 25px 12px 25px" },
                  boxShadow: "0px 3px 6px #00000029",
                  borderRadius: "10px",
                  backgroundColor: "#F7D64A",
                  color: "#243788",
                  fontWeight: "900",
                  transition: ".4s all ease-in-out",
                  textTransform: "capitalize ",
                  fontSize: "1rem",
                  width: { xs: "200px", xl: "250px" },
                  marginTop: "1rem",
                }}
              >
                Get Matched Now!
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      {/* Right Side */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={7}>
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            flexDirection: "column",
            // marginLeft: { xs: "0", xl: "25%" },
            //   padding: { xs: "2rem 7rem 1rem" },
            // padding:"3rem"
          }}
        >
          <Box  sx={{
                  width: {sm:"100%", md: "85%", lg: "90%", xl: "80%" },
          }}>
            <List>
              <ListItem sx={{position:"relative"}}>
                <FiberManualRecord sx={{ ...CircleIcon}} />
                <Typography variant="h6" sx={{
                  marginLeft:"10px",
                  fontFamily:"Inter,sans-serif",
                  fontSize:"16px",
                  color:"#404040"
                }}>
                  <Typography
                    variant="h5"
                    display="inline"
                    sx={{ ...TypographySubHeadings }}
                  >
                    Unstable Job:
                  </Typography>
                  If your employment and income are not stable, it is better if
                  you stop taking the personal loan. It may become challenging
                  for you to repay and get out of your debt obligations in case
                  of a sudden stop or decrease in the flow of your income.
                </Typography>
              </ListItem>
              <ListItem sx={{position:"relative"}}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography variant="h6" sx={{
                  marginLeft:"10px",
                  fontFamily:"Inter,sans-serif",
                  fontSize:"16px",
                  color:"#404040"
                }}>
                  <Typography
                    variant="h5"
                    display="inline"
                    sx={{ ...TypographySubHeadings }}
                  >
                    Outstanding Debts:
                  </Typography>
                  If you are already repaying your credit card bills and
                  instalments of other loans, you should avoid engaging in a new
                  financial obligation. You should keep an eye on your
                  debt-to-income ratio. An ideal debt-to-income ratio is 36% or
                  below that.
                </Typography>
              </ListItem>
              <ListItem sx={{position:"relative"}}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography variant="h6" sx={{
                  marginLeft:"10px",
                  fontFamily:"Inter,sans-serif",
                  fontSize:"16px",
                  color:"#404040"
                }}>
                  <Typography
                    variant="h5"
                    display="inline"
                    sx={{ ...TypographySubHeadings }}
                  >
                    Poor Credit Score:
                  </Typography>
                  When your credit score is below the minimum eligibility
                  parameter, it is better if you work on improving that before
                  taking a personal loan. If you still apply, the chances are
                  that the lender will reject your loan application, leaving a
                  negative impact on your credit report.
                </Typography>
              </ListItem>
              <ListItem sx={{position:"relative"}}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography variant="h6" sx={{
                  marginLeft:"10px",
                  fontFamily:"Inter,sans-serif",
                  fontSize:"16px",
                  color:"#404040"
                }}>
                  <Typography
                    variant="h5"
                    display="inline"
                    sx={{ ...TypographySubHeadings }}
                  >
                    Risky Investments:
                  </Typography>
                  The purpose of taking a personal loan should never be to make
                  an investment in the stock market, other risky instruments or
                  gambling. This is so because you can book loss instead of
                  gaining profit. Under such a circumstance, it will become
                  difficult for you to repay.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WhenShouldYouAvoid;
