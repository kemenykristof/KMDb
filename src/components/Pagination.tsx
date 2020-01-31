import React from "react";
import styled from "@emotion/styled";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-right: 5px;
  list-style-type: none;
`;

const Pagination = (props: {
  numberOfPages: number;
  getNextPage: (next: number) => void;
  currentPage: number;
}) => {
  let pageLinks:any[] = [];

  for (let i = 1; i <= props.numberOfPages + 1; i++) {
    pageLinks.push(
      <li
        style={{
          borderStyle: "solid",
          borderColor: "steelblue",
          paddingRight: "3px",
          paddingLeft: "3px",
          marginRight: "5px"
        }}
        key={i}
        onClick={() => props.getNextPage(i)}
      >
        <a href="#!">{i}</a>
      </li>
    );
  }

  return (
    <div>
      <StyledUl>
        {props.currentPage > 1 ? (
          <li onClick={() => props.getNextPage(props.currentPage - 1)}>
            <a href="#!">Prev</a>
          </li>
        ) : (
          ""
        )}
        {pageLinks}
        {props.currentPage < props.numberOfPages + 1 ? (
          <li onClick={() => props.getNextPage(props.currentPage + 1)}>
            <a href="#!">Next</a>
          </li>
        ) : (
          ""
        )}
      </StyledUl>
    </div>
  );
};

export default Pagination;
