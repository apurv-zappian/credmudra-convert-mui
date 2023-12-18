import { Button } from '@mui/material';
import React from 'react'

const GetMatchedButton = () => {
  return (
    <>
      
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#243771",
                      color: "#f7d64a",
                    },
                    padding: {xs:"12px 34px 12px"},
                    boxShadow: "0px 3px 6px #00000029",
                    borderRadius: "10px",
                    backgroundColor: "#f7d64a",
                    color: "#243771",
                    marginTop: "10px",
                    fontWeight: "600",
                    transition: ".4s all ease-in-out",
                    textTransform: "capitalize ",
                    fontSize: { xs: "16px"},
                    fontFamily:"Inter"
                  }}
                >
                  Get Matched Now!
                </Button>
              
    </>
  )
}

export default GetMatchedButton;
