import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";
import { Input, Select, Loader } from "./index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appwriteService from "../appwrite/auth";
import { Link } from "react-router-dom";
import '../CSS/ToggleSwitch.css'

function Register() {
  const [error, setError] = useState("");
  const [eventList, setEventList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  // Events List must mention here
  const eventOptions = ["Model Expo", "Sparkore", "Bugged out", "Electrivia", "Evolvance"];

  // Method to handle the register
  const handleRegister = async (data) => {
    // Start a loader
    setLoading(true);
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
    } finally {
      setLoading(false);
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
    <section className="flex flex-col w-full items-center justify-center bg-cover bg-center bg-no-repeat ">
      <div className="w-full max-w-lg bg-gray-900 bg-opacity-50 rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#da4ea2]">Register</h2>

        {error && (
          <div className="bg-red-600 bg-opacity-20 text-red-300 p-4 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Full name must be at least 2 characters"
                }
              })}
              error={errors.fullName?.message}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">College Name</label>
            <Input
              type="text"
              placeholder="Enter your college name"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
              {...register("otherCollegeName", {
                required: "College name is required"
              })}
              error={errors.otherCollegeName?.message}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Select Your Favorite Events</label>
            <div className="grid grid-cols-2 gap-3">
              {eventOptions.map((event, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 text-gray-300 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={event}
                    onChange={handleEventSelection}
                    id={`toggle-${index}`}
                    className="hidden toggle-checkbox"
                  />
                  <div className="toggle-switch">
                    <div className="toggle-dot"></div>
                  </div>
                  <span>{event}</span>
                </label>
              ))}
            </div>
          </div>


          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              error={errors.email?.message}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Select Dish Preference</label>
            <select
              {...register("dish", { required: "Dish selection is required" })}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
            >
              <option value="">Select an option</option>
              <option value="Non-veg">Non-veg</option>
              <option value="Veg">Veg</option>
            </select>
            {errors.dish && <p className="text-red-500 text-sm mt-1">{errors.dish.message}</p>}
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Phone Number</label>
            <Input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
              {...register("mobileNo", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits"
                }
              })}
              error={errors.mobileNo?.message}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <Input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              error={errors.password?.message}
            />
          </div>

          <div className="flex items-center justify-between text-gray-400">
            <p>
              Already Registered? <Link to='/login' className="text-[#da4ea2] hover:underline">Login</Link>
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#da4ea2] text-white font-bold rounded-xl
            hover:bg-purple-700 transition duration-300
            flex items-center justify-center space-x-2
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        <ToastContainer />
      </div>

      <Loader isLoading={isLoading} />
    </section>
  );
}

export default Register;
