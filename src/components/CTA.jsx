import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="2" className="text-white" fill="currentColor" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Admissions are open for the academic year 2024. Secure your spot in one of Nepal's finest educational institutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                        to="/admissions"
                        className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all transform hover:-translate-y-1 shadow-lg"
                    >
                        Apply Online
                    </Link>
                    <Link
                        to="/contact"
                        className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
