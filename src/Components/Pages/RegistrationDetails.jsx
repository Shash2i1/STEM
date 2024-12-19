import React, { useEffect, useState } from 'react';
import eventService from '../../appwrite/EventsReg';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

function RegistrationDetails() {
    const [allData, setAllData] = useState([]);

    const fetchData = async () => {
        try {
            const db = await eventService.fetchAllData(); // Assuming this fetches all data using pagination
            if (db) {
                setAllData(db);
                console.log(db);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const exportToExcel = async () => {
        if (allData.length === 0) {
            console.warn("No data available to export.");
            return;
        }

        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet("Participants");

        worksheet.columns = [
            { header: "Student Name", key: "StudentName", width: 20 },
            { header: "College Name", key: "CollegeName", width: 30 },
            { header: "Mobile Number", key: "MobileNumber", width: 15 },
            { header: "Stem ID", key: "StemId", width: 15 },
        ];

        allData.forEach((data) => {
            worksheet.addRow({
                StudentName: data.StudentName || "N/A",
                CollegeName: data.CollegeName || "N/A",
                MobileNumber: data.MobileNumber || "N/A",
                StemId: data.StemId || "N/A",
            });
        });

        worksheet.getRow(1).font = { bold: true };
        worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "center" };

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "Participants_Registration.xlsx");
        console.log("Excel file downloaded successfully!");
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-4">
            <h1 className="font-bold text-2xl mb-4 text-center">Registration Details</h1>
            <h2>Total : {allData?.length}</h2>
            {/* Export Button */}
            <button
                onClick={exportToExcel}
                className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 mb-4"
            >
                Download as Excel
            </button>

            {/* Table Display */}
            {allData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="border border-gray-300 px-4 py-2">Sl.No</th>
                                <th className="border border-gray-300 px-4 py-2">Student Name</th>
                                <th className="border border-gray-300 px-4 py-2">College Name</th>
                                <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
                                <th className="border border-gray-300 px-4 py-2">Stem ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allData.map((data, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{data.StudentName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{data.CollegeName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{data.MobileNumber}</td>
                                    <td className="border border-gray-300 px-4 py-2">{data.StemId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No data found.</p>
            )}
        </div>
    );
}

export default RegistrationDetails;
