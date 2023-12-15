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

const DocumentsForTwoWheeler = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
    // marginTop:"-10px"
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
                  margin: { xl: "0px 65px 0px 0px" },
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
                  Documents Required To Apply For A Two Wheeler Loan
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
                  You will be surprised to see the extremely short list of
                  necessary documents while applying from Credmudra. Here is all
                  you need:
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
                alignItems: { xs: "center", xl: "flex-start" },
                // justifyContent: "flex-start",
                flexDirection: "column",
                color: "white",
                marginLeft:{xl:"5%"},
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
                    Any valid address/ ID proof like utility bills, Aadhaar
                    card, PAN card, Passport, etc.
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
                    Duly-filled loan application of the desired lender
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
                    Passport-sized photograph
                  </Typography>
                </ListItem>
              </List>
              <Typography
                    sx={{
                      color: "#404040",
                      fontSize: { xs: "16px", sm: "18px" },
                      fontFamily: "Inter",
                      lineHeight: "1.5",
                      fontWeight: "500",
                    }}
                  >
                   Besides these documentation procedures, you may need to bear minimal on-boarding fees. Every small detail is relayed to you before loan approval to maintain 100% transparency.
                  </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DocumentsForTwoWheeler;
