import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input
                className="bg-lightest-blue pa3"
                type="search"
                placeholder="Enter name"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
