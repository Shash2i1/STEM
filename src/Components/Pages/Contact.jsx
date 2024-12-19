import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-transparent text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da4ea2]"
                  rows="4"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-[#da4ea2] text-white font-bold rounded-lg hover:bg-purple-700 transition duration-300"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-2">
              <strong>Address:</strong> Anjuman Institute of Technology and Management, Bhatkal - 581320
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Phone:</strong> +91 8123452286
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> aitm@anjuman.edu.in
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Website:</strong> <a href="https://www.aitm.edu" className="text-[#da4ea2] hover:underline">www.aitm.edu</a>
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.347518850944!2d74.55496637491213!3d13.997396586420562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc43cbcb19531b%3A0x6181fa5597aa1e88!2sAnjuman%20Institute%20of%20Technology%20and%20Management%20(AITM)!5e0!3m2!1sen!2sin!4v1734579772490!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
