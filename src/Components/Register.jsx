import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/authSlice";
import { Input, Select, Loader } from "./index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appwriteService from "../appwrite/auth";
import { Link } from "react-router-dom";
import '../CSS/ToggleSwitch.css';

function Register() {
  const [error, setError] = useState("");
  const [eventList, setEventList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  // Events List must mention here
  const eventOptions = ["Model Expo", "Sparkore", "Bugged out","Electrivia", "Evolvance"];

  // Method to handle the register
  const handleRegister = async (data) => {
    //Start a loader
    setLoading(true)
    setError("");

   
    try {
      // First, register the student
      const user = await appwriteService.registerStudents(data);

      if (user) {
        // Attempt login
        const userinfo = await appwriteService.login(data);
        dispatch(login(userinfo));

        // Store participant info in database
        const db = await appwriteService.addParticipantInfo(
          user.$id,
          data.fullName,
          data.otherCollegeName,
          eventList,
          data.email,
          data.dish,
          data.mobileNo
        );

        // If database operation fails, delete the user and log out
        if (!db) {
          await appwriteService.logout();
          await appwriteService.deleteUser(user.$id);
          setError("Failed to store user data. Please try again.");
        } else {
          toast.success("Registration successful!");
          navigate('/');
        }
      }
    } catch (error) {
      if (error.code === 409) {
        setError("An account with this email already exists. Please use a different email.");
      } else if (error.code === 429) {
        setError("You are making requests too quickly. Please wait and try again.");
      } else {
        setError("An error occurred while creating the account. Please try again.");
      }
      console.error(error);
      toast.error(error.message);
    }
    finally {
      setLoading(false)
    }
  };

  // Method to handle event selection
  const handleEventSelection = (event) => {
    const { value, checked } = event.target;
    setEventList((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-xl mb-2 text-center">Register</h2>
      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="Full Name"
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          {...register("fullName", { required: "Full name is required" })}
        />

          <Input
            label="Enter College Name"
            type="text"
            placeholder="College Name"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            {...register("otherCollegeName",{required: true})}
          />
        <div>
          <label className="block mb-2  font-bold">
            Which is your favorite event?
          </label>
          {eventOptions.map((event, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                value={event}
                onChange={handleEventSelection}
                className="toggle-checkbox hidden"
                id={`toggle-${index}`}
              />
              <div className="toggle-switch">
                <div className="toggle-dot"></div>
              </div>
              <span className="text-gray-700">{event}</span>
            </label>
          ))}
        </div>
        <Input
          label="Email"
          type="email"
          placeholder="Email"
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          {...register("email", { required: "Email is required" })}
        />
        <Select
          label="Select Dish"
          options={[
            { value: "Non-veg", label: "Non-veg" },
            { value: "Veg", label: "Veg" },
          ]}
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          {...register("dish", { required: "Dish selection is required" })}
        />
        <Input
          label="Phone Number"
          type="text"
          placeholder="Mobile Number"
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          {...register("mobileNo", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/, // Adjust regex as needed for your phone number format
              message: "Phone number must be 10 digits",
            },
          })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          {...register("password", { required: "Password is required" })}
        />
        <div className="flex items-center justify-end">
          <p>Already Registered? <Link to='/login' className="text-red-600">Login</Link></p>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </form>
      <ToastContainer />
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default Register;
