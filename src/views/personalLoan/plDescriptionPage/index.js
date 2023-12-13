import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { FiberManualRecord } from "@mui/icons-material";

const PlDescriptionPage = () => {
  const CircleIcon = {
    color: "#F7D64A",
    // fontSize: { sm: "1.5vmax", lg: "1vmax" },
    marginRight: ".5vmax",
  };

  return (
    <>
      {/* <Box> */}
      <Grid
        container
        spacing={2}
        // padding="20px 10px 50px"
        p="2rem"
      >
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              height: "auto",
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
              // padding:{xl:"0 10rem 0"},
              // fontSize: "1rem",
            }}
          >
            <Typography
              color="#243771"
              variant="subtitle1"
              fontWeight="bolder"
              sx={{
                fontSize: "15px",
                fontWeight: "700",
                marginBottom: "20px",
                fontFamily: "Inter,sans-serif",
              }}
            >
              Features and Benefits of Personal Loans:
            </Typography>
            <List
              sx={{
                fontSize: "16px",
                fontFamily: "Inter,sans-serif",
                padding: "0",
              }}
            >
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>
                  Personal loans come with no restrictions on how the funds are
                  used.
                </Typography>
              </ListItem>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>
                  The loan amount can go up to Rs. 40 lakh, or even higher based
                  on the discretion of the lenders.
                </Typography>
              </ListItem>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>
                  Repayment tenure can extend up to 5 years, with some
                  banks/NBFCs offering longer durations.
                </Typography>
              </ListItem>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>
                  Minimal documentation is required to apply for a personal
                  loan.
                </Typography>
              </ListItem>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>
                  Quick disbursals ensure fast access to the funds.
                </Typography>
              </ListItem>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>
                  Individuals with excellent credit profiles may qualify for
                  pre-approved or pre-qualified personal loans, which come with
                  instant disbursal.
                </Typography>
              </ListItem>
            </List>
            <Typography
              color="#243771"
              variant="subtitle1"
              fontWeight="bolder"
              sx={{
                fontSize: "15px",
                fontWeight: "700",
                marginBottom: "20px",
                marginTop: "20px",
                fontFamily: "Inter,sans-serif",
              }}
            >
              Eligibility Criteria for Personal Loans:
            </Typography>
            <List
              sx={{
                fontSize: "16px",
                fontFamily: "Inter,sans-serif",
                padding: "0",
              }}
            >
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>Age: 18 - 60 years</Typography>
              </ListItem>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>
                  Income: Minimum Rs 9,000/month for salaried applicants
                </Typography>
              </ListItem>
              <ListItem>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography>
                  Credit Score: Preferably 750 and above as having higher credit
                  scores increase the chances of your loan approval at lower
                  interest rates
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "left",
              justifyContent: "space-evenly",
              flexDirection: "column",
              marginLeft: { sm: "10%", xl: "0" },
              padding: { xl: "0 11rem 0 1rem" },
              fontSize: "12px",
              fontFamily: "Inter,sans-serif",
            }}
          >
            <Typography variant="body2" gutterBottom color="#404040">
              Credmudra isn't a lender itself but connects borrowers with
              different lending partners. These partners offer personal loans
              with varying APRs, typically ranging from 11.29% to 35%. The
              actual rates may depend on the borrower's financial situation and
              loan requirements.
            </Typography>
            <Typography variant="body2" paddingTop="20px" color="#404040">
              Loan terms usually range from a few weeks to a maximum of 60
              months (5 years), but they can vary between lenders. It's
              important for borrowers to carefully review the loan agreement
              provided by the lender before accepting any offers. This agreement
              includes the final APR, fees, and specific terms and conditions,
              ensuring borrowers understand their financial obligations.
            </Typography>
            <Typography variant="body2" paddingTop="15px" color="#404040">
              Assume you have availed a personal loan of ₹5,00,000 lakhs @
              11.50% p.a. with a repayment tenure of 5 years. The processing fee
              charged for this loan is 1.5% of the loan amount, i.e. ₹7,500.
              Therefore, the APR for your personal loan will be 12.16%. The EMI
              will be ₹10,996.
            </Typography>
            <Typography variant="body2" paddingTop="20px" color="#404040">
              Principal Amount: ₹5,00,000
            </Typography>
            <Typography variant="body2" paddingTop="20px" color="#404040">
              Interest Charges (@11.5%): ₹1,59,778
            </Typography>
            <Typography variant="body2" paddingTop="20px" color="#404040">
              Loan Processing Fees (@1.5%): ₹7,500
            </Typography>
            <Typography variant="body2" paddingTop="20px" color="#404040">
              EMI per month: ₹ 10,996
            </Typography>
            <Typography variant="body2" paddingTop="20px" color="#404040">
              Total Amount paid after 5 Years: ₹ 6,67,278
            </Typography>
            <Typography variant="body2" paddingTop="20px" color="#404040">
              *Interest rate and processing fees varies as per your product
              depending on the lender's policy.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* </Box> */}
    </>
  );
};

export default PlDescriptionPage;
