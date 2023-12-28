import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import logoImg from "../../../assets/images/CredmudraPageImages/logo.png";

const AvoidPitfalls = () => {
  return (
    <Box
      sx={{
        background: `#243771 url(${logoImg}) 50%`,
        padding: "60px 0",
        marginTop: "5%",
        position: "relative",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "20%",
        display: "flex",
        minHeight: "400px",
        objectFit: "cover",
        opacity: 1,
        paddingBottom: "5rem",
        paddingTop: "5rem",
      }}
    >
      <Container maxWidth={"xl"} sx={{ padding: { md: "0 7%" } }}>
        <Grid container>
          <Grid item md={6}>
            <Typography
              sx={{
                fontSize: { md: "40px" },
                fontFamily: "Inter",
                color: "#f7d64a",
                fontWeight: "900",
                lineHeight: "1.1",
                margin: "0 0 15px",
              }}
            >
              Avoid The Pitfalls Of <br />
              Short-Term Loans.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Inter",
                color: "#ffffff",
              }}
            >
              Sign Up Now To Learn The Best Practices And Borrow Smartly!
            </Typography>
          </Grid>
          {/* <Grid item md={4} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <img alt="credmudra-logo" src={logoImg} style={{ width: "70%",  marginLeft: "10%", maxWidth: '100%' }} />
          </Grid> */}
          <Grid
            item
            md={6}
            sx={
              {
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "flex-end",
              }
            }
          >
            <Box
              sx={{
                // backgroundColor: "red",
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                flexDirection: "column",
              }}
            >
              <Box>
                <TextField
                  id="exampleInputEmail1"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  InputProps={{
                    sx: {
                      "&:hover": {
                        border: "none",
                      },
                      backgroundColor: "#6c757d",
                      border: "1px solid #6c757d",
                      borderRadius: "5px",
                      color: "#ffffff",
                      marginBottom: "12px",
                      padding: "10px",
                      textAlign: "center",
                      textTransform: "capitalize",
                    },
                  }}
                />
              </Box>
              <Box>
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#C8A618",
                      color: "#243771",
                    },
                    padding: { xs: "12px 120px" },
                    boxShadow: "0px 3px 6px #00000029",
                    borderRadius: "10px",
                    backgroundColor: "#f7d64a",
                    color: "#243771",
                    marginTop: "10px",
                    fontWeight: "600",
                    transition: ".4s all ease-in-out",
                    textTransform: "capitalize ",
                    fontSize: { xs: "16px" },
                    fontFamily: "Inter",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AvoidPitfalls;
