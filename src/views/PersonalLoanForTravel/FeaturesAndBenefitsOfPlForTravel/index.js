import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import featuresoftravelimg1 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg1.png";
import featuresoftravelimg2 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg2.png";
import featuresoftravelimg3 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg3.png";
import featuresoftravelimg4 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg4.png";
import featuresoftravelimg5 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg5.png";
import featuresoftravelimg6 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg6.png";
import featuresoftravelimg7 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg7.png";
import featuresoftravelimg8 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg8.png";

const FeaturesAndBenefitsOfPlForTravel = () => {
  const ListBox = {
    width: { xs: "92%",sm:"100%"},
    alignItems: "center",
    background: "#fcefb8",
    borderRadius: "5px",
    boxShadow: " 0 3px 6px rgba(0,0,0,.161)",
    display: "flex",
    // padding: "18px 15px 14px",
    margin: {xs:"0 10px 0px 20px",sm:"0"},
    padding: "18px 15px 14px",
    gap:"10px",
    justifyContent:"center"
  };

  const primaryTextStyles = {
    fontSize: "18px",
    fontFamily: "Inter",
    color: "#5ab56b",
    fontWeight:"800",
    paddingLeft: "10px",
    lineHeight: { xs: "1.3" },
    margin: "0 0 8px",
  };

  const secondaryTextStyles = {
    fontSize: "16px",
    fontFamily: "Inter",
    color: "#404040",
    paddingLeft: "10px",
    lineHeight: { xs: "1.3" },
  };

  const ListItemDetails = [
    {
      image: featuresoftravelimg1,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: featuresoftravelimg2,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: featuresoftravelimg3,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: featuresoftravelimg4,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: featuresoftravelimg5,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: featuresoftravelimg6,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: featuresoftravelimg7,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: featuresoftravelimg8,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
  ];
  return (
    <>
      <Box>
        <Container maxWidth={'lg'} sx={{ padding: "80px 0px 50px" }}>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { xs: "24px", sm: "36px" },
              fontFamily: "Inter",
              color: "#243771",
              fontWeight: "800",
              lineHeight: { xs: "1.3", sm: "1.5" },
              margin: { xs: "0px 0px 46px" },
            }}
          >
            Features And Benefits Of Travel Loan
          </Typography>
        
          <Grid container spacing={2}>
            
            {ListItemDetails.map((doc, index) => (
                <Grid item xs={12} sm={6} key={index}  sx={{ padding: "0px 10px 0px" }}>
              <List sx={{...ListBox}}>
                <ListItem>
                  <ListItemIcon sx={{ paddingRight: "10px" }}>
                    <img src={doc.image} alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary={doc.title}
                    secondary={doc.description}
                    primaryTypographyProps={{ style: primaryTextStyles }}
                    secondaryTypographyProps={{ style: secondaryTextStyles }}
          
                  />
                </ListItem>
              </List>
          </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FeaturesAndBenefitsOfPlForTravel;
