import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import CreditBureausImage from "../../../assets/images/CreditScoreImages/creditbureaus.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { FiberManualRecordTwoTone } from "@mui/icons-material";
import GetFreeCreditButton from "../../../components/GetFreeCreditButton";

const CreditBureaus = () => {
  return (
    <>
      <>
        <Grid
          container
          sx={{
            paddingY: "10%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid item xs={12} sm={6} sx={{ padding: { xs: "16px", sm: "0" } }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "80%" },
                marginLeft: { xs: "0%", sm: "15%" },
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
                Credit Bureaus In India:
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "20px" },
                  fontFamily: "Inter,sans-serif",
                  color: "#404040",
                  margin: "0px 0px 24px",
                  textAlign: { xs: "center", sm: "left" },
                  // padding: {
                  //   sm: "0rem 3rem 0rem 0rem",
                  //   lg: "0rem 6rem 0rem 0rem",
                  //   xl: "0rem 11rem 0rem 0rem",
                  // },
                  lineHeight: "1.7",
                  fontWeight: "300",
                }}
              >
                Credit bureaus collect and analyze your credit information,
                generating your credit score. These agencies act as
                intermediaries between lenders and borrowers. India has four
                main credit bureaus:
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
                    <TaskAltIcon />
                    <Typography
                      sx={{
                        color: "#243771",
                        fontWeight: "700",
                        fontFamily: "Inter",
                        fontSize: { xs: "16px", sm: "18px" },
                        display: "inline",
                      }}
                    >
                      CIBIL (TransUnion CIBIL):
                    </Typography>
                    The most established bureau in India, widely used by
                    lenders.
                  </ListItem>

                  <ListItem
                    sx={{
                      fontSize: { xs: "16px", sm: "18px" },
                      fontWeight: "400",
                      fontFamily: "Inter",
                      display: "inline",
                    }}
                  >
                    <TaskAltIcon />
                    <Typography
                      sx={{
                        color: "#243771",
                        fontWeight: "700",
                        fontFamily: "Inter",
                        fontSize: { xs: "16px", sm: "18px" },
                        display: "inline",
                      }}
                    >
                      Equifax:
                    </Typography>
                    Another major player offering credit reports and scores.
                  </ListItem>
                  <ListItem
                    sx={{
                      fontSize: { xs: "16px", sm: "18px" },
                      fontWeight: "400",
                      fontFamily: "Inter",
                      display: "inline",
                    }}
                  >
                    <TaskAltIcon />
                    <Typography
                      sx={{
                        color: "#243771",
                        fontWeight: "700",
                        fontFamily: "Inter",
                        fontSize: { xs: "16px", sm: "18px" },
                        display: "inline",
                      }}
                    >
                      Experian:
                    </Typography>
                    A newer entrant with a unique credit scoring model.
                  </ListItem>
                  <ListItem
                    sx={{
                      fontSize: { xs: "16px", sm: "18px" },
                      fontWeight: "400",
                      fontFamily: "Inter",
                      display: "inline",
                    }}
                  >
                    <TaskAltIcon />
                    <Typography
                      sx={{
                        color: "#243771",
                        fontWeight: "700",
                        fontFamily: "Inter",
                        fontSize: { xs: "16px", sm: "18px" },
                        display: "inline",
                      }}
                    >
                      CRIF High Mark:
                    </Typography>
                    Specializes in credit information for individuals and
                    businesses.
                  </ListItem>
                </List>
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
                padding: { sm: "20% 4% 10%", md: "10% 4% 10% 0%", lg: "0% 0%" },
              }}
            >
              <img
                alt="loading"
                style={{ width: "100%" }}
                src={CreditBureausImage}
              />
            </Box>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default CreditBureaus;
