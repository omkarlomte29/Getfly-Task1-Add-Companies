import React from "react";

const FilterForm = ({
  filterMode,
  setFilterMode,
  filterYear,
  setFilterYear,
  clearFilters,
}) => (
  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 m-2">
    
    <select
      className="p-2 border rounded m-2 sm:m-0"
      value={filterYear}
      onChange={(e) => setFilterYear(e.target.value)}
    >
      <option value="">Select Year</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2025">2026</option>
    </select>
    
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded m-2 sm:m-0 hover:bg-blue-700"
      onClick={clearFilters}
    >
      Clear Filters
    </button>
  </div>
);

export default FilterForm;

