import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const initialSoryByParams = searchParams.get("sortBy");

  const [sortBy, setSortBy] = useState("");
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  console.log(sortBy);
  useEffect(() => {
    if (sortBy) {
      const params = {};
      sortBy && (params.sortBy = sortBy);
      //setSearchParams({ genre: category, sortBy });
      setSearchParams(params);
    }
  }, [sortBy, searchParams]);

  return (
    <div style={{ minWidth: "250px" }}>
      <h3>Sort By</h3>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            data-cy="asc"
            value="asc"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            data-cy="desc"
            value="desc"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
