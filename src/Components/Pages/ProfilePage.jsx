import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import appwriteService from "../../appwrite/auth";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.userData);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    college: "",
    stemID: "",
    events: []
  });

  const getData = async () => {
    try {
      const userData = await appwriteService.retrieveData(user.userData.$id);
      if (userData) {
        setUserInfo({
          name: userData.fullName || "",
          email: userData.email || "",
          college: userData.collegeName || "N/A",
          stemID: userData.$id || "N/A",
          events: userData.events || []
        });
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
      setUserInfo({
        name: "Unknown",
        email: "Unknown",
        college: "N/A",
        stemID: "N/A",
        events: []
      });
    }
  };

  useEffect(() => {
    getData();
  }, [user]);

  return (
    <div className="flex justify-center items-center w-full my-10 bg-transparent">
      <div className="flex flex-col md:flex-row bg-gray-900 shadow-lg rounded-2xl max-w-5xl w-full p-6 gap-4">
        {/* QR Code Section */}
        <div className="flex justify-center items-center w-full md:w-1/3 p-4 border border-gray-700 rounded-md">
          <QRCode value={JSON.stringify(userInfo)} size={200} />
        </div>

        {/* Profile Details Section */}
        <div className="flex flex-col w-full md:w-2/3 border border-gray-700 rounded-md">
          <div className="flex flex-col gap-6 p-4">
            <div className="border-b border-gray-600 pb-2">
              <h2 className="text-gray-400 font-bold uppercase">Full Name</h2>
              <p className="text-white">{userInfo.name}</p>
            </div>
            <div className="border-b border-gray-600 pb-2">
              <h2 className="text-gray-400 font-bold uppercase">E-mail</h2>
              <p className="text-white">{userInfo.email}</p>
            </div>
            <div className="border-b border-gray-600 pb-2">
              <h2 className="text-gray-400 font-bold uppercase">College</h2>
              <p className="text-white">{userInfo.college}</p>
            </div>
            <div className="pb-2">
              <h2 className="text-gray-400 font-bold uppercase">Stem ID</h2>
              <p className="text-white">{userInfo.stemID}</p>
            </div>
            <div className="pb-2">
              <h2 className="text-gray-400 font-bold uppercase">Interested Event</h2>
              <p className="text-white">{userInfo.events.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
