import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Academics = () => {
    const [searchParams] = useSearchParams();
    const highlightProgram = searchParams.get('program');

    return (
        <div className="animate-fade-in pb-20">
            <SEO title="Academics" description="Explore our undergraduate and graduate programs including BBA, BCA, and MBA." />
            <div className="bg-primary text-white py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-serif mb-4">Academic Programs</h1>
                    <p className="text-xl text-gray-200">Preparing you for a successful career with industry-relevant curriculum.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 space-y-16">
                {courses.map((course, index) => (
                    <div
                        key={course.id}
                        id={course.slug}
                        className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} ${highlightProgram === course.slug ? 'ring-2 ring-secondary p-4 rounded-xl bg-gray-50' : ''}`}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="rounded-lg shadow-lg w-full h-80 object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <span className="text-secondary font-bold tracking-widest uppercase">{course.duration} Program</span>
                            <h2 className="text-3xl font-bold font-serif text-gray-800">{course.fullTitle} ({course.title})</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">{course.description}</p>

                            <div className="border-t border-gray-200 pt-4 mt-4">
                                <h4 className="font-bold text-gray-800 mb-3">Key Highlights:</h4>
                                <ul className="space-y-2">
                                    {['Industry Internships', 'Expert Faculty', 'Project-Based Learning', 'Career Placement Support'].map((item) => (
                                        <li key={item} className="flex items-center text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Academics;
