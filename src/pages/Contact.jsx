import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form Submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="animate-fade-in pb-12 md:pb-20">
            <SEO title="Contact Us" description="Get in touch with us for inquiries about admissions, programs, or general questions." />
            <div className="bg-primary text-white py-12 md:py-16 mb-8 md:mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl text-gray-200">We'd love to hear from you. Get in touch with us.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-50 p-3 rounded-full text-secondary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Our Location</h4>
                                    <p className="text-gray-600">Kumari Galli, Kathmandu 44600, Nepal</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-50 p-3 rounded-full text-secondary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Phone Number</h4>
                                    <p className="text-gray-600">+977-1-4XXXXXX, +977-98XXXXXXXX</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-50 p-3 rounded-full text-secondary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Email Address</h4>
                                    <p className="text-gray-600">info@lumbinicollege.edu.np</p>
                                    <p className="text-gray-600">admissions@lumbinicollege.edu.np</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625951266!2d85.3261328!3d27.7089603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1703328000000!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-secondary-light transition-colors shadow-lg flex justify-center items-center"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
