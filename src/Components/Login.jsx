import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Loader } from "./index";
import appwriteService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Login the user
    const handleLogin = async (data) => {
        setError("");
        setLoading(true);
        try {
            const session = await appwriteService.login(data);
            if (session) {
                const userData = await appwriteService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                    navigate('/');
                }
            }
        } catch (err) {
            console.log(err);
            setError(err.message || 'An unexpected error occurred. Please try again.');
            toast.error("Login Failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-2xl shadow-2xl w-full">
            <h2 className="font-bold text-4xl mb-6 text-center text-[#da4ea2]">Login</h2>
            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
                        {...register("email", { required: "Email is required" })}
                        error={errors.email?.message}
                    />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Password</label>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
                        {...register("password", { required: "Password is required" })}
                        error={errors.password?.message}
                    />
                </div>
                <div className="flex items-center justify-end text-gray-400">
                    <p>New User? <Link to='/register' className="text-[#da4ea2] hover:underline">Register</Link></p>
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-[#da4ea2] text-white font-bold rounded-xl hover:bg-purple-700 transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            Logging in...
                        </>
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
            <Loader isLoading={isLoading} />
            <ToastContainer />
        </div>
    );
}

export default Login;
