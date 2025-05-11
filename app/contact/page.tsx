"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {

    const [message, setMessage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value
            }),
        });
        if (res.ok) {
            setMessage('Form submitted!');
        }
    };

    return (
        <>
            <Navbar />
            <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 w-full p-10 md:p-20">
                        <form onSubmit={handleSubmit}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name      
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full p-2 border border-gray-300 rounded mb-4 focus:border-gray-500"
                                name="name"
                                required
                            />
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email      
                            </label>
                            <input
                                type="text"
                                placeholder="abc@gmail.com"
                                className="w-full p-2 border border-gray-300 rounded mb-4 focus:border-gray-500"
                                name="email"
                                required
                            />
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                placeholder="Type your message here..."
                                className="w-full p-2 border border-gray-300 rounded mb-4 focus:border-gray-500"
                                name="message"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition duration-300"
                            >  
                                Submit 
                            </button>
                        </form>
                    </div>
                    <div className="w-px bg-gray-300 h-0 md:h-100"></div>
                    <div  className="md:w-1/2 w-full p-10 md:p-20">
                        <h1 className="text-2xl font-bold mb-4">
                            Contact Us
                        </h1>
                        <p>
                            Have a question or just want to say hi?
                        </p>
                        <p className="text-md mb-8">
                            We’re here to help—fill out the form below, and our team will get back to you as soon as possible.
                        </p>
                        <div className="flex flex-col space-y-4 mb-8">
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <span className="ml-2">+1 (123) 456-7890</span>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                                <span className="ml-2">abc@gmail.com</span>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className="ml-2">123 Main St, City, Country</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />    
        </>
    )
}

export default ContactUs;