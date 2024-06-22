import React, { useState } from "react";
import axios from "axios";

const AddCompanyPopup = ({ onSave, onCancel }) => {
  const [companyName, setCompanyName] = useState("");
  const [communicationMode, setCommunicationMode] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [error, setError] = useState("");

  const validateCompanyName = (name) => {
    if (!name.trim()) {
      setError("Company name cannot be empty");
      return false;
    }
    setError("");
    return true;
  };

  const validateAcademicYear = (year) => {
    const isValidYear = /^\d{4}$/.test(year);
    if (!isValidYear) {
      setError("Invalid year format. Please use YYYY format.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = async () => {
    if (
      !validateCompanyName(companyName) ||
      !communicationMode ||
      !validateAcademicYear(academicYear)
    ) {
      return;
    }

    const newCompany = {
      companyname: companyName,
      moc: communicationMode,
      academic_year: academicYear,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/addCompany",
        newCompany
      );
      console.log(response.data);
      alert(response.data.message);
      onSave(newCompany);
      clearForm(); // Clear the form after saving
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    clearForm();
    onCancel();
  };

  const clearForm = () => {
    setCompanyName("");
    setCommunicationMode("");
    setAcademicYear("");
    setError("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-900"
          onClick={onCancel}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Add Company</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Mode of Communication
          </label>
          <select
            className="w-full p-2 border rounded"
            value={communicationMode}
            onChange={(e) => setCommunicationMode(e.target.value)}
          >
            <option value="">Select Mode</option>
            <option value="contact">Contact</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Academic Year</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="YYYY"
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCompanyPopup;
