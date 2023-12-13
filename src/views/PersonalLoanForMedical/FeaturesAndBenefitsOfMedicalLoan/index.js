import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import featuresimg1 from "../../../assets/images/PersonalLoanForMedicalImages/featuresimg1.png";
import featuresimg2 from "../../../assets/images/PersonalLoanForMedicalImages/featuresimg2.png";
import featuresimg3 from "../../../assets/images/PersonalLoanForMedicalImages/featuresimg3.png";
import featuresimg4 from "../../../assets/images/PersonalLoanForMedicalImages/featuresimg4.png";
import featuresimg5 from "../../../assets/images/PersonalLoanForMedicalImages/featuresimg5.png";
import featuresimg6 from "../../../assets/images/PersonalLoanForMedicalImages/featuresimg6.png";
import featuresimg7 from "../../../assets/images/PersonalLoanForMedicalImages/featuresimg7.png";
import featuresimg8 from "../../../assets/images/PersonalLoanForMedicalImages/featuresimg8.png";


const FeaturesBenefitsOfMedicalLoan = () => {
  const ListBox = {
    width: {xs:"100%",sm:"46%"},
    alignItems: "center",
    background: "#fcefb8",
    borderRadius: "5px",
    boxShadow: " 0 3px 6px rgba(0,0,0,.161)",
    display: "flex",
    // margin: "0 2% 42px",
    // padding: "18px 15px 14px",
    margin: "0 2% 42px",
    padding: "18px 15px 14px"
    
  };

  const ListItemTextStyling ={
    fontSize:"16px",
    fontFamily:"Inter",
    color:"#404040",
    paddingLeft:"10px",
    lineHeight:{xs:"1.3"}
  }
  return (
    <>
      <Box>
        <Container>
          {/* <Box> */}
            <Typography
              sx={{
                textAlign: { xs: "center"},
                fontSize: { xs: "24px", sm: "36px" },
                fontFamily: "Inter",
                color: "#243771",
                fontWeight: "800",
                lineHeight: { xs: "1.3", sm: "1.5" },
                margin: { xs: "0px 0px 24px" },
              }}
            >
              Features And Benefits Of A Medical Loan
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center",},
                fontSize: { xs: "18px",},
                fontFamily: "Inter",
                color: "#243771",
                fontWeight: "500",
                lineHeight: { xs: "1.3", sm: "1.5" },
                margin: { xs: "0px 0px 42px" },
              }}
            >
              Mentioned below are <b>9 key features</b> and benefits of personal
              medical loans:
            </Typography>
            <List sx={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
              <ListItem sx={{ ...ListBox }}>
                <img src={featuresimg1} alt="easy online application modes" />
                <Typography display="inline" sx={{...ListItemTextStyling}} 
                >
                    Instant loan approval process and fast loan amount disbursement process.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <img src={featuresimg2} alt="easy online application modes" />
                <Typography display="inline" sx={{...ListItemTextStyling}} 
                >
                    Instant loan approval process and fast loan amount disbursement process.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <img src={featuresimg3} alt="easy online application modes" />
                <Typography display="inline" sx={{...ListItemTextStyling}} 
                >
                    Instant loan approval process and fast loan amount disbursement process.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <img src={featuresimg4} alt="easy online application modes" />
                <Typography display="inline" sx={{...ListItemTextStyling}} 
                >
                    Instant loan approval process and fast loan amount disbursement process.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <img src={featuresimg5} alt="easy online application modes" />
                <Typography display="inline" sx={{...ListItemTextStyling}} 
                >
                    Instant loan approval process and fast loan amount disbursement process.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <img src={featuresimg6} alt="easy online application modes" />
                <Typography display="inline" sx={{...ListItemTextStyling}} 
                >
                    Instant loan approval process and fast loan amount disbursement process.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <img src={featuresimg7} alt="easy online application modes" />
                <Typography display="inline" sx={{...ListItemTextStyling}} 
                >
                    Instant loan approval process and fast loan amount disbursement process.
                </Typography>
              </ListItem>
              <ListItem sx={{ ...ListBox }}>
                <img src={featuresimg8} alt="easy online application modes" />
                <Typography display="inline" sx={{...ListItemTextStyling}} 
                >
                    Instant loan approval process and fast loan amount disbursement process.
                </Typography>
              </ListItem>
              
            </List>
          {/* </Box> */}
        </Container>
      </Box>
    </>
  );
};

export default FeaturesBenefitsOfMedicalLoan;
