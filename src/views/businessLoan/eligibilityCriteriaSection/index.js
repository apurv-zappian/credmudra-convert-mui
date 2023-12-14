import React from "react";
import { Fragment } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Circle } from "@mui/icons-material";
const EligiblityCriteriaSection = () => {
  const listArray = [
    "Business owners, individuals, entrepreneurs, MSMEs, startups and self-employed professionals, such as CS, CAs, architects and doctors",
    "Public and private limited companies, partnership firms, sole proprietorships, LLPs",
    "Large enterprises dealing only in trading, services and manufacturing sectors",
    "Co-operative societies, NGOs and trusts",
  ];
  const listArray2 = [
    { Age: "21 to 65 years old" },
    { "Employment type": "Self-employed" },
    { "Business tenure": "At least 1 year or more" },
    { "Minimum yearly turnover": "Vary across lenders" },
    { "Credit score": " 750 or more" },
  ];
  const listItems = listArray2.map((obj, index) => {
    const entries = Object.entries(obj); // Get key-value pairs of the object
    return (
      <ListItem
        sx={{ padding: "0px", width: "100%", display: "flex", gap: "10px" }}
        key={index}
      >
        <Circle sx={{ color: "#f7d64a", fontSize: "10px" }} />
        <ListItemText sx={{ color: "#fff" }}>
          {entries.map(([key, value]) => (
            <Typography key={key} sx={{ fontSize: "20px" }} variant="body2">
              <span style={{ color: "#f7d64a", fontWeight: "900" }}>{key}</span>{" "}
              : {value}
            </Typography>
          ))}
        </ListItemText>
      </ListItem>
    );
  });
  return (
    <Fragment>
      <Grid
        container
        sx={{
          minHeight: "60vh",
          backgroundColor: "#243771",
          marginTop: "70px",
        }}
      >
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "80%", padding: "20px" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xl: "36px",
                  lg: "36px",
                  md: "24px",
                  sm: "24px",
                  xs: "24px",
                },
                color: "#f7d64a",
                marginBottom: "30px",
                fontWeight: "900",
              }}
            >
              Eligibility Criteria For <br /> A Business Loan
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "20px",
                fontWeight: "200",
                color: "#fff",
                marginBottom: "30px",
              }}
            >
              Eligibility Assessment Made Easy: Find Out If You Qualify <br />{" "}
              in Under 3 minutes*
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
                marginBottom: "30px",
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
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            padding: "25px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", padding: "20px" }}>
            <List>
              {listArray.map((item, index) => {
                return (
                  <ListItem
                    sx={{
                      width: "100%",
                      display: "flex",
                      gap: "10px",
                      padding: "0px",
                    }}
                  >
                    <Circle sx={{ color: "#f7d64a", fontSize: "10px" }} />
                    <ListItemText sx={{ color: "#fff" }}>
                      <Typography sx={{ fontSize: "20px" }} variant="body2">
                        {item}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                );
              })}
              {listItems}
            </List>
            <Typography sx={{fontSize:"18px",color:"#fff",marginTop:"10px"}}>
              Note: The above-mentioned details can vary from lender to lender
              depending on their terms and conditions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default EligiblityCriteriaSection;
