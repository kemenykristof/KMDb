import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchArea = () => {
  return (
    <div>
      <section>
        <form action="">
          <div>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={value => console.log(value)}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default SearchArea;
