import React, { useState } from 'react';
import { X } from 'lucide-react';
import SEO from '../components/SEO';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1595152452543-e5cca283f547?q=80&w=2070&auto=format&fit=crop', title: 'College Building' },
    { id: 2, src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop', title: 'Library' },
    { id: 3, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop', title: 'Computer Lab' },
    { id: 4, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop', title: 'Student Hall' },
    { id: 5, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop', title: 'Classroom' },
    { id: 6, src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop', title: 'Sports Day' },
    { id: 7, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop', title: 'Tech Fest' },
    { id: 8, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop', title: 'Cultural Program' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="animate-fade-in pb-12 md:pb-20">
            <SEO title="Gallery" description="View photos of our campus, events, and student life." />
            <div className="bg-primary text-white py-12 md:py-16 mb-8 md:mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">Photo Gallery</h1>
                    <p className="text-lg md:text-xl text-gray-200">Glimpses of life at Lumbini Academic College.</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="aspect-square relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{img.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
                    <button
                        className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div className="max-w-5xl w-full max-h-[90vh]">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
                        />
                        <div className="text-center mt-4">
                            <span className="text-white text-xl font-bold">{selectedImage.title}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
