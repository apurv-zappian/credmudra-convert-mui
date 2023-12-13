import { Box, Button, Typography } from "@mui/material";
import React from "react";

const GetPersonalLoan = () => {
  return (
      <Box
        sx={{
          backgroundColor: "#243771",
          m:0,
          p:'2rem',
          minHeight:'550px',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Box sx={{maxWidth:'1500px'}}>
          <Typography
            variant="h3"
            textAlign="center"
            color="#F7D64A"
            fontWeight="bolder"
            sx={{
              fontSize:{xs:"30px",sm:"40px"}
            }}
          >
            Get A Personal Loan Starting From As Low As 
            <Typography
              variant="h3"
              fontWeight="bolder"
              display="inline"
              sx={{ color: "#7CB86D",fontSize:{xs:"30px",sm:"40px"} }}
            >{" "}
               Rs.5,000 
            </Typography>{" "}
           To A Maximum Of
            <Typography
              display="inline"
              variant="h3"
              fontWeight="bolder"
              sx={{ color: "#7CB86D",fontSize:{xs:"30px",sm:"40px"} }}
            >
              {" "}Rs.10 Lakh
            </Typography>{" "}
            Through Credmudra!
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            pt={'2rem'}
            color="#fff"
            sx={{
              font:"normal normal normal 22px/30px Inter",
              fontSize:"22px",
              
            }}
          >
            Experience seamless borrowing with Credmudra! Instantly meet your
            credit needs with easy online applications, attractive interest
            rates, and minimum touchpoints. Sign up, get matched with a lender,
            and complete quick formalities for hassle-free disbursal.
          </Typography>

          <Box sx={{textAlign:"center"}}>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#E7BC08",
                },
                padding: "15px 20px 15px 20px",
                boxShadow: "0px 3px 6px #00000029",
                borderRadius: "10px",
                backgroundColor: "#F7D64A",
                color: "#243788",
                fontWeight: "900",
                transition: ".4s all ease-in-out",
                textTransform: "capitalize ",
                fontSize: "1rem",
                margin:"2rem auto 0"
              }}
            >
              Get Matched Now!
            </Button>
          </Box>
        </Box>
      </Box>
  );
};

export default GetPersonalLoan;
