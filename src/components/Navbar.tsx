import React from "react";
import styled from "@emotion/styled";

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
const Navbar = () => {
  return (
    <Nav>
      <Text>KMDb</Text>
    </Nav>
  );
};
export default Navbar;
