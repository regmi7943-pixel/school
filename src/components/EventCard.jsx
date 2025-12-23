import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventCard = ({ event }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
            <div className="md:w-1/3 relative h-48 md:h-auto">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-center p-2 rounded-lg shadow-sm">
                    <div className="text-xs uppercase font-bold text-gray-500">{event.date.split(' ')[0]}</div>
                    <div className="text-2xl font-bold text-primary">{event.date.split(' ')[1].replace(',', '')}</div>
                </div>
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-primary transition-colors">
                        <Link to={`/events/${event.id}`}>{event.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                    <div className="space-y-1 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-secondary" />
                            <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
