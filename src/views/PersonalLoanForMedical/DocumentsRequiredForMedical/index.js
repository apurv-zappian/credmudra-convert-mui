import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import docsimg1 from "../../../assets/images/PersonalLoanForMedicalImages/docsimg1.png";
import docsimg2 from "../../../assets/images/PersonalLoanForMedicalImages/docsimg2.png";
import docsimg3 from "../../../assets/images/PersonalLoanForMedicalImages/docsimg3.png";
import docsimg4 from "../../../assets/images/PersonalLoanForMedicalImages/docsimg4.png";
import GetMatchedButton from "../../../components/GetMatchedButton";
import { FiberManualRecord } from "@mui/icons-material";

const DocumentsRequiredForMedical = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    // paddingRight: "20px",
    position: "absolute",
    top: "10px",
    left: "0",
  };
  const ListItemStyling = {
    color: "#fff",
    // fontWeight: "900",
    fontSize: { xs: "16px" },
    fontFamily: "Inter,sans-serif",
    textAlign: { xs: "center", sm: "left" },
    display:"flex",
    justifyContent:{xs:"center",sm:"flex-start"}
  };
  const ListInfo = [
    {
      imgSrc: docsimg1,
      alt: "Identity proof",
      title: "1)Proof of Identity",
      items: [
        "Passport",
        "Voter ID",
        "Aadhaar Card",
        "PAN Card",
        "Passport-sized photograph",
      ],
    },
    {
      imgSrc: docsimg2,
      alt: "Address proof",
      title: "2)Proof of Address",
      items: [
        "Voter ID",
        "Driver’s licence",
        "PAN card",
        "Passport",
        "Aadhaar card",
        "Ration card",
        "Electricity/Telephone /Utility bills",
      ],
    },
    {
      imgSrc: docsimg3,
      alt: "Proof of Income",
      title: "3)Proof of Income",
      items: [
        "Past 3 months’ salary slips",
        "Income Tax Return documents",
        "Form 16",
        "Recent bank statements",
      ],
    },
    {
      imgSrc: docsimg4,
      alt: "Proof of Employment",
      title: "4)Proof of Employment",
      items: [
        "Employer issued identity card",
        "Appointment letter from employer",
        "Employment certificate",
      ],
    },
  ];
  return (
    <>
      <Box bgcolor="#243771">
        <Container maxWidth={"xl"} sx={{ padding: "80px 0px 50px" }}>
          <Grid
            container
            alignItems="center"
            sx={{
              padding: { xs: "10px" },
              // backgroundColor:"gray"
            }}
          >
            <Grid
              item
              md={12}
              // md={8}
              // lg={9}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "50px",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "60%", md: "70%" },
                  // backgroundColor:"pink"
                }}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    fontSize: { xs: "25px", sm: "32px" },
                    fontFamily: "Inter",
                    color: "#f7d64a",
                    fontWeight: "900",
                    lineHeight: "1.1",
                    margin: { xs: "0px 0px 8px" },
                  }}
                >
                  Documents Required For A Medical Loan
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    fontSize: { xs: "16px" },
                    fontFamily: "Inter",
                    color: "#fff",
                    fontWeight: "400",
                    lineHeight: "1.1",
                    margin: { xs: "0px 0px 24px" },
                  }}
                >
                  The documents required to avail of a medical personal loan are
                  provided below:
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "40%", md: "30%" },
                  display: "flex",
                  alignItems: { xs: "center" },
                  justifyContent: { xs: "center" },
                  margin: "0px 0px 20px",
                  // backgroundColor:"red"
                }}
              >
                <GetMatchedButton />
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                {ListInfo.map((doc, index) => (
                  <Box
                    sx={{
                      // backgroundColor: "red",
                      // width: { xs: "50%" },
                      width: { xs: "100%", sm: "48%" },
                      display: "flex",
                      alignItems: { xs: "center", sm: "flex-start" },
                      flexDirection: "column",
                      // margin: "10px 0",
                    }}
                  >
                    <Box>
                      <img src={doc.imgSrc} alt="img1" style={{margin:"0px 0px 20px",width:"85px"}}/>
                    </Box>
                    {/* <Box> */}
                    <Typography
                      sx={{
                        color: "#f7d64a",
                        fontWeight: "800",
                        fontSize: { xs: "18px" },
                        fontFamily: "Inter,sans-serif",
                        textAlign: { xs: "center", sm: "left" },
                        margin:"0px 0px 8px"
                      }}
                    >
                      {doc.title}
                    </Typography>
                    <Box>
                      <List
                        sx={{
                          textAlign: "center", // Center text in ListItems
                        }}
                      >
                        {doc.items.map((item, idx) => (
                          <ListItem
                            textAlign={"center"}
                            sx={{ ...ListItemStyling }}
                          >
                            {" "}
                            <FiberManualRecord sx={{...CircleIcon,display:{xs:"none",sm:"block"} }} />
                            {item}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Box>

                  // </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DocumentsRequiredForMedical;
