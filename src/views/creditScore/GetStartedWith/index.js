import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CreditScoreMeter from "../../../assets/images/CreditScoreImages/credit_score_concept2 [Converted].png";
import { Link } from "react-router-dom";

const GetStartedWith = ({ onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth={{sm:"70%", xl:"100%"}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ bgcolor: "#fff", border: "2px solid #243771", height: "auto" }}
      >
        {/* Left side with image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: {xs:"45%", sm:"70%", md:"100%"},
          }}
        >
          <img src={CreditScoreMeter} alt="meter" style={{ maxWidth: "80%" }} />
        </Grid>
        {/* Right side with content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "24px",
          }}
        >
          <DialogActions>
            <Button onClick={onClose}>
              <DisabledByDefaultIcon sx={{ color: "#F7D64A" }} />
            </Button>
          </DialogActions>
          <DialogTitle
            sx={{
              fontSize: "27px",
              fontWeight: "600",
              fontFamily: "Inter",
              color: "#262250",
            }}
          >
            Get Started With Credmudra
          </DialogTitle>
          <DialogContent>
            <Typography>
              Enter your mobile number to login or signup
            </Typography>
          </DialogContent>
          <TextField
            sx={{ width: "100%", marginBottom: "24px" }}
            id="outlined-basic"
            label="Enter Mobile"
            variant="outlined"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox defaultChecked />
            <Typography sx={{ color: "#243771", fontSize: "11px" }}>
              By continuing, I agree to{" "}
              <Link href="/" color="#243771">
                terms
              </Link>{" "}
              of use and{" "}
              <Link href="/" color="#243771">
                privacy policy
              </Link>
              .
            </Typography>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <Button
              type="submit"
              sx={{
                textTransform: "none",
                width: "100%",
                padding: "10px 10px",
                bgcolor: "#E4E7ED",
                "&:hover": {
                  background: "#E4E7ED",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#243771",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Proceed
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default GetStartedWith;
