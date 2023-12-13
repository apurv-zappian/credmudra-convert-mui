import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const FAQS = () => {
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
        <Grid container p="2rem">
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <Box sx={{textAlign:"center",padding:"3rem"}}>
              <Typography variant="h3" color="#243771" fontWeight="bolder">FAQs On Personal Loan</Typography>
              </Box>
            </Box>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{
              display:"flex",
              alignItems:"left",
              justifyContent:"left"
            }}> 
                <Box sx={{
                  width:{xl:"70%"}
                }}>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{
                  backgroundColor: "#FCEFB8",
                  marginTop: "20px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon  />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                  <Typography sx={{ ...AccHeadingColor }}>
                  How can I calculate the instalment amount of my personal loan?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  You can calculate the instalment amount of your personal loan by using an online personal loan calculator. In this tool, you will simply have to put in your loan amount, tenure, and the applicable interest rate.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{
                    backgroundColor: "#FCEFB8",
                  marginTop: "20px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon  />}
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                  <Typography sx={{ ...AccHeadingColor }}>
                  What should I do if some lender rejects my request for a personal loan?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  If any lending institution rejects your loan application, you need to first make a query about the reason. Sometimes, they can reject the request for credit due to missing certain documents or filling in the application form incorrectly. In such a scenario, you can reapply. However, if a poor credit score is a reason for rejection, you should consider taking measures to improve this score.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{
                    backgroundColor: "#FCEFB8",
                  marginTop: "20px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon  />}
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                  <Typography sx={{ ...AccHeadingColor }}>
                  Can I get tax benefits on a personal loan?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  No, a personal loan does not come with the benefit of a tax deduction.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                sx={{
                    backgroundColor: "#FCEFB8",
                  marginTop: "20px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon  />}
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                  <Typography sx={{ ...AccHeadingColor }}>
                  Do we have the option to foreclose my personal loan after 2-3 months of repayment?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Provisions for foreclosing a loan are different across lenders. Generally, lenders let you foreclose a personal loan after 6-12 months. Go through the terms and conditions of your chosen lender to know about this provision.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Box>
            </Box>
          </Grid>
        </Grid>
    </>
  );
};

export default FAQS;
