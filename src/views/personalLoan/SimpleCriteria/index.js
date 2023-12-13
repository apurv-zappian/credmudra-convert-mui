import React from "react";
import simplecriteria from "../../../assets/simplecriteriaimg.png";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

const SimpleCriteria = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "1vmax",
    marginRight: ".5vmax",
    // marginTop:"-10px"
  };

  const TypographySubHeadings = {
    color: "#F7D64A",
  };
  return (
    // <>
    // <Box bgcolor="#243771">
    //   {/* <Grid container sx={{
    //     position:{xs:"relative",sm:"relative",md:"relative",lg:"initial",xl:"initial"}
    //   }}>
    //     {/* Left Side */}
    //     {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>  */}
    //       <Box
    //         sx={{
    //           height: {xs:"100vh",sm:"100%"},
    //           // height:"100vh",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           flexDirection: "column",
    //           backgroundColor: "#243771",
    //         }}
    //       >
    //         <Box padding={{xs:"3rem"}}>
    //         <Box
    //           sx={{
    //             width: { xs: "90%",sm:"100%",md:"100%",lg:"100%", xl: "50%" },
    //             // padding: {xs:"2rem 2rem 0",sm:"0",md:"0",lg:"0", xl: "0 10rem 0 0" },
    //             opacity:{xs:".2",md:"initial"},
    //           }}
    //         >
    //           <img
    //             src={simplecriteria}
    //             alt="loading"
    //             style={{
    //               width: "100%",
    //               height: "100%",
    //             }}
    //           />
    //         </Box>
    //         </Box>
    //       </Box>
    //     {/* </Grid> */}
    //     {/* Right Side */}
    //     {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
    //       position:{xs:"absolute",sm:"absolute",md:"initial",lg:"initial",xl:"initial"},
    //       top:{xs:"0"},
    //     }}> */}
    //       <Box>
    //       <Box
    //         sx={{
    //           // height:"100vh",
    //           height:{xs:"100vh",sm:"100%"},
    //           display: "flex",
    //           alignItems: { xs: "left", xl: "left" },
    //           justifyContent: "center",
    //           flexDirection: "column",
    //           backgroundColor: {xs:"transparent",sm:"transparent",md:"#243771",lg:"#243771 ",xl:"#243771"},
    //           color: "white",
    //         }}
    //       >
    //         <Box>
    //         <Typography
    //           variant="h4"
    //           color="#F7D64A"
    //           fontWeight="bolder"
    //           gutterBottom
    //         >
    //           Simple Criteria To Secure Your <br /> Personal Loan
    //         </Typography>
    //         <Typography variant="h6" gutterBottom>
    //           You can get the personal loan easily by meeting the simple
    //           eligibility <br /> criteria as mentioned below:
    //         </Typography>
    //         <List>
    //           <ListItem>
    //             <FiberManualRecord sx={{ ...CircleIcon }} />
    //             <Typography variant="body1">
    //               <Typography
    //                 variant="body1"
    //                 display="inline"
    //                 sx={{ ...TypographySubHeadings }}
    //               >
    //                 Nationality:
    //               </Typography>{" "}
    //               Indian
    //             </Typography>
    //           </ListItem>
    //           <ListItem>
    //             <FiberManualRecord sx={{ ...CircleIcon }} />
    //             <Typography variant="body1">
    //               <Typography
    //                 variant="body1"
    //                 display="inline"
    //                 sx={{ ...TypographySubHeadings }}
    //               >
    //                 Employment:
    //               </Typography>
    //               Both salaried and self-employed individuals
    //             </Typography>
    //           </ListItem>
    //           <ListItem>
    //             <FiberManualRecord sx={{ ...CircleIcon }} />
    //             <Typography variant="body1">
    //               <Typography
    //                 variant="body1"
    //                 display="inline"
    //                 sx={{ ...TypographySubHeadings }}
    //               >

    //                 CIBIL Score:
    //               </Typography>
    //               Minimum 685
    //             </Typography>
    //           </ListItem>
    //           <ListItem>
    //             <FiberManualRecord sx={{ ...CircleIcon }} />
    //             <Typography variant="body1">
    //               <Typography
    //                 variant="body1"
    //                 display="inline"
    //                 sx={{ ...TypographySubHeadings }}
    //               >

    //                 Monthly Income:
    //               </Typography>
    //               More than Rs.25,000 per month
    //             </Typography>
    //           </ListItem>
    //         </List>
    //         <Typography>
    //           Note: These eligibility parameters are indicative and subject to
    //           change
    //         </Typography>
    //         </Box>
    //       </Box>
    //       </Box>
    //     {/* </Grid> */}
    //   {/* </Grid> */}
    //   </Box>
    // </>
    <Box
      sx={{
        backgroundColor: "#243771",
        position: { xs: "relative", sm: "initial" },
        // padding: "3rem",
        height: { xs: "100vh", sm: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding:"3rem",
          height:"100vh",
          width:"100%"
        }}
      >
        <Box>
          <img src={simplecriteria} alt="loading" width={"100%"} height={"100%"} />
        </Box>

        <Box
          sx={{
            pt: "50px",
            pb: "50px",
            position: { xs: "absolute", sm: "initial" },
            top: "0",
            textAlign: "left",
            padding:"3rem"
          }}
        >
          <Typography
            variant="h4"
            color="#F7D64A"
            fontWeight="bolder"
            gutterBottom
          >
            Simple Criteria To Secure Your <br /> Personal Loan
          </Typography>
          <Typography variant="h6" gutterBottom color="white">
            You can get the personal loan easily by meeting the simple
            eligibility <br /> criteria as mentioned below:
          </Typography>
          <List>
            <ListItem>
              <FiberManualRecord sx={{ ...CircleIcon }} />
              <Typography variant="body1" color="white">
                <Typography
                  variant="body1"
                  display="inline"
                  sx={{ ...TypographySubHeadings }}
                >
                  Nationality:
                </Typography>{" "}
                Indian
              </Typography>
            </ListItem>
            <ListItem>
              <FiberManualRecord sx={{ ...CircleIcon }} />
              <Typography variant="body1" color="white">
                <Typography
                  variant="body1"
                  display="inline"
                  sx={{ ...TypographySubHeadings }}
                >
                  Employment:
                </Typography>{" "}
                Both salaried and self-employed individuals
              </Typography>
            </ListItem>
            <ListItem>
              <FiberManualRecord sx={{ ...CircleIcon }} />
              <Typography variant="body1" color="white">
                <Typography
                  variant="body1"
                  display="inline"
                  sx={{ ...TypographySubHeadings }}
                >
                  CIBIL Score:
                </Typography>{" "}
                Minimum 685
              </Typography>
            </ListItem>
            <ListItem>
              <FiberManualRecord sx={{ ...CircleIcon }} />
              <Typography variant="body1" color="white">
                <Typography
                  variant="body1"
                  display="inline"
                  sx={{ ...TypographySubHeadings }}
                >
                  Monthly Income:
                </Typography>{" "}
                More than Rs.25,000 per month
              </Typography>
            </ListItem>
          </List>
          <Typography color="white">
            Note: These eligibility parameters are indicative and subject to
            change
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SimpleCriteria;
