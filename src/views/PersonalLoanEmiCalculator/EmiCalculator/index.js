import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Minimal from "../Minimal";
import FAQS from "../FAQS";
import Process from "../Process";

const EmiCalculator = () => {
  const loanemiData = [
    { title: "Principal amount component" },
    { title: "Interest amount component" },
  ];
  const PLPagesStyling = {
    borderBottom: "1px solid #858585",
    color: "#243771",
    display: "block",
    fontSize: "16px",
    fontWeight: 700,
    padding: "9px 0 10px",
    textDecoration: "none",
    fontFamily: "Inter,sans-serif",
  };
  const paraStyling = {
    fontSize: { xs: "18px" },
    fontWeight: "300",
    color: "#404040",
    lineHeight: 1.5,
    margin: "23px 0",
    fontFamily: "Inter,sans-serif",
  };
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
    // marginTop:"3px"
  };

  const ListItemTextTitle = {
    color: "#404040",
    fontSize: { xs: "18px" },
    fontFamily: "Inter",
    fontWeight: "900",
    margin: "0 0 20px",
  };
  return (
    <Box
      sx={{
        marginTop: { xs: "22%", sm: "13%", md: "10%", lg: "8%", xl: "7%" },
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              paddingRight: { xs: "0", md: "14%" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                  fontWeight: "900",
                  color: "#243771!important",
                  lineHeight: 1.2,
                  margin: "23px 0",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                Personal Loan EMI Calculator
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                A personal loan is one of the most sought-after credit
                facilities available. This hike in popularity is due to the ease
                of its application process and higher approval rates. In the
                time of emergencies, the availability of funds matters the most
                to you than anything else.
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                The repayment process can be a hassle-free affair if you plan it
                properly. This is why you should use a personal loan EMI
                calculator before you apply for the credit. Using this tool is
                extremely easy. You can figure out how much credit you should
                apply for so that you can comfortably pay it off.
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Personal loan interest rates are usually higher than the other
                types of credit facilities. This is due to the fact that it
                falls under the “unsecured loan” header. Higher interest means
                higher EMI outflow. Missing out on one EMI can lead to a hefty
                penalty payment. This will further enhance your loan's burden.
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                You can avoid these mishaps with the personal loan EMI
                calculator online at the right time.
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Learn the particulars of a personal loan EMI calculator and more
                in this blog by Credmudra.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                  fontWeight: "900",
                  color: "#243771!important",
                  lineHeight: 1.2,
                  margin: "23px 0",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                How Does Online Personal Loan EMI Calculator Calculate Loan EMI?
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                A personal loan EMI has two components:
              </Typography>
              <List>
                {loanemiData.map((item, index) => (
                  <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <FiberManualRecord sx={{ ...CircleIcon }} />
                          <Typography
                            component="span"
                            sx={{ ...ListItemTextTitle }}
                          >
                            {item.title}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Typography sx={{ ...paraStyling }}>
                The repayment procedure is not linear. Hence, calculating the
                EMI amount manually is not simple. However, there is a
                mathematical expression that you can use to figure it out. Take
                a look at the formula below:
              </Typography>
              <Typography sx={{ ...paraStyling }}>The formula –</Typography>
              <Typography sx={{ ...ListItemTextTitle }}>
                EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
              </Typography>
              <Typography sx={{ ...paraStyling }}>Here</Typography>
              <Typography sx={{ ...paraStyling }}>
                EMI Equated Monthly Payment
              </Typography>
              <Typography sx={{ ...paraStyling, margin: 0 }}>
                P Principal amount
              </Typography>
              <Typography sx={{ ...paraStyling, margin: 0 }}>
                R Rate of interest
              </Typography>
              <Typography sx={{ ...paraStyling, margin: 0 }}>
                N Number of months
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Suppose, you have taken a <b>personal loan (P) of Rs.50,000.</b>{" "}
                The lender has levied interest at a rate of{" "}
                <b> 11% per month (R).</b> The repayment tenure is{" "}
                <b>2 years or 24 months (N).</b>
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Now, putting these values in the formula, we get –
              </Typography>
              <Typography sx={{ ...ListItemTextTitle }}>
                EMI = [50,000 x 11 x (1+11)^24]/[(1+11)^24-1]
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Hence, you have to pay a monthly{" "}
                <b>EMI of Rs.2330 per month for the next 24 months.</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <List>
                <Typography
                  sx={{
                    background: "#10162c",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    color: "#fff !important",
                    fontSize: "18px",
                    marginBottom: "18px",
                    padding: "15px 5px 14px",
                    textAlign: "center",
                  }}
                >
                  Personal Loan Pages
                </Typography>
                <ListItem sx={{ ...PLPagesStyling }}>
                  Personal Loan Interest Rate
                </ListItem>
                <ListItem sx={{ ...PLPagesStyling }}>
                  Personal Loan Eligibility
                </ListItem>
                <ListItem sx={{ ...PLPagesStyling }}>
                  Personal Loan EMI Calculator
                </ListItem>
              </List>
            </Box>
          </Grid>
          </Grid>
          {/* <Grid container>
          <Grid item xs={12}>
            <Box sx={{backgroundColor: "#10162c",}}>
              <Process />
            </Box>
            </Grid>
            <Grid xs={12} md={9}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                  fontWeight: "900",
                  color: "#243771!important",
                  lineHeight: 1.2,
                  margin: "23px 0",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                Steps To Use A Personal Loan EMI Calculator
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                The steps are extremely simple to follow and you can figure it
                out from any place at any time.
              </Typography>
              <List>
                {stepsData.map((item, index) => (
                  <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <FiberManualRecord sx={{ ...CircleIcon }} />
                          <Typography
                            component="span"
                            sx={{ ...ListItemTextTitle }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ ...ListItemTextContetnt }}
                          >
                            {item.content}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Typography sx={{ ...paraStyling }}>
                You should note that the higher the repayment tenure, the lower
                will be the EMI amount. However, in the long run, you will end
                up paying more interest. This is why, if feasible, you should go
                for a shorter repayment tenure.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                  fontWeight: "900",
                  color: "#243771!important",
                  lineHeight: 1.2,
                  margin: "23px 0",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                Benefits Of Using A Personal Loan EMI Calculator
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Check out the following pointers to know how you can benefit
                from using a personal loan EMI calculator:
              </Typography>
              <List>
                {benefitsData.map((item, index) => (
                  <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <FiberManualRecord sx={{ ...CircleIcon }} />
                          <Typography
                            component="span"
                            sx={{ ...ListItemTextTitle }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ ...ListItemTextContetnt }}
                          >
                            {item.content}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                  fontWeight: "900",
                  color: "#243771!important",
                  lineHeight: 1.2,
                  margin: "23px 0",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                Factors Affecting Personal Loan EMI
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Take a look at these factors that play a significant role in
                determining your EMI amount:
              </Typography>
              <List>
                {factorsData.map((item, index) => (
                  <ListItem key={index} sx={{ padding: 0, lineHeight: 1.5 }}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <FiberManualRecord sx={{ ...CircleIcon }} />
                          <Typography
                            component="span"
                            sx={{ ...ListItemTextTitle }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ ...ListItemTextContetnt }}
                          >
                            {item.content}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
                  fontWeight: "900",
                  color: "#243771!important",
                  lineHeight: 1.2,
                  margin: "23px 0",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                How To Use Credmudra Personal Loan EMI Calculator
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Using the <b>Credmudra Personal Loan EMI Calculator</b> is so
                straightforward and simple that even a person who is the least
                accustomed to the internet can operate it with absolute ease.
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                You just need to enter the loan amount, rate of interest
                applicable, and preferred tenure correctly in the respective
                sections.
              </Typography>
              <Typography sx={{ ...paraStyling }}>
                Consider all the factors mentioned and choose your repayment
                tenure and lender carefully before applying for the loan.
                Lastly, using a <b>personal loan EMI calculator</b> is
                absolutely recommended for making an informed decision, which
                will offer financial benefits as well as stability.
              </Typography>
            </Box>
            <Box>
              <Minimal />
            </Box>
           
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default EmiCalculator;
