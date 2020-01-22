import React from "react";
import { Input } from "antd";
import styled from "@emotion/styled";

const { Search } = Input;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SearchField = (props:any) => {
  return (
    <SearchWrapper>
      <section>
        <form action="" onSubmit={props.handleSearch}>
          <div>
            <Search
            onChange={props.handleChange}
              placeholder="Search movies"
              enterButton="Search"
              size="large"
              style={{ width: 500 }}
              onSearch={value => console.log(value)}
            />
          </div>
        </form>
      </section>
    </SearchWrapper>
  );
};

export default SearchField;
