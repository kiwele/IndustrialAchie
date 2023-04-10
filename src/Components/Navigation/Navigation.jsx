import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../LOGO.png";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    color: "white",
    backgroundColor: "red",
  },
});

function Navigation({ totalItems }) {
  const location = useLocation();
  return (
    <div>
      <AppBar
        position="fixed"
        color="inherit"
        style={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          background: "#000000",
        }}
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            style={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
            }}
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              style={{ marginRight: "10px" }}
            />{" "}
            TITO LLC
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Typography
            component={Link}
            to="/"
            style={{
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              marginRight: "15px",
            }}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            to="/about"
            style={{
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              marginRight: "15px",
            }}
          >
            About Us
          </Typography>
          <Typography
            component={Link}
            to="/shop"
            style={{
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              marginRight: "15px",
            }}
          >
            Shop
          </Typography>
          <Typography
            component={Link}
            to="/tenders"
            style={{
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              marginRight: "15px",
            }}
          >
            Jobs and Tenders
          </Typography>
          <Typography
            component={Link}
            to="/contact"
            style={{
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              marginRight: "15px",
            }}
          >
            Contact Us
          </Typography>
          {location.pathname === "/shop" && (
            <div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
              >
                {/* <Badge badgeContent={totalItems} style={{ color: "white" }}>
                  <ShoppingCart />
                </Badge> */}
                <StyledBadge badgeContent={totalItems} style={{ color: "white" }}>
                <ShoppingCart />
                </StyledBadge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
