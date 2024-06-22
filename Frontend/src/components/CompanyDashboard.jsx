import React, { useEffect, useState } from "react";
import CompanyList from "./CompanyList";
import FilterForm from "./FilterForm";
import AddCompanyPopup from "./AddCompanyPopup";
import EditCompanyPopup from "./EditCompanyPopup";
import axios from "axios";

function CompanyDashboard() {
  const [companies, setCompanies] = useState([]);
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [filterMode, setFilterMode] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingCompany, setEditingCompany] = useState(null);

  useEffect(() => {
    const getTeamData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getCompanyList");
        console.log("Fetched companies:", res.data);
        setCompanies(res.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    getTeamData();
  }, []);

  const validateYear = (year) => {
    const yearRegex = /^(19|20)\d{2}$/;
    return yearRegex.test(year);
  };

  const addCompany = (newCompany) => {
    setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
    setIsAddPopupVisible(false);
    window.location.reload(); // Reload the page
  };

  const updateCompany = (updatedCompany) => {
    const updatedCompanies = companies.map((company, index) =>
      index === editingCompany.index ? updatedCompany : company
    );
    setCompanies(updatedCompanies);
    setEditingCompany(null);
    setIsEditPopupVisible(false);
    window.location.reload(); // Reload the page
  };

  const editCompany = (index) => {
    console.log("Editing company at index:", index);
    setEditingCompany({ ...companies[index], index });
    setIsEditPopupVisible(true);
  };

  const openAddCompanyPopup = () => {
    setIsAddPopupVisible(true);
  };

  const deleteCompany = async(index) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
    const id=index;
      try {
        await axios.post(
          `http://localhost:5000/deleteCompany/${id}`
        );
        // onSave(updatedCompany);
        // clearForm();
        window.location.reload()
      } catch (error) {
        console.error("Error:", error);
      }

      const updatedCompanies = [...companies];
      updatedCompanies.splice(index, 1);
      setCompanies(updatedCompanies);
    }
  };

  const clearFilters = () => {
    setFilterMode("");
    setFilterYear("");
    setSearchQuery('')
  };

  // const filteredCompanies = companies
  //   .filter(
  //     (company) => !filterMode || company.communicationMode === filterMode
  //   )
  //   .filter(
  //     (company) => !filterYear || company.academicYear.includes(filterYear)
  //   );
  const filteredCompanies = companies
  .filter(
    (company) => !searchQuery || company.company_name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter(
    (company) => !filterYear || company.academic_year.includes(filterYear)
  );



  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row sm:items-center mb-3 space-y-2 sm:space-y-0 sm:space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-lg"
          onClick={openAddCompanyPopup}
        >
          Add
        </button>
        {/* <input
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Search by Company Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
        <select className="flex-1 p-2 border rounded"
         onChange={(e) => setSearchQuery(e.target.value)}
        >
          <option>Select the Company</option>
          {companies.map((data,i)=>(
            <option key={i}>{data.company_name}</option>
          ))}
        </select>
        {/* <div className="mb-4 flex">
          <select className='w-100'
            onChange={(e) => setSearchQuery(e.target.value)}>

            <option defaultChecked>Select the Company</option>

            {companies.map((data, i) => (
              <option key={i} value={data.company_name}>{data.company_name}</option>
            ))}

          </select>
        </div> */}
        <FilterForm
          filterMode={filterMode}
          setFilterMode={setFilterMode}
          filterYear={filterYear}
          setFilterYear={setFilterYear}
          clearFilters={clearFilters}
        />
      </div>

      {isAddPopupVisible && (
        <AddCompanyPopup
          onSave={addCompany}
          onCancel={() => setIsAddPopupVisible(false)}
        />
      )}

      {isEditPopupVisible && (
        <EditCompanyPopup
          onSave={updateCompany}
          onCancel={() => setIsEditPopupVisible(false)}
          editingCompany={editingCompany}
        />
      )}

      <CompanyList
        companies={filteredCompanies}
        editCompany={editCompany}
        deleteCompany={deleteCompany}
      />
    </div>
  );
}

export default CompanyDashboard;
