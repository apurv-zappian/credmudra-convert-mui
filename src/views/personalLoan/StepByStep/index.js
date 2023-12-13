import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import stepbystepimg1 from "../../../assets/stepbystepimg1.webp";
import stepbystepimg2 from "../../../assets/stepbystepimg2.webp";
import stepbystepimg3 from "../../../assets/stepbystepimg3.webp";
import stepbystepimg4 from "../../../assets/stepbystepimg4.webp";
import stepbystepimg5 from "../../../assets/stepbystepimg5.webp";

const StepByStep = () => {
  const CardData = [
    {
      step: "STEP 1",
      title: "Provide Mobile Number And OTP",
      description:
        "You will first need to enter your mobile number and verify it by providing the OTP received on it.",
      image: stepbystepimg1,
      align:'right'
    },
    {
      step: "STEP 2",
      title: "State Your Loan Requirements",
      description:
        "Mention the loan amount you will need along with a convenient repayment period. Enter your PAN card and email ID.",
      image: stepbystepimg2,
      align:'center'
    },
    {
      step: "STEP 3",
      title: "Declare Employment Details",
      description:
        "Select the type of your employment and enter other relevant information regarding your profession.",
      image: stepbystepimg3,
      align:'left'
    },
    {
      step: "STEP 4",
      title: "Enter Personal, Income,Residential And Other Details",
      description:
        "Give necessary inputs like gross annual income, savings account details, name, date of birth, present address, etc. Disclose your present debt obligations.",
      image: stepbystepimg4,
      align:'center'
    },
    {
      step: "STEP 5",
      title: "Submit Loan Request",
      description:
        "Click the ‘Submit’ button after putting the tick mark on the declaration box.",
      image: stepbystepimg5,
      align:'center'
    },
  ];

  return (
      <Box>
        <Container>
        <Grid container >
          {/* Top section */}
          <Grid item sm={12}>
            <Box>
              <Box
                sx={{
                  padding: "3rem 0 2rem",
                  textAlign: "center",
                  maxWidth: "856px",
                  margin: "auto",
                  fontSize: "1rem",
                }}
              >
                <Typography variant="h3" gutterBottom color="#243771" fontWeight="bolder">
                  Step-By-Step Process To Apply For Personal Loan
                </Typography>
                <Typography variant="h6" color="#243771">
                  Here is the stepwise process you need to follow to apply for a
                  personal loan online through Credmudra:
                </Typography>
              </Box>
            </Box>
          </Grid>
          </Grid>
          {/* Bottom Section */}
        <Grid container sx={{display:'flex',justifyContent:'center',}} spacing={2}>
        {CardData.map((step, index) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            sx={{ width: "100%", height: "100%",display:"flex",alignItems:"center",justifyContent:"center",}}
          >
              <Box>
                  <Card elevation={0} sx={{ maxWidth: "50%",minWidth:'300px',minHeight:'360px', textAlign: "center",margin:'0 auto',}}>
                    <CardActionArea>
                      <Box>
                        <img
                          alt="image1"
                          src={step.image}
                        />
                      </Box>
                      <CardContent>
                        <Typography
                          variant="h3"
                          fontWeight="bolder"
                          sx={{
                            opacity: ".2",
                            lineHeight: ".1",
                            marginTop: "2rem",
                            zIndex:"2"
                          }}
                        >
                            {step.step}
                        </Typography>
                        <Typography gutterBottom variant="h5" color="#243771" fontWeight="bolder" fontSize="2rem" lineHeight="1">
                          {step.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {step.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
          </Grid>
            ))}

        </Grid>
        </Container>
      </Box>
  );
};

export default StepByStep;
