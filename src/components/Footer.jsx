import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Logo & About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Lumbini Academic College</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering students with quality education, modern facilities, and a supportive learning environment since 2010.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-secondary border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Academics', 'Admissions', 'Notices', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                                        <span className="w-2 h-0.5 bg-secondary mr-2 group-hover:w-4 transition-all"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-secondary border-b border-gray-700 pb-2 inline-block">Our Programs</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'BBA - Bachelor in Business Admin', link: '/academics?program=bba' },
                                { name: 'BCA - Bachelor in Computer App', link: '/academics?program=bca' },
                                { name: 'MBA - Master in Business Admin', link: '/academics?program=mba' },
                                { name: 'BBS - Bachelor in Business Studies', link: '/academics?program=bbs' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-secondary border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                <span className="text-sm">Kathmandu, Nepal<br />(Near Main Chowk)</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-sm">+977-1-1234567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-sm">info@college.edu.np</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Lumbini Academic College. All rights reserved. | Developed by <span className="text-white">You</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
