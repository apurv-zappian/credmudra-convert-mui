import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import tipstograbimg from "../../../assets/tipstograbimg.webp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TipsToGrab = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeadingColor = {
    color: "#243771",
    fontSize: "1rem",
    fontWeight: "bold",
  };

  const CheckCircle = {
    marginTop: "6px",
    color: "black",
    marginRight: "10px",
  };
  return (
    <>
      <Box>
        <Grid container p="2rem">
          {/* Left Side */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems:"left",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{
                 padding: {
                  // xs:"3rem 1rem 1rem 1.3rem",
                  // sm:"3rem",
                  // md:"3rem",
                  lg:"3rem 0 0 0",
                  xl:"3rem 0 0 13rem"
                },
                width:{sm:"90%",xl:"100%"}
              }}>
                <Typography variant="h4" color="#243771" fontWeight="bolder">
                  Tips To Grab The Best Deal On Personal Loan
                </Typography>
                <Typography variant="h6" color="#404040" gutterBottom>
                  You can follow the tips mentioned below to grab the best deal
                  on personal loan and make repayment less troublesome:
                </Typography>
                <Accordion
                elevation={0}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{
                    backgroundColor: "transparent",
                    marginTop: "20px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeadingColor }}>
                      Determine the Required Credit:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Taking a credit more than your requirement will lead you
                      to pay more interest. As it will increase the instalment
                      amount, you may face difficulties in repayment. This is
                      why, before applying to get an instant personal loan,
                      estimate the amount you will need to meet your credit
                      shortage. After this, you will not mistakenly borrow less
                      or more than required.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                 elevation={0}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  sx={{
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeadingColor }}>
                      Check Your Credit Report:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Since a personal loan is an unsecured credit facility,
                      lenders put more focus on the creditworthiness of their
                      borrowers. Credit scores and reports contain all the
                      necessary information regarding your credibility as a
                      borrower. By checking the credit score and report, you can
                      ensure that all the information mentioned there is
                      correct. In case it is not, you can raise a complaint.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                elevation={0}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  style={{ backgroundColor: "transparent" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeadingColor }}>
                      Compare Loan Offers:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      At Credmudra, there are more than 30 lenders from which
                      you can borrow. You can see that their loan offers are not
                      the same. The interest, charges and other terms can vary.
                      This is why, you should ideally check all the personal
                      loan details properly and choose one that charges
                      comparatively lower. This will help you keep your cost of
                      borrowing as low as possible.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                elevation={0}
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  style={{ backgroundColor: "transparent" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeadingColor }}>
                      Choose a Suitable Tenure:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Choosing a suitable tenure is essential for smooth
                      repayment. When the tenure is longer, you will have to be
                      ready to pay more interest on your loan. When you go with
                      a shorter tenure, your interest outgo stays low but the
                      instalment becomes high. Therefore, the tenure should be
                      optimum so that the instalment amount stays within your
                      capacity.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              {/* </Box> */}
              <Box
                sx={{
                  display:"flex",
              alignItems:"center",
              justifyContent: {xs:"center",sm:"left"},
             
                }}
              >
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#E7BC08",
                    },
                    padding: "12px 25px 12px 25px",
                    boxShadow: "0px 3px 6px #00000029",
                    borderRadius: "10px",
                    backgroundColor: "#F7D64A",
                    color: "#243788",
                    marginTop: "10px",
                    fontWeight: "900",
                    transition: ".4s all ease-in-out",
                    textTransform: "capitalize ",
                    fontSize: { xs: "1.1rem", xl: "1rem" },
                  }}
                >
                  Get Matched Now!
                </Button>
              </Box>
            </Box>
            </Box>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "left",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: { xl: "70%" }, padding:"20px 10px 10px 10px" }}>
                <img
                  src={tipstograbimg}
                  alt="loading"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TipsToGrab;
