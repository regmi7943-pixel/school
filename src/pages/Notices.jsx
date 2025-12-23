import React from 'react';
import { notices } from '../data/notices';
import { Calendar, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const Notices = () => {
    return (
        <div className="animate-fade-in pb-12 md:pb-20">
            <SEO title="Notices" description="Stay updated with the latest news, exam schedules, and events." />
            <div className="bg-primary text-white py-12 md:py-16 mb-8 md:mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">Notice Board</h1>
                    <p className="text-lg md:text-xl text-gray-200">Stay updated with the latest news and announcements.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    {notices.map((notice, index) => (
                        <div key={notice.id} className={`p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors group ${index === notices.length - 1 ? 'border-b-0' : ''}`}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-start md:items-center space-x-4">
                                    <div className={`p-3 rounded-full flex-shrink-0 ${notice.important ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">{notice.title}</h3>
                                        <div className="flex items-center text-sm text-gray-500 mt-1 space-x-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{notice.date}</span>
                                            {notice.important && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">URGENT</span>}
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="inline-block text-secondary font-bold text-sm hover:underline md:text-right">Download PDF</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notices;
