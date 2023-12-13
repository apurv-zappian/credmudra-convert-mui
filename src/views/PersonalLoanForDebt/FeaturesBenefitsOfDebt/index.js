import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import featuresbenefitsimg from "../../../assets/images/PersonalLoanForDebtImages/FeaturesBenefitsimg.png";
import GetMatchedButton from "../../../components/GetMatchedButton";

const FeaturesBenefitsOfDebt = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "18px", md: "22px" },
    fontWeight: "900",
    fontFamily: "Inter",
    padding: { md: "16px 20px 16px 0px" },
  };
  const AccPara = {
    color: "#404040",
    fontSize: { xs: "16px" },
    font: "normal normal normal 16px/22px Inter",
    padding: { xs: "2px 20px 16px" },
  };
  const CheckCircle = {
    marginTop: { md: "20px" },
    marginRight: "10px",
    // padding:{xs:"2px 20px 16px"}
  };
  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid container sx={{ padding: { xs: "10px" } }}>
          {/* Left Side */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "left",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // padding: {
                  //   // xs:"3rem 1rem 1rem 1.3rem",
                  //   sm: "3rem 0 0 1rem",
                  //   // md:"3rem",
                  //   lg: "3rem 0 0 0",
                  //   xl: "3rem 0 0 17rem",
                  // },
                  width: { sm: "90%", xl: "100%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    color: "#243771",
                    fontSize: { xs: "24px", sm: "24px", lg: "34px" },
                    fontFamily: "Inter",
                    fontWeight: "900",
                    lineHeight: "1.1",
                    margin: "0 0 18px",
                  }}
                >
                  Features And Benefits Of Debt Consolidation Loan
                </Typography>
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    color: "#404040",
                    fontSize: { xs: "16px", md: "21px" },
                    fontFamily: "Inter",
                    fontWeight: "300",
                    lineHeight: "1.5",
                    margin: "0 0 18px",
                  }}
                >
                  Here are the features and benefits that make debt
                  consolidation loans a viable option to manage finances:
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
                      Seamless loan approval
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      If you apply for a personal loan to consolidate your
                      ongoing debts, chances are, the lender may process your
                      loan application in just a few hours. After you make an
                      application, the lending partner will review your
                      application, check your credit score and verify your
                      documents. You will receive the loan amount within the
                      shortest waiting time if your loan application passes all
                      the criteria set by the lender.
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
                      Collateral-free credit facility
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Unlike other secured credit facilities, you will not have
                      to keep your assets as collateral in order to opt for a
                      personal loan for debt consolidation purposes. You will be
                      able to get the required sum using your CIBIL score.
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
                      Flexible repayment terms
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Choosing the repayment term is one of the biggest
                      advantages of opting for a personal loan for debt
                      consolidation. You can select loan repayment tenure
                      between 3 months to 2 years per your financial strength.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

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
          {/* Right Side */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                padding:{xl:"50px"}
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  // paddingTop: "3rem",
                  // marginRight: { xl: "12rem" },
                }}
              >
                <img
                  src={featuresbenefitsimg}
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

export default FeaturesBenefitsOfDebt;
