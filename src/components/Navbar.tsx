import React from "react";
import styled from "@emotion/styled";
import SearchField from "./SearchField";

const Nav = styled.div`
  padding: 6px;
  background-color: #202020;
  font-size: 20px;
  color: goldenrod;
  text-align: center;
`;
const Text = styled.p`
  color: "goldenrod";
`;
const Navbar = props => {
  return (
    <Nav>
      <Text>KMDb</Text>
      <SearchField
        handleSearch={props.handleSearch}
        handleChange={props.handleChange}
      ></SearchField>
    </Nav>
  );
};
export default Navbar;
