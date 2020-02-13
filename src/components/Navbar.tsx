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

const StyledNavlink = styled.div({
  fontWeight: "bold"
});

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = props => {
  return (
    <Nav>
      <Logo>KMDb</Logo>
      <StyledNavlink>
        <NavLink style={{ color: "#e1b73b" }} to="/">
          Trending
        </NavLink>
      </StyledNavlink>
      <StyledNavlink>
        <NavLink style={{ color: "#e1b73b" }} to="/search">
          Search
        </NavLink>
      </StyledNavlink>
      <StyledNavlink>
        <NavLink style={{ color: "#e1b73b" }} to="/watchlist">
          Watchlist
        </NavLink>
      </StyledNavlink>
    </Nav>
  );
};
export default Navbar;
