import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react';
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
        <div className="animate-fade-in min-h-screen bg-gray-50 flex flex-col justify-center relative">
            <SEO title="Contact Us" description="Get in touch with us for inquiries about admissions, programs, or general questions." />

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-full -z-0"></div>

            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block animate-fade-in-up">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 animate-fade-in-up delay-100">We'd love to hear from you</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Whether you have a question about admissions, need assistance, or just want to talk, we are here for you.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                    {/* Left Column: Contact Info & Map */}
                    <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-left delay-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: MapPin, title: 'Visit Us', desc: 'Kumari Galli, Kathmandu', sub: 'Nepal 44600', color: 'bg-blue-100 text-primary' },
                                { icon: Mail, title: 'Email Us', desc: 'info@lumbinicollege.edu.np', sub: 'admissions@lumbinicollege.edu.np', color: 'bg-red-100 text-secondary' },
                                { icon: Phone, title: 'Call Us', desc: '+977-1-4XXXXXX', sub: '+977-98XXXXXXXX', color: 'bg-green-100 text-green-700' },
                                { icon: Clock, title: 'Opening Hours', desc: 'Sun - Fri: 6:00 AM - 4:00 PM', sub: 'Saturday: Closed', color: 'bg-purple-100 text-purple-700' },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                                    <p className="text-gray-500 text-xs">{item.sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Map */}
                        <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625951266!2d85.3261328!3d27.7089603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1703328000000!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0%) contrast(1.1)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <a
                                href="https://goo.gl/maps/example"
                                target="_blank"
                                rel="noreferrer"
                                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center"
                            >
                                <Globe className="w-4 h-4 mr-2" />
                                View Larger Map
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Floating Form */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-28 animate-fade-in-right delay-300">
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-16 -mt-16"></div>

                            <h2 className="text-2xl font-bold font-serif text-gray-800 mb-8 relative z-10">
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="Admission Enquiry"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex justify-center items-center group"
                                >
                                    <Send className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
