import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import SEO from '../components/SEO';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000', title: 'Main Campus', category: 'Campus' },
    { id: 2, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000', title: 'Student Hall', category: 'Campus' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000', title: 'Graduation Day', category: 'Events' },
    { id: 4, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000', title: 'Computer Lab', category: 'Campus' },
    { id: 5, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000', title: 'Classroom Session', category: 'Students' },
    { id: 6, src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000', title: 'Sports Meet', category: 'Events' },
    { id: 7, src: 'https://images.unsplash.com/photo-1595152452543-e5cca283f547?auto=format&fit=crop&q=80&w=1000', title: 'College Building', category: 'Campus' },
    { id: 8, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000', title: 'Cultural Fest', category: 'Events' },
    { id: 9, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000', title: 'Group Study', category: 'Students' },
    { id: 10, src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000', title: 'Library Time', category: 'Students' },
];

const categories = ['All', 'Campus', 'Events', 'Students'];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredImages = activeCategory === 'All'
        ? images
        : images.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

    return (
        <div className="animate-fade-in pb-12 md:pb-20">
            <SEO title="Gallery" description="View photos of our campus, events, and student life." />

            {/* Minimal Header */}
            <div className="bg-gray-50 text-gray-800 py-16 md:py-24 mb-8 md:mb-12 border-b border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block animate-fade-in-up">Life at Lumbini</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up delay-100">Our Gallery</h1>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Explore the vibrant moments that define our campus culture and academic excellence.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:-translate-y-1 ${activeCategory === category
                                ? 'bg-primary text-white shadow-lg ring-2 ring-primary ring-offset-2'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Masonry-style Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {filteredImages.map((img) => (
                        <div
                            key={img.id}
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.category}</span>
                                <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h3>
                            </div>
                            {/* Icon */}
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/40">
                                <ZoomIn className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="max-w-6xl w-full max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full h-full object-contain max-h-[85vh] rounded-xl shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl text-center">
                            <h3 className="text-white text-2xl font-bold font-serif">{selectedImage.title}</h3>
                            <p className="text-gray-300 text-sm mt-1">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
