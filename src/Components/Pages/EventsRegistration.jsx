import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../index'
import { toast, ToastContainer } from 'react-toastify'
import eventService from '../../appwrite/EventsReg'
import {Loader} from '../index'

function EventsRegistration() {
    const { register, handleSubmit } = useForm()
    const [isLoading, setLoading] = useState(false);
    
    const handleRegister = async (data) => {
        setLoading(true)
        try {
            const db = await eventService.registerParticipant(data);
            if(db){
                toast.success("Registered Successfully")
            }
            
        }
        catch (error) {
            console.log(error)
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg md:my-4 my-2'>
            <h1 className='font-bold text-xl mb-2 text-center'>Participants Registration</h1>
            <form onSubmit={handleSubmit(handleRegister)} className='space-y-4'>
                <Input
                    label="Student Name: "
                    placeholder="name"
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    {...register("StudentName", { required: true })}
                />
                {/*College Name */}
                <Input
                    label="College Name: "
                    placeholder="College Name"
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    {...register("CollegeName", { required: true })}
                />
                {/*Phone Number */}
                <Input
                    label="Mobile number: "
                    placeholder="Mobile No."
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    {...register("MobileNumber", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/, // Adjust regex as needed for your phone number format
                            message: "Phone number must be 10 digits",
                        },
                    })}
                />
                {/*Stem Id */}
                <Input
                    label="Stem ID :"
                    placeholder="Stem ID"
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    {...register("StemId", { required: true })}
                />

                <button type='submit' className='w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>Register</button>
            </form>
            <ToastContainer />
            <Loader isLoading={isLoading}/>
        </div>
    )
}

export default EventsRegistration