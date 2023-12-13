import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";

const Section1Form = () => {

  return (
    <>
      <Box>
        <TextField
          placeholder="XXXXXXXXXX"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{
                  height: "100%",
                  fontWeight: 900,
                  paddingRight: "15px",
                  opacity: 2,
                }}
              >
                <span></span>🇮🇳 +91
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #F7D64A",
            width: {xs:"100%",md:"285px"},
            borderRadius: "8px",
            "& input": {
              fontSize: "1max",
            },
          }}
        />
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "#243788",
              color: "#F7D64A",
            },
            padding: "16px 27px 16px",
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "10px",
            border: "1px solid #F7D64A",
            backgroundColor: "#F7D64A",
            color: "#243788",
            marginLeft: {sm:"0",md:"0",lg:"8px",xl:"8px"},
            fontWeight: "900",
            transition: ".4s all ease-in-out",
            textTransform:"capitalize ",
            width:{xs:"100%",md:"285px",xl:"150px"},
            marginTop:{xs:"1rem",md:".5rem",lg:"0",xl:"0"}
          }}
        >
          Apply Now
        </Button>
        
      </Box>
    </>
  );
};

export default Section1Form;
