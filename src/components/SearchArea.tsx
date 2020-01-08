import React from "react";
import { Input } from "antd";
import styled from "@emotion/styled";

const { Search } = Input;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SearchArea = () => {
  return (
    <SearchContainer>
      <section>
        <form action="">
          <div>
            <Search
              placeholder="Search movies"
              enterButton="Search"
              size="large"
              style={{ width: 500 }}
              onSearch={value => console.log(value)}
            />
          </div>
        </form>
      </section>
    </SearchContainer>
  );
};

export default SearchArea;
