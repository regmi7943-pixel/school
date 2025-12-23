import React from 'react';
import { Link } from 'react-router-dom';
import { notices } from '../data/notices';
import { Calendar, ArrowRight } from 'lucide-react';

const NoticeBoard = () => {
    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
            <div className="bg-primary p-4 flex justify-between items-center text-white">
                <h3 className="text-xl font-bold font-serif">Notice Board</h3>
                <span className="text-xs bg-secondary px-2 py-1 rounded animate-pulse">Live</span>
            </div>
            <div className="p-0 flex-grow overflow-hidden relative h-[400px]">
                {/* Marquee effect container */}
                <div className="absolute w-full animate-marquee-vertical hover:pause-animation">
                    {[...notices, ...notices].map((notice, index) => (
                        <div key={`${notice.id}-${index}`} className="p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors group">
                            <div className="flex items-center text-xs text-gray-500 mb-1 space-x-2">
                                <Calendar className="w-3 h-3" />
                                <span>{notice.date}</span>
                                {notice.important && <span className="text-red-600 font-bold px-1.5 py-0.5 bg-red-50 rounded text-[10px]">NEW</span>}
                            </div>
                            <Link to={notice.link} className="text-sm font-medium text-gray-800 hover:text-primary group-hover:underline line-clamp-2 leading-relaxed">
                                {notice.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-3 bg-gray-50 border-t border-gray-200 text-center">
                <Link to="/notices" className="text-sm text-primary font-bold hover:text-secondary flex items-center justify-center space-x-1">
                    <span>View All Notices</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default NoticeBoard;
