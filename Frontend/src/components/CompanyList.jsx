import React from "react";

const CompanyList = ({ companies, editCompany, deleteCompany }) => (
  <div className="overflow-x-auto">
    <table className="table-auto w-full mx-auto my-auto">
      <thead>
        <tr>
          <th colSpan="5" className="px-4 py-3 text-center text-3xl">
            {companies.length > 0 ? "Company Details" : "No Data Available"}
          </th>
        </tr>
        {companies.length > 0 && (
          <tr>
            <th className="px-4 py-2">Serial No.</th>
            <th className="px-4 py-2">Company Name</th>
            <th className="px-4 py-2">Mode of Communication</th>
            <th className="px-4 py-2">Academic Year</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        )}
      </thead>
      <tbody>
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <tr key={company.id} className="bg-white">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{company.company_name}</td>
              <td className="border px-4 py-2">{company.moc}</td>
              <td className="border px-4 py-2">{company.academic_year}</td>
              <td className="border px-4 py-2 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => editCompany(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
                  onClick={() => deleteCompany(company.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="px-4 py-2 text-center">
              No companies available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);


export default CompanyList;

// import React from "react";

// const CompanyList = ({ companies, editCompany, deleteCompany }) => (
//   <table className="table-auto mx-auto my-auto">
//     <thead>
//       <tr>
//         <th colSpan="5" className="px-4 py-3 text-center text-3xl">
//           {companies.length > 0 ? "Company Details" : "No Data Available"}
//         </th>
//       </tr>
//       {companies.length > 0 && (
//         <tr>
//           <th className="px-4 py-2">Serial No.</th>
//           <th className="px-4 py-2">Company Name</th>
//           <th className="px-4 py-2">Mode of Communication</th>
//           <th className="px-4 py-2">Academic Year</th>
//           <th className="px-4 py-2">Actions</th>
//         </tr>
//       )}
//     </thead>
//     <tbody>
//       {companies.length > 0 ? (
//         companies.map((company, index) => (
//           <tr key={index} className="bg-white">
//             <td className="border px-4 py-2">{index + 1}</td>
//             <td className="border px-4 py-2">{company.companyName}</td>
//             <td className="border px-4 py-2">{company.communicationMode}</td>
//             <td className="border px-4 py-2">{company.academicYear}</td>
//             <td className="border px-4 py-2">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
//                 onClick={() => editCompany(index)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
//                 onClick={() => deleteCompany(index)}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))
//       ) : (
//         <tr>
//           <td colSpan="5" className="px-4 py-2 text-center">
//             No companies available
//           </td>
//         </tr>
//       )}
//     </tbody>
//   </table>
// );

// export default CompanyList;
