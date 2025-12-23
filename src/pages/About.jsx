import React from 'react';
import { Target, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="animate-fade-in">
            <SEO title="About Us" description="Learn about Lumbini Academic College, our history, vision, mission, and leadership." />
            {/* Header */}
            <div className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548101307-b2f3497c3855?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">Discover our story, mission, and the values that drive us towards excellence.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1595152452543-e5cca283f547?q=80&w=2070&auto=format&fit=crop"
                            alt="College Campus"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-serif text-primary mb-6">A Legacy of Educational Excellence</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Founded in 2010, Lumbini Academic College has established itself as a premier institution for higher education in Nepal. We are dedicated to nurturing students not just academically, but socially and ethically as well.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our campus is located in a serene environment, providing the perfect atmosphere for learning. With state-of-the-art laboratories, a well-stocked library, and modern classrooms, we ensure our students have access to the best resources.
                        </p>
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <Eye className="w-8 h-8 text-secondary mr-3" />
                            <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To be a globally recognized center of excellence in education, fostering innovation, leadership, and ethical values in students to contribute to national and international development.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <Target className="w-8 h-8 text-primary mr-3" />
                            <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To provide affordable, high-quality education through student-centered learning approaches, research opportunities, and industry partnerships, empowering graduates to succeed in a dynamic world.
                        </p>
                    </div>
                </div>

                {/* Chairman's Message */}
                <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">Message from the Principal</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                                alt="Principal"
                                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
                                "Education is not just about acquiring knowledge; it's about building character and skills that last a lifetime. At Lumbini Academic College, we strive to ignite the curiosity within every student and guide them towards their full potential."
                            </blockquote>
                            <cite className="font-bold text-primary text-lg not-italic block">Dr. Rakesh Sharma</cite>
                            <span className="text-secondary text-sm font-bold uppercase tracking-wide">Principal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
