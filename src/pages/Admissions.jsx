import React, { useState } from 'react';
import { CheckSquare, FileText, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Admissions = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        program: 'BBA',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Admission Form Submitted:', formData);
        alert('Thank you for your application! We will contact you shortly.');
        setFormData({ fullName: '', email: '', phone: '', program: 'BBA', message: '' });
    };

    return (
        <div className="animate-fade-in pb-12 md:pb-20">
            <SEO title="Admissions" description="Apply online for BBA, BCA, and MBA programs at Lumbini Academic College." />
            <div className="bg-secondary text-white py-12 md:py-16 mb-8 md:mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">Admissions Open 2024</h1>
                    <p className="text-lg md:text-xl text-blue-100">Take the first step towards your future.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Information Side */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <FileText className="w-6 h-6 mr-2 text-secondary" />
                        Admission Process
                    </h2>
                    <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-gray-200">
                        {[
                            { title: 'Online Application', desc: 'Fill out the form on this page with accurate details.' },
                            { title: 'Document Verification', desc: 'Visit the college with your academic transcripts and ID.' },
                            { title: 'Entrance / Interview', desc: 'Appear for a short entrance test or personal interview.' },
                            { title: 'Confirmation', desc: 'Pay the admission fee to secure your seat.' }
                        ].map((step, idx) => (
                            <div key={idx} className="relative pl-12">
                                <div className="absolute left-0 top-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                                    {idx + 1}
                                </div>
                                <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                            <CheckSquare className="w-5 h-5 mr-2 text-primary" />
                            Required Documents
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                            <li>SEE / SLC Marksheet & Character Certificate</li>
                            <li>+2 / Intermediate Transcript & Provisional Certificate</li>
                            <li>Citizenship Copy / Birth Certificate</li>
                            <li>2 Passport Size Photos</li>
                        </ul>
                    </div>
                </div>

                {/* Form Side */}
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Online Application Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="+977 9800000000"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Interested Program</label>
                            <select
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            >
                                <option value="BBA">BBA - Bachelor of Business Administration</option>
                                <option value="BCA">BCA - Bachelor of Computer Application</option>
                                <option value="MBA">MBA - Master of Business Administration</option>
                                <option value="BBS">BBS - Bachelor of Business Studies</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="Any queries?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-secondary-light transition-colors shadow-lg flex justify-center items-center"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
