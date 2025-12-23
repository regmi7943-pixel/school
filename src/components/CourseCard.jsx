import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                    {course.title}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{course.fullTitle}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {course.description}
                </p>
                <Link
                    to={`/academics?program=${course.slug}`}
                    className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors"
                >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
