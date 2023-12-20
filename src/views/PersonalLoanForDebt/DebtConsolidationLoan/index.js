import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import debtconsolidationloan from "../../../assets/images/PersonalLoanForDebtImages/DebtConsolidationLoanimg.png";
import GetMatchedButton from "../../../components/GetMatchedButton";

const DebtConsolidationLoan = () => {
  return (
    <Box>
      <Grid container bgcolor="#FCEFD8">
        <Grid
          item
          xs={12}
          sm={6}
          bgcolor="#FCEFD8"
          sx={{
            padding: { xs: "16px", sm: "0" },
            display: "flex",
            alignItems: { xs: "center", xl: "flex-start" },
            justifyContent: { xs: "center", xl: "flex-start" },
          }}
        >
          <Box>
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
          sx={{
            padding: { xs: "16px 32px 16px" },
            display: "flex",
            alignItems: { xs: "center" },
            justifyContent: { xs: "center" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              // margin: {
              //   xs: "0% 0% 5%",
              //   sm: "5% 0%",
              // },
              width: { md: "80%" },
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
                lineHeight: "1.7",
                fontWeight: "300",
              }}
            >
              The method of opting for a single loan to close several ongoing
              debts is known as debt consolidation. Consolidating multiple debts
              will help you save considerable money that you would otherwise pay
              in the form of interest. Moreover, opting for debt consolidation
              will allow you to manage your finances in a better way.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <GetMatchedButton />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DebtConsolidationLoan;
