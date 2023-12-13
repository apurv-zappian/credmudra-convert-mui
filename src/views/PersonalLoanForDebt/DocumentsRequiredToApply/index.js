import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import GetMatchedButton from "../../../components/GetMatchedButton";
import { FiberManualRecord } from "@mui/icons-material";

const DocumentsRequiredToApply = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
    // marginTop:"-10px"
  };

  const TypographySubHeadings = {
    color: "#243771",
    fontSize: { xs: "16.8px", sm: "18.8px" },
    fontFamily: "Inter",
    fontWeight: "900",
  };
  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid container sx={{ padding: { xs: "10px" } }}>
          {/* Left Side */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "left" },
                justifyContent: "center",
                flexDirection: "column",
                // padding:{xs:"1rem 5rem 1rem"}
              }}
            >
              <Box
                sx={{
                  width: { sm: "70%", xl: "90%" },
                  margin: {xl:"0px 65px 0px 0px"},
                  // padding: { sm: "80px 0 75px", lg: "50px 0px 50px" },
                }}
                textAlign={{ xs: "center", sm: "left" }}
              >
                <Typography
                  sx={{
                    color: "#243771",
                    fontSize: { xs: "24px", sm: "30px", lg: "36px" },
                    fontFamily: "Inter",
                    fontWeight: "900",
                    lineHeight: "1.1",
                    margin: "0 0 14px",
                  }}
                >
                  Documents You Need To Prepare For Personal Loan
                </Typography>
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontFamily: "Inter",
                    lineHeight: "1.5",
                    margin: "0 0 24px",
                    fontWeight: "500",
                  }}
                >
                  Here are the documents you will need to submit during the
                  personal loan application process:
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
          {/* Right Side  */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", xl: "left" },
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                // padding:{sm:"5rem 0 0",xl:"3rem",}
                // margin:"0 0 30px",
                // padding:{sm:"5rem 0 4rem",lg:"3rem 4rem 3rem 0rem"},
                // marginRight:{xl:"7rem"}
              }}
            >
              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: { xs: "16px", sm: "18px" },
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                  >
                    <Typography
                      display="inline"
                      sx={{ ...TypographySubHeadings }}
                    >
                      Identity Proof:
                    </Typography>{" "}
                    Voter ID Card, Passport, Driving License, Aadhaar Card, PAN
                    Card, etc.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: "16px",
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                  >
                    <Typography
                      display="inline"
                      sx={{ ...TypographySubHeadings }}
                    >
                      {" "}
                      Residential Proof:
                    </Typography>
                    Voter ID Card, Utility Bills (Electricity and Water Bill),
                    etc.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontSize: "16px",
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                  >
                    <Typography
                      display="inline"
                      sx={{ ...TypographySubHeadings }}
                    >
                      Income Proof:
                    </Typography>
                    Salary Slip (for salaried individuals), Audited financial
                    record (for self-employed individuals), bank account
                    statement.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DocumentsRequiredToApply;
