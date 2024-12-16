import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Loader } from "./index"; 
import appwriteService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Login the user
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
            console.log(err)
            setError(err.message || 'An unexpected error occurred. Please try again.');
            toast.error("Login Failed try again")
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="font-bold text-xl mb-2 text-center">Login</h2>
            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                <Input
                    label="Email"
                    type="email"
                    placeholder="Email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    {...register("email", { required: "Email is required" })}
                    error={errors.email?.message}
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    {...register("password", { required: "Password is required" })}
                    error={errors.password?.message}
                />
                <div className="flex items-center justify-end">
                    <p>New User? <Link to='/register' className="text-red-600">Register</Link></p>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Login
                </button>
            </form>
            <Loader isLoading={isLoading} />
        </div>
    );
}

export default Login;
