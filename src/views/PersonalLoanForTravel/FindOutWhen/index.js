import React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import findoutimg from "../../../assets/images/PersonalLoanForTravelImages/findout.png";

const FindOutWhen = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
    // marginTop:"-10px"
  };
  return (
    <>
      <Box
        sx={{
          background: "#243771",
          overflow: "hidden",
          padding: "65px 0",
          position: "relative",
        }}
      >
        <img
          src={findoutimg}
          alt="Credmudra logo"
          style={{
            left: "5%",
            maxWidth: "530px",
            opacity: ".6",
            position: "absolute",
            top: "0",
          }}
        />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            //   sx={{ display: { xs: "none", sm: "flex" } }}
            // alignContent={"center"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              // backgroundColor:"gray"
              padding: "0px 10px 0px",
            }}
          >
            <Box
              sx={{
                // padding: {
                //   xs: "0",
                //   sm: "0 0 0 16px",
                //   lg: "0 0 0 144px",
                //   // xl: "0 0 0 150px",
                // },
                width: { sm: "60%" },
                // marginLeft:"15%",
                // backgroundColor:'pink'
              }}
            >
              <Typography
                sx={{
                  color: "#f7d64a",
                  fontSize: { xs: "", sm: "36px" },
                  fontWeight: "900",
                  marginBottom: "25px",
                  lineHeight: "1.1",
                  fontFamily: "Inter",
                }}
              >
                Find Out When Are You Not Eligible
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "17px", sm: "20px" },
                  fontWeight: "200",
                  fontFamily: "Inter",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                You need to satisfy our few simple eligibility criteria in order
                to get connected with our lender and get a travel loan online.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ padding: "0px 10px 0px" }}>
            <Box
              sx={{
                color: "#fff",
                padding: {
                  xs: "0",
                  sm: "0 16px 0 0",
                  lg: "0 144px 0 0",
                  xl: "0 240px 0 0",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "18pxpx" },
                  //   fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                {" "}
                <FiberManualRecord sx={{ ...CircleIcon }} />
                Business owners, individuals, entrepreneurs, MSMEs, startups and
                self-employed professionals, such as CS, CAs, architects and
                doctors
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "18pxpx" },
                  //   fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                {" "}
                <FiberManualRecord sx={{ ...CircleIcon }} />
                Public and private limited companies, partnership firms, sole
                proprietorships, LLPs
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "18pxpx" },
                  //   fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                {" "}
                <FiberManualRecord sx={{ ...CircleIcon }} />
                Large enterprises dealing only in trading, services and
                manufacturing sectors
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "18pxpx" },
                  //   fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                {" "}
                <FiberManualRecord sx={{ ...CircleIcon }} />
                Co-operative societies, NGOs and trusts
              </Typography>
              <List>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",

                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                    Age :
                  </Typography>{" "}
                  21 to 65 years old
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",

                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                    Employment type :
                  </Typography>{" "}
                  Self-employed
                </ListItem>

                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",

                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                    Business tenure :
                  </Typography>{" "}
                  At least 1 year or more
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                    display: "inline",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                    Minimum yearly turnover:
                  </Typography>
                  Vary across lenders
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                    Credit score :
                  </Typography>{" "}
                  750 or more
                </ListItem>
              </List>
              <Typography
                sx={{ fontSize: "15px", fontFamily: "Inter", color: "FFFFFF" }}
              >
                {" "}
                Note: The above-mentioned details can vary from lender to lender
                depending on their terms and conditions.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FindOutWhen;
