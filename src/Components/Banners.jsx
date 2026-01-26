import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroFashion from '../assets/images/hero-fashion.png';
import heroWinter from '../assets/images/hero-winter-sale.jpg';
import heroTech from '../assets/images/hero-tech.png';

const Banners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: heroFashion,
            title: "New Arrivals Collection",
            subtitle: "New Season",
            desc: "Discover the latest trends in fashion and electronics. Upgrade your style today with our premium selection.",
            btnText: "Shop Now",
            color: "bg-accent",
            link: "/products"
        },
        {
            image: heroWinter,
            title: "Winter Sale",
            subtitle: "Limited Time",
            desc: "Get up to 50% off on selected items. Don't miss out on these exclusive deals.",
            btnText: "View Deals",
            color: "bg-red-500",
            link: "/products"
        },
        {
            image: heroTech,
            title: "Next Gen Technology",
            subtitle: "Latest Tech",
            desc: "Experience the future with our latest electronic gadgets involved in smart living.",
            btnText: "Explore Tech",
            color: "bg-blue-500",
            link: "/products"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);


  return (
    <>
      <header id="hero-carousel" className="relative main-carousel h-[500px] md:h-[600px] overflow-hidden group">
                {/* Slides Container */}
                <div id="carousel-slides" className="relative w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out z-10 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img src={slide.image} className="absolute inset-0 w-full h-full object-cover object-top" alt={slide.title} />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                                <div className="container mx-auto px-4 md:px-12">
                                    <div className={`max-w-lg text-white ${index === currentSlide ? 'animate-fade-in-up' : ''}`}>
                                        <span className={`inline-block py-1 px-3 text-white text-sm font-bold rounded mb-4 ${slide.color}`}>
                                            {slide.subtitle}
                                        </span>
                                        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{slide.title}</h2>
                                        <p className="text-lg md:text-xl text-gray-200 mb-8">{slide.desc}</p>
                                        <Link to={slide.link} className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/50">
                                            {slide.btnText} <i className="fas fa-arrow-right ml-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none z-20">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none z-20">
                    <i className="fas fa-chevron-right"></i>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`carousel-indicator w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
                        ></button>
                    ))}
                </div>
            </header>
      
    </>
  )
}

export default Banners
