import React from "react";
import { Fragment } from "react";
import {
  Grid,
  Box,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { CheckCircleOutlineOutlined, ExpandMore } from "@mui/icons-material";
import { chooseCredmudraLoanImage } from "../../../assets/images/BussinessLoanImage/index";
const ChooseCredmudraLoanSection = () => {
  return (
    <Fragment>
      <Grid container sx={{ minHeight: "70vh", padding: "80px 0px" }}>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ border: "2px solid red", padding: "10px" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              border: "2px solid #000",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "85%",
                  lg: "85%",
                  md: "90%",
                  sm: "100%",
                  xs: "100%",
                },
                padding: "10px",
                // height: {xl:"100px",lg:"100px",md:"100px",sm:"50px",xs:"50px"},
                border: "2px solid red",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: {
                    xl: "32px",
                    lg: "32px",
                    md: "24px",
                    sm: "24px",
                    xs: "24px",
                  },
                  color: "#243778",
                  fontWeight: "800",
                  marginBottom: {
                    xl: "18px",
                    lg: "18px",
                    md: "18px",
                    sm: "0px",
                    xs: "0px",
                  },
                }}
              >
                Choose Credmudra For The Best Business Loan
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xl: "85%",
                  lg: "85%",
                  md: "90%",
                  sm: "100%",
                  xs: "100%",
                },
                padding: "10px",
                border: "2px solid red",
              }}
            >
              <Box sx={{ width: "100%", padding: "10px" }}>
                <Accordion
                  sx={{
                    boxShadow: "none",
                    borderBottom: "2px solid #e8e8e8",
                    borderRadius: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleOutlineOutlined sx={{ marginTop: "2px" }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#243778",
                        fontWeight: "800",
                        fontSize: "22px",
                        paddingLeft: "10px",
                      }}
                    >
                      Prompt Loan Disbursal
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{ padding: "2px  20px 16px 20px" }}
                    >
                      With us, the TAT of borrowing a business loan is reduced
                      to meet your financial requirements without wasting time.
                      We promise to sanction and disburse the loan amount the
                      same day.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    boxShadow: "none",
                    borderBottom: "2px solid #e8e8e8",
                    borderRadius: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleOutlineOutlined sx={{ marginTop: "2px" }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#243778",
                        fontWeight: "800",
                        fontSize: "22px",
                        paddingLeft: "10px",
                      }}
                    >
                      Loan Match Making
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{ padding: "2px  20px 16px 20px" }}
                    >
                      Just apply for the loan, submit necessary papers and
                      relax. We will do the rest. Finding the right lending
                      partner that matches your requirements is what we do. And
                      we do it best.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    boxShadow: "none",
                    borderBottom: "2px solid #e8e8e8",
                    borderRadius: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleOutlineOutlined sx={{ marginTop: "2px" }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#243778",
                        fontWeight: "800",
                        fontSize: "22px",
                        paddingLeft: "10px",
                      }}
                    >
                      Easy Application
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{ padding: "2px  20px 16px 20px" }}
                    >
                      Our application process is user-friendly and seamless. You
                      only need to furnish your mobile phone number, required
                      details and mention your loan requirements.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    boxShadow: "none",
                    borderBottom: "2px solid #e8e8e8",
                    borderRadius: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleOutlineOutlined sx={{ marginTop: "2px" }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#243778",
                        fontWeight: "800",
                        fontSize: "22px",
                        paddingLeft: "10px",
                      }}
                    >
                      Loan Tenure at your Discreation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{ padding: "2px  20px 16px 20px" }}
                    >
                      Choose the loan tenure per your convenience. Just ensure
                      the chosen EMI is within your repayment capacity.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  //   padding: "10px",
                  display: "flex",
                  justifyContent: {
                    xl: "flex-start",
                    lg: "flex-start",
                    md: "center",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <Button
                  sx={{
                    padding: "12px 34px",
                    backgroundColor: "#f7d64a",
                    fontWeight: "700",
                    color: "#243778",
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    ":hover": {
                      backgroundColor: "#243778",
                      color: "#f7d64a",
                    },
                  }}
                >
                  Get Matched Now!
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ border: "2px solid red" }}
        ></Grid>
      </Grid>
    </Fragment>
  );
};

export default ChooseCredmudraLoanSection;
