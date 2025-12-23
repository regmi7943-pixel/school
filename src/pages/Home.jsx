import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import NoticeBoard from '../components/NoticeBoard';
import CourseCard from '../components/CourseCard';
import EventCard from '../components/EventCard';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import { courses } from '../data/courses';
import { events } from '../data/events';

const Home = () => {
    return (
        <div className="animate-fade-in">
            <SEO title="Home" description="Welcome to Lumbini Academic College, a premier institution for BBA, BCA, and MBA." />
            {/* Hero Section */}
            <section className="mb-12">
                <HeroSlider />
            </section>

            {/* Intro & Notices Grid */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* About Preview */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-3xl font-bold font-serif text-primary border-l-4 border-secondary pl-4">
                            Welcome to Lumbini Academic College
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Established in 2010, Lumbini Academic College has been a pioneer in providing quality education in management and technology. We believe in fostering a learning environment that encourages critical thinking, innovation, and leadership.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our state-of-the-art facilities, experienced faculty, and industry-oriented curriculum ensure that our students are well-prepared for the challenges of the modern world.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                            {[
                                { icon: BookOpen, title: 'Expert Faculty', desc: 'Learn from industry veterans' },
                                { icon: Users, title: 'Student Support', desc: 'Guidance at every step' },
                                { icon: Trophy, title: 'Excellence', desc: 'Proven track record' },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <item.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
                                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center text-primary font-bold hover:text-secondary group transition-colors"
                        >
                            <span>Read More About Us</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Notice Board */}
                    <div className="h-full">
                        <NoticeBoard />
                    </div>
                </div>
            </section>

            {/* Academic Programs */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest text-sm uppercase">Academics</span>
                        <h2 className="text-4xl font-bold font-serif text-primary mt-2">Our Popular Programs</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/academics" className="btn-secondary">View All Programs</Link>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-secondary font-bold tracking-widest text-sm uppercase">Happenings</span>
                        <h2 className="text-4xl font-bold font-serif text-primary mt-2">Latest News & Events</h2>
                    </div>
                    <Link to="/notices" className="text-primary font-bold hover:text-secondary hidden md:block">View All Events</Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {events.slice(0, 4).map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                <div className="text-center mt-8 md:hidden">
                    <Link to="/notices" className="text-primary font-bold hover:text-secondary">View All Events</Link>
                </div>
            </section>

            {/* CTA */}
            <CTA />
        </div>
    );
};

export default Home;
