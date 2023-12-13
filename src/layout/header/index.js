import React from "react";
import {
  AppBar,
  Box,
  CardMedia,
  Container,
  Link,
  Stack,
  Toolbar,
} from "@mui/material";
import CredmudraLogo from "../../assets/credmudra_logo_new.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <>
      <Box>
        <AppBar
          sx={{
            boxShadow: "none",
            backgroundColor: "black",
            position:"static"
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <CardMedia
                  component="img"
                  sx={{ width: { xs: "150px", sm: "170px", md: "200px" } }}
                  image={CredmudraLogo}
                />
                <Stack
                  direction="row"
                  spacing={6}
                  sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                >
                  <Link
                    underline="none"
                    color="white"
                    fontWeight="600"
                    fontSize="16"
                    fontFamily="Inter, sans-serif"
                  >
                    Business Loan
                  </Link>
                  <Link
                    underline="none"
                    color="white"
                    fontWeight="600"
                    fontSize="16"
                    fontFamily="Inter, sans-serif"
                    display="flex"
                  >
                    Personal Loan
                    <KeyboardArrowDownOutlinedIcon
                      sx={{ height: "20px", width: "20px", marginTop: "-2px" }}
                    />
                  </Link>
                  <Link
                    underline="none"
                    color="white"
                    fontWeight="600"
                    fontSize="16"
                    fontFamily="Inter, sans-serif"
                  >
                    Blogs
                  </Link>
                </Stack>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    height: { xs: "33px", sm: "36px" },
                    width: { xs: "38px", sm: "42px" },
                    bgcolor: "#f7d64a",
                    borderRadius: "2px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MenuIcon fontSize="large" sx={{ color: "#000" }} />
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
