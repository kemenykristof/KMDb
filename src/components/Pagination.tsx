import React from "react";

const Pagination = (props: {
  pages: number;
  nextPage: (arg0: number) => void;
  currentPage: number;
}) => {
  let pageLinks: any[] = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    pageLinks.push(
      <li key={i} onClick={() => props.nextPage(i)}>
        <a href="#!">{i}</a>
      </li>
    );
  }

  return (
    <div>
      <div >
        <ul >
          {props.currentPage > 1 ? (
            <li onClick={() => props.nextPage(props.currentPage - 1)}>
              <a href="#!">Prev</a>
            </li>
          ) : (
            ""
          )}
          {pageLinks}
          {props.currentPage < props.pages + 1 ? (
            <li onClick={() => props.nextPage(props.currentPage + 1)}>
              <a href="#!">Next</a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
