import { Button } from "@mui/material";
import React from "react";

const GetFreeCreditButton = () => {
  return (
    <>
      <Button
        sx={{
          width: "248px",
          height: "55px",
          background: "#75A54C 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          border: "1px solid #79B86F",
          opacity: 1,
          borderRadius: "10px",
          color: "white",
          marginTop:"30px",
          textTransform: "capitalize ",
          "&:hover": {
            background: "#75A54C",
          },
        }}
      >
        Get Free Credit Score
      </Button>
    </>
  );
};

export default GetFreeCreditButton;
