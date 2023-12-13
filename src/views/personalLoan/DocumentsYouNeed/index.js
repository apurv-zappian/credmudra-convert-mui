import { FiberManualRecord } from "@mui/icons-material";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

const DocumentsYouNeed = () => {

  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "1vmax",
    marginRight: ".5vmax",
    // marginTop:"-10px"
  };

  const TypographySubHeadings = {
    color: "#243771",
    fontWeight: "bolder",
  };
  return (
    <>
      <Grid container p="2rem">
        {/* Left Side */}
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: {xs:"center",sm:"left"},
              justifyContent: "center",
              flexDirection: "column",
              // padding:{xs:"1rem 5rem 1rem"}
            }}
          >
            <Box sx={{width:{xl:"50%"}}} textAlign={{xs:"center",sm:"left"}}>
            <Typography variant="h4" color="#243771" gutterBottom>
              Documents You Need To Prepare For Personal Loan
            </Typography>
            <Typography variant="body1" gutterBottom width={{md:"80%"}}>
              Here are the documents you will need to submit during the personal
              loan application process:
            </Typography>
            <Box sx={{
               display:"flex",
               alignItems:"center",
               justifyContent: {xs:"center",sm:"left"},
            }}>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#243788",
                  color: "#F7D64A",
                },
                padding: "12px 25px 12px 25px",
               
                boxShadow: "0px 3px 6px #00000029",
                borderRadius: "10px",
                backgroundColor: "#F7D64A",
                color: "#243788",
                fontWeight: "900",
                transition: ".4s all ease-in-out",
                textTransform: "capitalize ",
                fontSize: {xs:"1.1rem",xl:"1rem"},
                // width: {xs:"200px",xl:"250px"},
                marginTop:"10px"
              }}
            >
              Get Matched Now!
            </Button>
            </Box>
            </Box>
          </Box>
        </Grid>
        {/* Right Side  */}
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", xl: "left" },
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
              // padding:{xs:"3rem",}
            }}
          >
            <List>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography variant="body1" color="#233771">
                  <Typography
                    variant="h6"
                    display="inline"
                    sx={{ ...TypographySubHeadings }}
                  >
                    Identity Proof:
                  </Typography>
                  Voter ID Card, Passport, Driving License, Aadhaar Card, PAN
                  Card, etc.
                </Typography>
              </ListItem>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography variant="body1" color="#233771">
                  <Typography
                    variant="h6"
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
                <Typography variant="body1" color="#233771">
                  <Typography
                    variant="h6"
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
    </>
  );
};

export default DocumentsYouNeed;
