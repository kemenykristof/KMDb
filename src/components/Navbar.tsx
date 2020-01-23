import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 6px;
  background-color: #202020;
  font-size: 20px;
  color: #e1b73b;
  text-align: center;
`;
const Logo = styled.div`
  border-radius: 10px;
  font-weight: bold;
  background-color: #e1b73b;
  color: #202020;
  border: none;
  padding: 8px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
const Navbar = props => {
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
