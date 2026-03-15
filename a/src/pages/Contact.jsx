import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about our products or your order? 
            We'd love to hear from you. Reach out anytime.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span className="text-gray-700">support@SnapBasket.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-red-600" />
              <span className="text-gray-700">
              B-12 wave tower 1st floor sector-120, Noida, Uttar Pradesh
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;