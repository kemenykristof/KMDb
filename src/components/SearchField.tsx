import React, { FormEvent } from "react";
import { Input } from "antd";
import styled from "@emotion/styled";

const { Search } = Input;

const SearchWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px"
});

interface SearchFieldProps {
  handleSearch: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (e) => void;
}

const SearchField:React.FC<SearchFieldProps> = (props) => {
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
