import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="p-4 rounded shadow-md mb-4 w-full max-w-lg mx-auto">
    <input
      type="text"
      placeholder="Search company name"
      className="w-full p-2 border rounded"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
);

export default SearchBar;

// import React from "react";

// const SearchBar = ({ searchQuery, setSearchQuery }) => (
//   <div className="p-4 rounded shadow-md mb-4 w-full">
//     {/* <h2 className="text-xl font-bold mb-4">Search Companies</h2> */}
//     {/* <div className="mb-2"> */}
//     {/* <label className="block mb-1">Search by Company Name</label> */}
//     <input
//       type="text"
//       placeholder="Search company name"
//       className="w-full p-2 border rounded"
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//     />
//     {/* </div> */}
//   </div>
// );

// export default SearchBar;
