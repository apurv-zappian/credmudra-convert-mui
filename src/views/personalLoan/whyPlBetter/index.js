import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import whyisplbetter from "../../../assets/images/PersonalLoanImages/whyisplbetterimg.webp";
import GetMatchedButton from "../../../components/GetMatchedButton";

const WhyIsPlBetter = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "18px", md: "22px" },
    fontFamily: "Inter",
    fontWeight: "900",
  };
  const AccPara = {
    color: "#222",
    fontFamily: "Inter",
    fontSize: { xs: "16px" },
  };

  const CheckCircle = {
    // marginTop: "6px",
    color: "black",
    marginRight: "10px",
  };
  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid
          container
          // sx={{ padding: { xs: "3rem .5rem 3rem", sm: "1rem", md: "2rem" } }}
          sx={{ padding: { xs: "10px", md: "32px" } }}
        >
          {/* Left Side */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // padding: {
                  //   // xs:"3rem 1rem 1rem 1.3rem",
                  //   sm: "0 0 0 1rem",
                  //   // md:"3rem",
                  //   lg: "3rem 0 0 0",
                  //   xl: "3rem 0 0 13rem",
                  // },
                  width: { sm: "90%", xl: "100%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    color: "#243771",
                    fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                    fontFamily: "Inter",
                    fontWeight: "800",
                    lineHeight: "1.1",
                    margin: "0 0 18px",
                  }}
                >
                  Why Is Personal Loan A Better Choice?
                </Typography>
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    color: "#404040",
                    fontSize: { xs: "16px", md: "21px" },
                    fontFamily: "Inter",

                    lineHeight: "1.5",
                    margin: "0 0 18px",
                  }}
                >
                  Why should you opt for a personal loan over other credit
                  facilities? Here are the reasons you should know:
                </Typography>
                <Accordion
                  elevation={0} 
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{
                    backgroundColor: "transparent",
                    marginTop: "20px",
                    // padding: "0px 0px 10px 0px",
                  }}
                >
                  <AccordionSummary
                    // sx={{display:'flex',alignItems:'center'}}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeading }}>
                      Restrictions-Free End-Usage:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      The credit you get through the personal loan will come
                      with no restriction upon its usage. That means you are
                      free to spend the loan amount in whichever way you prefer.
                      Whether you use the money to bear the expenses of travel,
                      home or kitchen renovation, healthcare bills, or other, it
                      depends solely on your discretion.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  elevation={0}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  sx={{
                    backgroundColor: "transparent",
                    // padding: "0px 0px 10px 0px",
                  }}
                >
                  <AccordionSummary
                    sx={{ display: "flex", alignItems: "center" }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      No Need for Collateral:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Personal loan is a type of unsecured credit facility. This
                      means you do not need to keep your dear properties as
                      collateral. It is due to this nature of the personal loan
                      that you do not need to put your property at risk. It also
                      minimises the time it would take to verify your
                      property-related documents, thereby expediting the loan
                      approval.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  elevation={0}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{
                    // padding: "0px 0px 10px 0px",
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    sx={{ display: "flex", alignItems: "center" }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Minimal Documentation:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Since no property is involved, you will not have to
                      provide documents regarding the collateral. To apply for a
                      personal loan, you will have to provide only your basic
                      documents which remain easily available at your house.
                      These include only your KYC papers, identity proof and
                      records of income.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  elevation={0}
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  sx={{
                    backgroundColor: "transparent",
                    // padding: "0px 0px 10px 0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Immediate Credit Assistance:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      With a personal loan, you can meet your financial
                      requirement at a much lower turnaround time. Lenders
                      approve personal loan applications faster as the
                      verification process is less time-consuming. To get the
                      loan without any inconvenience, ensure that you meet the
                      eligibility criteria properly.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <GetMatchedButton />
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
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <Box
                sx={{ width: "100%" }}
                // paddingRight={{ xl: "7rem" }}
              >
                <img
                  src={whyisplbetter}
                  alt="loading"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WhyIsPlBetter;
