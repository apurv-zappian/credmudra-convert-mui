import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import GetFreeCreditButton from "../../../components/GetFreeCreditButton";
import OtherContributingimg from "../../../assets/images/CreditScoreImages/othercontributingimg.png";

const OtherContributing = () => {
  return (
    <>
      <Grid
        container
        sx={{
          paddingY: "5%",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: { xs: "10px 16px 0px", sm: "0" },
            display: "flex",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: { sm: "10%" },
              //   padding: { sm: "20% 4% 10%", md: "10% 4% 10% 0%", lg: "0% 0%" },
            }}
          >
            <img
              alt="loading"
              style={{ width: "80%" }}
              src={OtherContributingimg}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ padding: { xs: "16px", sm: "0" } }}>
          <Box
            sx={{
              width: { xs: "100%", sm: "80%" },
            //   marginLeft: { xs: "0%", sm: "5%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "28px", lg: "38px" },
                fontWeight: "900",
                fontFamily: "Inter,sans-serif",
                color: "#243771",
                margin: { xs: "0px 0px 12px", lg: "0px 0px 28px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.1",
              }}
            >
              Other Contributing Factors:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                fontFamily: "Inter,sans-serif",
                color: "#404040",
                margin: "0px 0px 10px",
                textAlign: { xs: "center", sm: "left" },
                // padding: {
                //   sm: "0rem 3rem 0rem 0rem",
                //   lg: "0rem 6rem 0rem 0rem",
                //   xl: "0rem 11rem 0rem 0rem",
                // },
                lineHeight: "1.4",
                fontWeight: "300",
              }}
            >
              Besides the five major factors, other elements can influence your
              credit score, including:
            </Typography>
            <Box>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0px",
                }}
              >
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                    display: "inline",
                  }}
                >
                  <TaskAltIcon sx={{marginRight:"10px",}} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                  Errors in your credit report : 
                  </Typography>{" "}
                  Ensure accuracy by checking your credit report regularly and disputing any errors.
                </ListItem>

                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                    display: "inline",
                  }}
                >
                  <TaskAltIcon sx={{marginRight:"10px",}} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                  Sparse credit history :
                  </Typography>{" "}
                  Limited credit history can hinder your score. Consider building your credit with a secured credit card.
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                    display: "inline",
                  }}
                >
                  <TaskAltIcon sx={{marginRight:"10px",}} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                  Loan guarantor defaults :
                  </Typography>{" "}
                  Defaulting on a loan guarantee can negatively impact your score.
                </ListItem>
                <ListItem
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                    display: "inline",
                  }}
                >
                  <TaskAltIcon sx={{marginRight:"10px",}} />
                  <Typography
                    sx={{
                      color: "#243771",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      display: "inline",
                    }}
                  >
                    CRIF High Mark :
                  </Typography>{" "}
                  Specializes in credit information for individuals and
                  businesses.
                </ListItem>
              </List>
              <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                fontFamily: "Inter,sans-serif",
                color: "#404040",
                margin: "10px 0px 0px",
                textAlign: { xs: "center", sm: "left" },
                // padding: {
                //   sm: "0rem 3rem 0rem 0rem",
                //   lg: "0rem 6rem 0rem 0rem",
                //   xl: "0rem 11rem 0rem 0rem",
                // },
                lineHeight: "1.4",
                fontWeight: "300",
              }}
            >
            Understanding these factors empowers you to make informed decisions and optimize your credit score for better financial opportunities.
            </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left" },
                }}
              >
                <GetFreeCreditButton />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OtherContributing;
