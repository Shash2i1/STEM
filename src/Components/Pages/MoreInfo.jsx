import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import appwriteService from "../../appwrite/auth";

function MoreInfo() {
  const events = ["Model Expo", "Sparkore", "Bugged out", "Electrivia", "Evolvance"];
  const [selectedEvent, setSelectedEvent] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const contentRef = useRef(null);

  const fetchData = async () => {
    try {
      const data = await appwriteService.retrieveAllData();
      if (data) {
        setAllUsers(data.documents);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEventChange = (event) => {
    const selected = event.target.value;
    setSelectedEvent(selected);
    const filtered = allUsers.filter((user) => user.events.includes(selected));
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-4">Filter Participants by Event</h1>
      <div className="mb-6">
        <select
          value={selectedEvent}
          onChange={handleEventChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">Select an Event</option>
          {events.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handlePrint}
        className="mb-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
      >
        Download Results as PDF
      </button>

      <p>Total : {filteredUsers.length}</p>

      <div
        ref={contentRef}
        className="bg-white p-6 shadow-md rounded-md w-full max-w-4xl"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          Participants for {selectedEvent || "Selected Event"}
        </h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Sl. No</th>
              <th className="px-4 py-2 border">Full Name</th>
              <th className="px-4 py-2 border">College Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{user.fullName || "N/A"}</td>
                <td className="px-4 py-2 border">{user.collegeName || "N/A"}</td>
                <td className="px-4 py-2 border">{user.email || "N/A"}</td>
                <td className="px-4 py-2 border">{user.mobileNumber || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No participants found.</p>
        )}
      </div>
    </div>
  );
}

export default MoreInfo;
