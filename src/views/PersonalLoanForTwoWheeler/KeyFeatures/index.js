import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import keyfeaturesimg from "../../../assets/images/PersonalLoanForTwoWheelerImages/keyfeaturesimg.jpg";
import GetMatchedButton from "../../../components/GetMatchedButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const KeyFeatures = () => {
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
      <Grid container bgcolor="#FCEFD8" sx={{ marginTop: "5%" }}>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{ padding: { xs: "16px 32px 0px", sm: "0" } }}
        >
          <Box
            sx={{
              margin: {
                xs: "0% 0% 5%",
                sm: "10% 5% 10%",
                lg: "15% 0% 10%% 10%",
                xl: "15% 0% 0% 15%",
              },
              // padding: { sm: "48px 16px 0px 48px", xl: "0px 0px 48px" },
              width:{ sm: "80%", xl: "70%" },
              display:'flex',
              // alignItems:'flex-start',
              // justifyContent:'center',
              flexDirection:'column'
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
              4 Key Features Of Two-Wheeler Personal Loans To Consider
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
                  Attractive Interests
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                  Interest rates can be as low as possible per annum provided
                  you select the right vendor. On top of that, you do not need
                  to wait for long to get the approval. Also, minimal paperwork
                  has to be done.
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
                // padding: "0px 0px 10px 0px",
              }}
            >
              <AccordionSummary
                // sx={{display:'flex',alignItems:'center'}}
                expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                <Typography sx={{ ...AccHeading }}>
                  100% Financing is Available
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                  This facility is made available for those who may be finding
                  it difficult to pay a certain amount of the on-road price
                  upfront. It not only helps you purchase your dream scooty or
                  bike but also assists in keeping your savings intact. These
                  services are given to anyone as long as they are meeting the
                  personal loan eligibility credentials.
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
                // padding: "0px 0px 10px 0px",
              }}
            >
              <AccordionSummary
                // sx={{display:'flex',alignItems:'center'}}
                expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                <Typography sx={{ ...AccHeading }}>
                  Completely Digital Process
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                  Now you do not have to wait in long queues like earlier
                  applicants. Starting from loan verification to disbursal
                  everything happens instantly, on the go. This increased role
                  of digitisation has made the whole financing model more
                  accessible for all.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{
                backgroundColor: "transparent",
                marginTop: "20px",
                // padding: "0px 0px 10px 0px",
              }}
            >
              <AccordionSummary
                // sx={{display:'flex',alignItems:'center'}}
                expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                <Typography sx={{ ...AccHeading }}>
                  Low Processing Fee
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                  Processing fees for these loans can be as low as 0.5% for
                  customers eligible for pre-approved offers. All they have to
                  do is perform a few clicks to provide their consent of
                  availing the loan offer.
                </Typography>
              </AccordionDetails>
            </Accordion>
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
        <Grid
          item
          xs={12}
          sm={5}
          sx={{ padding: { xs: "16px" },display:"flex",alignItems:'center',justifyContent:'center' }}
        >
          <Box
            // sx={{
            //   padding: { sm: "70% 0% 10%", md: "20% 0% 10% 0%", lg: "0% 0%" },
            // }}
          >
            <img
              src={keyfeaturesimg}
              alt="loading"
              width={"100%"}
              //   style={{ width: "100%",height:"auto"}}
              // style={{borderStyle: "none",
              //     height: "auto",
              //     maxWidth: "100%"}}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default KeyFeatures;
