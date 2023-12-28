import { Box, Container, Typography, keyframes } from "@mui/material";
import React from "react";
import Swiper from "swiper";
import SwiperComponent from "../Swiper";
import "../../../swiper.css";
import logoImg from "../../../assets/images/PersonalLoanForHomeRenovation/logo.png";


const WhyChooseCredmudra = () => {
  const shapeRotate = keyframes`
    0%, 100% {
      transform: translateY(0);
  }
  20%, 80% {
      transform: translateY(10px);
  }
  60% {
      transform: translateY(20px);
  }
    `;
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          animationDuration: "3s",
          animationFillMode: "both",
          animationIterationCount: "infinite",
          animationName: `${shapeRotate}`,
          animationTimingFunction: "linear",
          transformOrigin: "center center",
          position: "relative",
          zIndex: "-1",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0",
            left: "40px",
            width: "12%",
            transform: "rotate(330deg)",
          }}
          src={logoImg}
          alt="Credmudra"
        />
      </Box>
      <Container maxWidth={"xl"}>
        <Typography
          sx={{
            lineHeight: { xs: "1.1", md: "1.5" },
            marginBottom: "25px",
            font: "normal normal 900 50px Inter",
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
      </Container>
      <SwiperComponent />
    </Box>
  );
};

export default WhyChooseCredmudra;
