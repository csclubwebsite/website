import React from "react";
import { Button, Box, styled, Grid, Typography } from "@mui/material";
import theme from "../themes/theme";
import Logo from "../assets/img.png";

const Head = styled(Box)({
  overflow: "hidden",
  "&::after": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    height: "388px",
    width: "100%",
    transform: "skewY(-5.5deg)",
    backgroundColor: theme.palette.background.default,
    transformOrigin: "bottom left",
    zIndex: "-1",
  },
});

const NavItem = styled(Button)({
  textTransform: "none",
  color: theme.palette.background.default,
  backgroundColor: "white",
  borderRadius: "0",
  width: "150px",
  height: "75px",
  "&:focus, &:hover, &:visited, &:link, &:active": {
    textTransform: "none",
    color: theme.palette.background.default,
    backgroundColor: "white",
  },
});

const NavText = styled(Typography)({
  fontSize: "30px",
  fontWeight: "400",
  lineHeight: "36px",
});

function Header() {
  return (
    <Head>
      <Grid container>
        <Grid item xs={6} md={6}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "350px", width: "auto" }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Box
            sx={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Box px={3}>
              <NavItem>
                <NavText>Home</NavText>
              </NavItem>
            </Box>
            <Box px={3}>
              <NavItem>
                <NavText>Events</NavText>
              </NavItem>
            </Box>
            <Box px={3}>
              <NavItem>
                <NavText>About</NavText>
              </NavItem>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Head>
  );
}

export default Header;
