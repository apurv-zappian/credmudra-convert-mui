import { FiberManualRecord } from "@mui/icons-material";
import { Box, Button, Container, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import GetMatchedButton from "../../../components/GetMatchedButton";

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
    <Box bgcolor="#FCEFB8">
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid container sx={{ padding: { xs: "10px", md: "32px" } }}>
          {/* Left Side  */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={5} > 
            <Box
           
              sx={{
                display: "flex",
                alignItems: { xl: "left" },
                justifyContent: "center",
                flexDirection: "column",
                // padding: { sm: "60% 0% 0%" },
                width: { sm: "80%", xl: "90%" },
                textAlign: { xs: "center", sm: "left" },
                marginTop:{sm:"30%"}
              }}
            >
              <Typography
                textAlign={{ xs: "center", sm: "left" }}
                sx={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: { xs: "24px", sm: "32px", md: "40px" },
                  marginBottom: "23px",
                  fontWeight: "900",
                  color: "#243771",
                  lineHeight: "1.1",
                }}
              >
                When Should You Avoid Taking A Personal Loan?
              </Typography>
              <Typography
                textAlign={{ xs: "center", sm: "left" }}
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontFamily: "Inter,sans-serif",
                  color: "#404040",
                  marginBottom: "23px",
                }}
              >
                To safeguard your financial stability, it is advisable that you
                avoid taking a personal loan if you are facing situations as
                mentioned here:
              </Typography>
              <Box textAlign={{ xs: "center", sm: "left" }}>
                <GetMatchedButton />
              </Box>
            </Box>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "center",
                flexDirection: "column",
                // marginLeft: { xs: "0", xl: "25%" },
                //   padding: { xs: "2rem 7rem 1rem" },
                // padding:"3rem"
                width: { sm: "100%", md: "85%", lg: "90%", xl: "100%" },
              }}
            >
              <List>
                <ListItem sx={{ position: "relative" }}>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#404040",
                    }}
                  >
                    <Typography
                      display="inline"
                      sx={{ ...TypographySubHeadings }}
                    >
                      Unstable Job:
                    </Typography>
                    If your employment and income are not stable, it is better
                    if you stop taking the personal loan. It may become
                    challenging for you to repay and get out of your debt
                    obligations in case of a sudden stop or decrease in the flow
                    of your income.
                  </Typography>
                </ListItem>
                <ListItem sx={{ position: "relative" }}>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#404040",
                    }}
                  >
                    <Typography
                      display="inline"
                      sx={{ ...TypographySubHeadings }}
                    >
                      Outstanding Debts:
                    </Typography>
                    If you are already repaying your credit card bills and
                    instalments of other loans, you should avoid engaging in a
                    new financial obligation. You should keep an eye on your
                    debt-to-income ratio. An ideal debt-to-income ratio is 36%
                    or below that.
                  </Typography>
                </ListItem>
                <ListItem sx={{ position: "relative" }}>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#404040",
                    }}
                  >
                    <Typography
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
                <ListItem sx={{ position: "relative" }}>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#404040",
                    }}
                  >
                    <Typography
                      variant="h5"
                      display="inline"
                      sx={{ ...TypographySubHeadings }}
                    >
                      Risky Investments:
                    </Typography>
                    The purpose of taking a personal loan should never be to
                    make an investment in the stock market, other risky
                    instruments or gambling. This is so because you can book
                    loss instead of gaining profit. Under such a circumstance,
                    it will become difficult for you to repay.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhenShouldYouAvoid;
