import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop', // College Building/Students
        title: 'Welcome to Lumbini Academic College',
        subtitle: 'Excellence in Education Since 2010',
        cta: 'Apply Now',
        link: '/admissions'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', // Classroom/Graduation
        title: 'Shaping Future Leaders',
        subtitle: 'Join our BBA, BCA & MBA Programs',
        cta: 'View Programs',
        link: '/academics'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop', // Campus Life
        title: 'State-of-the-Art Facilities',
        subtitle: 'A perfect environment for your growth',
        cta: 'Take a Tour',
        link: '/gallery'
    }
];

const HeroSlider = () => {
    return (
        <div className="h-[500px] md:h-[600px] lg:h-[700px] w-full relative group">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear transform scale-100 animate-slow-zoom"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center">
                                <div className="container mx-auto px-4 md:px-8">
                                    <div className="max-w-xl text-white space-y-6 animate-fade-in-up">
                                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="text-lg md:text-xl md:opacity-90 border-l-4 border-secondary pl-4">
                                            {slide.subtitle}
                                        </p>
                                        <Link
                                            to={slide.link}
                                            className="inline-block bg-secondary hover:bg-white hover:text-secondary text-white px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg mt-4"
                                        >
                                            {slide.cta}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Custom Navigation Buttons (hidden on mobile, visible on hover) */}
                <div className="swiper-button-prev !text-white !hidden md:!flex opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="swiper-button-next !text-white !hidden md:!flex opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Swiper>
        </div>
    );
};

export default HeroSlider;
