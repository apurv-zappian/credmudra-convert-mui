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
import { featureBenefitImage } from "../../../assets/images/FeatureBenefitImage/index";
const FeatureBenefitSection = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xl: "70%",
                lg: "90%",
                md: "70%",
                sm: "70%",
                xs: "70%",
              },
              height: "auto",
            }}
          >
            <img
              src={featureBenefitImage}
              alt="choosephoto"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ padding: "10px" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              // border: "2px solid #000",
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
                  xl: "90%",
                  lg: "90%",
                  md: "90%",
                  sm: "100%",
                  xs: "100%",
                },
                padding: "10px",
                // height: {xl:"100px",lg:"100px",md:"100px",sm:"50px",xs:"50px"},
                // border: "2px solid red",
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
                Features And Benefits Of A Business <br /> Loan
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xl: "90%",
                  lg: "90%",
                  md: "90%",
                  sm: "100%",
                  xs: "100%",
                },
                padding: "10px",
                // height: {xl:"100px",lg:"100px",md:"100px",sm:"50px",xs:"50px"},
                // border: "2px solid red",
                marginTop: "20px",
              }}
            >
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid #e8e8e8",
                  marginTop: "2px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  expandIcon={<ExpandMore />}
                  sx={{ paddingBottom: "20px" }}
                >
                  <CheckCircleOutlineOutlined
                    sx={{
                      marginTop: "10px",
                      fontSize: {
                        xl: "25px",
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "20px",
                        xs: "20px",
                      },
                      paddingLeft: "10px",
                      fontWeight: "900",
                      color: "#243788",
                      marginTop: {
                        sm: "5px",
                        xs: "5px",
                      },
                    }}
                  >
                    Instant Disbursal
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The requested sum of money gets credited to your account
                    real quick once the application and documents are verified
                    successfully. If you choose Credmudra, the wait time is
                    minimal. Moreover, you can get the amount credited the same
                    day.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid #e8e8e8",
                  marginTop: "2px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  expandIcon={<ExpandMore />}
                  sx={{ paddingBottom: "20px" }}
                >
                  <CheckCircleOutlineOutlined
                    sx={{
                      marginTop: "10px",
                      fontSize: {
                        xl: "25px",
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "20px",
                        xs: "20px",
                      },
                      paddingLeft: "10px",
                      fontWeight: "900",
                      color: "#243788",
                      marginTop: {
                        sm: "5px",
                        xs: "5px",
                      },
                    }}
                  >
                    Collateral-free Advances
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    As unsecured loans, financial institutions do not ask for
                    any collateral while sanctioning the loan application.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid #e8e8e8",
                  marginTop: "2px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                  expandIcon={<ExpandMore />}
                  sx={{ paddingBottom: "20px" }}
                >
                  <CheckCircleOutlineOutlined
                    sx={{
                      marginTop: "10px",
                      fontSize: {
                        xl: "25px",
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "20px",
                        xs: "20px",
                      },
                      paddingLeft: "10px",
                      fontWeight: "900",
                      color: "#243788",
                      marginTop: {
                        sm: "5px",
                        xs: "5px",
                      },
                    }}
                  >
                    Hassle-free Documentation
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Only a handful of documents are needed while sanctioning
                    business loan applications.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid #e8e8e8",
                  marginTop: "2px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                  expandIcon={<ExpandMore />}
                  sx={{ paddingBottom: "20px" }}
                >
                  <CheckCircleOutlineOutlined
                    sx={{
                      marginTop: "10px",
                      fontSize: {
                        xl: "25px",
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "20px",
                        xs: "20px",
                      },
                      paddingLeft: "10px",
                      fontWeight: "900",
                      color: "#243788",
                      marginTop: {
                        sm: "5px",
                        xs: "5px",
                      },
                    }}
                  >
                    Convienent Repayment Facility
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Use a business loan EMI calculator to determine the EMI
                    amount and choose the instalment that best suits your
                    financial strength.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid #e8e8e8",
                  marginTop: "2px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                  expandIcon={<ExpandMore />}
                  sx={{ paddingBottom: "20px" }}
                >
                  <CheckCircleOutlineOutlined
                    sx={{
                      marginTop: "10px",
                      fontSize: {
                        xl: "25px",
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "20px",
                        xs: "20px",
                      },
                      paddingLeft: "10px",
                      fontWeight: "900",
                      color: "#243788",
                      marginTop: {
                        sm: "5px",
                        xs: "5px",
                      },
                    }}
                  >
                    No End-use Restriction Attached
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    You can use the borrowed sum to fund any business expense
                    without any obligation or restriction from the lender.
                  </Typography>
                </AccordionDetails>
              </Accordion>
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
                  marginTop: "20px",
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
      </Grid>
    </Fragment>
  );
};

export default FeatureBenefitSection;
