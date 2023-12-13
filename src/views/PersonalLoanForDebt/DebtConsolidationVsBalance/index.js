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
import debtconsolidationloanvsbalanceimg from "../../../assets/images/PersonalLoanForDebtImages/debtconsolidationvsbalance.png";
import GetMatchedButton from "../../../components/GetMatchedButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const DebtConsolidationVsBalance = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#f7d64a",
    fontSize: { xs: "18px", sm: "16px", md: "22px" },
    fontWeight: "900",
    fontFamily: "Inter",
  };
  const AccPara = {
    fontSize: { xs: "16px" },
    fontFamily: "Inter",
    // padding:"16px 20px"
  };

  const CheckCircle = {
    marginTop: "6px",
    marginRight: "10px",
  };
  return (
    <>
     <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px",}}>
      <Grid
        container
        className="personal-loan-discover-the-power accordian_white_bg"
        sx={{ padding: { xs: "10px",} }}
        // sx={{ padding: { xs: "1rem", sm: "1rem", md: "2rem" } }}
      >
        <Grid item xs={12} sm={6} sx={{ margin: { xs: "1rem 0rem 2rem" } }}>
          <Box
            sx={{
              // padding: {
              //   sm: "3rem 0rem 3rem 2rem",
              //   md: "3rem 0rem 3rem",
              //   lg: "3rem 0rem 0rem 6rem",
              // },
            }}
          >
            <Typography
              sx={{
                textAlign: { sm: "left" },
                fontSize: { xs: "24px", sm: "32px" },
                fontFamily: "Inter",
                color: "#243771",
                fontWeight: "900",
                lineHeight: { xs: "1.3", md: "1.1",lg:"1.5" },
                margin: "0px 0px 18px",
              }}
            >
              Debt Consolidation Vs. Balance Transfer - Which Is Your Safest
              Bet?
            </Typography>
            <Typography
              sx={{
                textAlign: { sm: "left" },
                fontSize: { xs: "16px",},
                fontFamily: "Inter",
                color: "#404040",
                // fontWeight: "900",
                lineHeight: "1.3",
                margin: "0px 0px 24px",
              }}
            >
              Although both methods are effective in debt management, you must
              consider all the features of these credit facilities before opting
              for one.
            </Typography>
            <Typography
              sx={{
                textAlign: { sm: "left" },
                fontSize: { xs: "16px",},
                fontFamily: "Inter",
                color: "#404040",
                // fontWeight: "900",
                lineHeight: "1.3",
                margin: "0px 0px 24px",
              }}
            >
              Here are a few points you should take into account:
            </Typography>
            {/* Accordion */}
            {/* Accordion items */}
            {/* Button for CTA */}
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
                <Typography sx={{ ...AccHeading }}>
                Evaluate the monetary benefit
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                Whether you are opting for a balance transfer or a debt consolidation, you must calculate the monetary benefits that you can achieve. The best way to evaluate this is by weighing the amount of money you will save by opting for either of these options. Based on this calculation, choose the facility that has a more saving scope.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{
                backgroundColor: "transparent",
                marginTop: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                <Typography sx={{ ...AccHeading }}>
                Know the costs involved
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                Even if the interest rates are low, you must take into account several additional costs, such as processing charges for a balance transfer or debt consolidation loan, foreclosure charges, documentation charges, etc. Consider these charges as they add to the total costs involved and make an informed decision accordingly.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{
                backgroundColor: "transparent",
                marginTop: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                <Typography sx={{ ...AccHeading }}>
                Read all terms and conditions carefully
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                Both balance transfer credits and debt consolidation loans are new loans. The terms and conditions for both will be fresh yet different. You must read all the points in the terms and conditions carefully to avoid unnecessary hassles in the long run.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Typography
              sx={{
                textAlign: { sm: "left" },
                fontSize: { xs: "16px"},
                fontFamily: "Inter",
                color: "#404040",
                // fontWeight: "900",
                lineHeight: "1.3",
                margin: "0px 0px 24px",
              }}
            >
              With all this information in hand, we hope you can make an
              informed decision on whether to apply for a debt consolidation
              loan to reduce your financial burden.
            </Typography>
            <Typography
              sx={{
                textAlign: { sm: "left" },
                fontSize: { xs: "16px"},
                fontFamily: "Inter",
                color: "#404040",
                // fontWeight: "900",
                lineHeight: "1.3",
                margin: "0px 0px 24px",
              }}
            >
              With Credmudra, you can get the required funds directly into your
              bank account within the shortest waiting period.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "left" },
                justifyContent: { xs: "center", sm: "left" },
              }}
            >
              <GetMatchedButton />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ margin: { xs: "0px 0px 16px" } }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding:{xl:'50px'}
            }}
          >
            <Box
              sx={{ width: { xl: "100%" },
              //  paddingTop: "2rem"
               }}
              // padding={{ lg: "0rem 7rem 0rem 0rem" }}
            >
              <img
                src={debtconsolidationloanvsbalanceimg}
                alt="Things To Consider When Choosing Debt Consolidation loan"
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

export default DebtConsolidationVsBalance;
