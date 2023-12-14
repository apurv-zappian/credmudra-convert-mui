import React from "react";
import { Fragment } from "react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import {Circle} from "@mui/icons-material";
const DocumentRequiredSection = () => {
  const arrayform = [
    "Passport-sized photographs",
    "KYC documents, such as Aadhaar card, PAN card, driving license, passport, electricity or water bills, voter ID card",
    "Previous 1 year's bank account statement",
    "Non-collateral overdraft copy (if applicable)",
    "Copy of business incorporation paperwork",
  ];

  return (
    <Fragment>
      <Grid
        container
        sx={{
          minHeight: "40vh",
          padding: "80px 0px",
        }}
      >
        <Grid
          item
          xl={5}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "35px",
          }}
        >
          <Box sx={{ width: "73%", padding: "10px 20px" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "800",
                color: "#243771",
                marginBottom: "25px",
                fontFamily: "Inter",
              }}
            >
              Documents Required For A Business Loan
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "#404040" }}
            >
              Along with fulfilling all the eligibility parameters, you will
              have to submit some documents in order to get loan approval.
            </Typography>
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
        </Grid>
        <Grid item xl={7} lg={6} md={6} sm={12} xs={12}>
          <Box sx={{ width: "80%", padding: "20px" }}>
            <List>
              {arrayform.map((item, index) => {
                return (
                  <ListItem key={index}  sx={{width:"100%",display:"flex",gap:"5px"}}>
                     <Circle sx={{color:"#f7d64a",fontSize:"10px"}}/>
                    <ListItemText>
                      <Typography sx={{fontWeight:"800",fontSize:"18px",fontFamily:"Inter",color:"#243771"}} variant="body2"> {item}</Typography>
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DocumentRequiredSection;
