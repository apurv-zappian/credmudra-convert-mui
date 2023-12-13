import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import debtconsolidationloan from "../../../assets/images/PersonalLoanForDebtImages/DebtConsolidationLoanimg.png";
import GetMatchedButton from "../../../components/GetMatchedButton";

const DebtConsolidationLoan = () => {
  return (
    <>
   
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
          bgcolor="#FCEFD8"
        >
          <Grid
            item
            xs={12}
            sm={6}
            bgcolor="#FCEFD8"
            sx={{ padding: { xs: "10px 16px 0px", sm: "0" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { sm: "40% 4% 10%", md: "10% 4% 10% 0%", lg: "0% 0%" },
              }}
            >
              <img
                alt="loading"
                style={{ width: "100%" }}
                src={debtconsolidationloan}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            bgcolor="#FCEFD8"
            sx={{ padding: { xs: "16px", sm: "0" } }}
          >
            <Box
              sx={{
                margin: {
                  sm: "10% 5% 10%",
                  lg: "15% 0% 0% 10%",
                  xl: "15% 25% 0% 10%",
                },
                // display:"flex",
                // flexDirection:"column",
                // alignItems:{xs:"center",sm:"left"},
                // justifyContent:"center"
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
                Debt Consolidation Loan: An Overview
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "20px" },
                  fontFamily: "Inter,sans-serif",
                  color: "#404040",
                  margin: "0px 0px 24px",
                  textAlign: { xs: "center", sm: "left" },
                  // padding: {
                  //   sm: "0rem 3rem 0rem 0rem",
                  //   lg: "0rem 6rem 0rem 0rem",
                  //   xl: "0rem 11rem 0rem 0rem",
                  // },
                  lineHeight: "1.7",
                  fontWeight: "300",
                }}
              >
                The method of opting for a single loan to close several ongoing
                debts is known as debt consolidation. Consolidating multiple
                debts will help you save considerable money that you would
                otherwise pay in the form of interest. Moreover, opting for debt
                consolidation will allow you to manage your finances in a better
                way.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "left" },
                  justifyContent: { xs: "center", sm: "left" },
                  // margin:{sm:"0% 33% 0% 0%",md:"0% 50% 0% 0%",lg:"0% 65% 0% 0%"}
                }}
              >
                <GetMatchedButton />
              </Box>
            </Box>
          </Grid>
        </Grid>
    
    </>
  );
};

export default DebtConsolidationLoan;
