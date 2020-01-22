import React from "react";
import styled from "@emotion/styled";
import SearchField from "./SearchField";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 6px;
  background-color: #202020;
  font-size: 20px;
  color: #E1B73B;
  text-align: center;
`;
const Text = styled.p`
  color: "goldenrod";
`;
const Navbar = props => {
  return (
    <Nav>
      <Text>KMDb</Text>
      <NavLink style={{color: "#E1B73B"}} to="/">Popular movies</NavLink>
      <SearchField
        handleSearch={props.handleSearch}
        handleChange={props.handleChange}
      ></SearchField>
      <NavLink style={{color: "#E1B73B"}} to="/watchlist">Watchlist</NavLink>
    </Nav>
  );
};
export default Navbar;
