import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-9xl font-bold font-serif text-gray-200">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 -mt-10 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Oops! The page you are looking for seems to have been moved or doesn't exist.
            </p>
            <Link to="/" className="btn-primary">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
