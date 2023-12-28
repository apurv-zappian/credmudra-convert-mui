import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Swiper from "swiper";
import SwiperComponent from "../Swiper";
import "../../../swiper.css";

const WhyChooseCredmudra = () => {
  return (
    <Container>
      <Box
        sx={{
          // padding: "3rem 0 2rem",
          textAlign: "center",
          // maxWidth: "856px",
          // margin: "auto",
          // fontSize: "1rem",
        }}
      >
        <Typography
          sx={{
            lineHeight: { xs: "1.1", md: "1.5" },
            marginBottom: "25px",
            font: "normal normal 900 50px Inter",
            // fontSize: { xs: "24px", sm: "30px", md: "40px" },
            // fontFamily: "Inter",
            color: "#243771",
            fontWeight: "900",
            textAlign: "center",
            margin: { sm: "0px 0px 28px", md: "0px 100px 28px" },
          }}
        >
          Why Choose Credmudra?
        </Typography>
        <Typography
          sx={{
            lineHeight: { xs: "1.1", sm: "1.5" },
            marginBottom: "25px",
            fontSize: { xs: "16px", sm: "20px" },
            fontFamily: "Inter",
            color: "#243771",
            // fontWeight: "900",
            margin: { sm: "0px 0px 100px", md: "0px 40px 100px" },
          }}
        >
          There are a number of reasons why hundreds of people choose us during
          a financial crisis. Following are some of the reasons that make us one
          of the leading ‘loan match-making’ portals in the market:
        </Typography>
      </Box>
      <SwiperComponent />
    </Container>
  );
};

export default WhyChooseCredmudra;
