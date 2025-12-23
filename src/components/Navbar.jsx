import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { navLinks } from '../data/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-primary/90 backdrop-blur-sm py-4'} text-white`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo area */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="bg-white p-2 rounded-full group-hover:scale-105 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif text-xl md:text-2xl font-bold leading-tight tracking-wide">Lumbini Academic</span>
                        <span className="text-xs md:text-sm text-gray-300 font-light tracking-widest uppercase">College</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.dropdown ? (
                                <button className="flex items-center space-x-1 hover:text-secondary-light transition-colors font-medium py-2">
                                    <span>{link.name}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`font-medium hover:text-secondary-light transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary-light after:transition-all after:duration-300 hover:after:w-full ${location.pathname === link.path ? 'text-secondary-light after:w-full' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* Dropdown */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 w-48 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {link.dropdown.map((dropItem) => (
                                        <Link
                                            key={dropItem.name}
                                            to={dropItem.path}
                                            className="block px-4 py-3 hover:bg-gray-50 border-b last:border-0 border-gray-100 transition-colors text-sm font-medium hover:text-primary"
                                        >
                                            {dropItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/admissions" className="bg-secondary hover:bg-secondary-light px-5 py-2 rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-md">
                        Apply Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-primary shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col py-4 px-4 space-y-2">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.dropdown ? (
                                <div className="space-y-1">
                                    <div className="font-medium text-lg py-2 border-b border-white/10">{link.name}</div>
                                    <div className="pl-4 space-y-2 mt-2">
                                        {link.dropdown.map((dropItem) => (
                                            <Link
                                                key={dropItem.name}
                                                to={dropItem.path}
                                                className="block text-gray-300 hover:text-white py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {dropItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`block text-lg font-medium py-2 border-b border-white/10 hover:text-secondary-light ${location.pathname === link.path ? 'text-secondary-light' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link to="/admissions" onClick={() => setIsOpen(false)} className="block text-center bg-secondary hover:bg-secondary-light py-3 rounded-md font-bold mt-4 shadow-md">
                        Apply Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
