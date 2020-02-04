import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Nav = styled.div({
  display: "flex",
  justifyContent: "space-around",
  padding: "6px",
  backgroundColor: "#202020",
  fontSize: "20px",
  color: "#e1b73b",
  textAlign: "center"
});

const Logo = styled.div({
  borderRadius: "10px",
  fontWeight: "bold",
  backgroundColor: "#e1b73b",
  color: "#202020",
  border: "none",
  padding: "8px 10px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px"
});

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <Nav>
      <Logo>KMDb</Logo>
      <NavLink style={{ color: "#E1B73B" }} to="/">
        Trending
      </NavLink>
      <NavLink style={{ color: "#E1B73B" }} to="/search">
        Search
      </NavLink>

      <NavLink style={{ color: "#E1B73B" }} to="/watchlist">
        Watchlist
      </NavLink>
    </Nav>
  );
};
export default Navbar;
