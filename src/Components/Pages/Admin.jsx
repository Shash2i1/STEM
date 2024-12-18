import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import appwriteService from "../../appwrite/auth";
import { Link } from "react-router-dom";

function Admin() {
  const [participantsList, setParticipants] = useState([]);
  const contentRef = useRef(null); // Create a ref for the printable content

  const fetchData = async () => {
    try {
      const data = await appwriteService.retrieveAllData();
      if (data) {
        setParticipants(data.documents);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrint = useReactToPrint({
    contentRef// Correctly pass the content ref
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-6">
      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="mb-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
      >
        Download as PDF
      </button>

      {/*Total Register */}
      <div className="w-full px-8 flex items-center justify-around">
      <p>Total Registered : {participantsList.length}</p>
      <Link to="/moreinfo"
      className="text-blue-400 hover:text-blue-700">More Info</Link>
      </div>

      {/* Printable Content */}
      <div
        ref={contentRef} // Attach the ref to this container
        className="bg-white p-6 shadow-md rounded-md w-full max-w-6xl"
      >
        <h1 className="text-2xl font-bold text-center mb-4">STEM Participants Details</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Sl. No</th>
                <th className="px-4 py-2 border border-gray-300">Full Name</th>
                <th className="px-4 py-2 border border-gray-300">College Name</th>
                <th className="px-4 py-2 border border-gray-300">Events</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                <th className="px-4 py-2 border border-gray-300">Dish</th>
                <th className="px-4 py-2 border border-gray-300">Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {participantsList.map((participant, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {participant.fullName || "N/A"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {participant.collegeName || "N/A"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {participant.events.map((event, index) => <p key={index}>{event}</p>) || "N/A"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {participant.email || "N/A"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {participant.dish || "N/A"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {participant.mobileNumber || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
