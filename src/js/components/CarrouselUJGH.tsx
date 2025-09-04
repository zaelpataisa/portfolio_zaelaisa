// Carrousel.tsx

import { useState } from 'react';
import IconSelect from './Icons';

interface Slide {
    src: string;
    alt: string;
}

const CarrouselUJGH = () => {
    const carrouselData: { slides: Slide[] } = {
        slides: [
            { src: '/personal_data/ujgh/ujgh_20240221.jpg', alt: 'ujgh_20240221' },
            { src: '/personal_data/ujgh/ujgh_20240406_1.jpg', alt: 'ujgh_20240406_1' },
            { src: '/personal_data/ujgh/ujgh_20240406_2.jpg', alt: 'ujgh_20240406_2' },
            { src: '/personal_data/ujgh/ujgh_20240627_1.jpg', alt: 'ujgh_20240627_1' },
            { src: '/personal_data/ujgh/ujgh_20240627_2.jpg', alt: 'ujgh_20240627_2' },
            { src: '/personal_data/ujgh/ujgh_20241109.jpg', alt: 'ujgh_20241109' },
            { src: '/personal_data/ujgh/ujgh_20250621.jpg', alt: 'ujgh_20250621' }
        ]
    };

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = carrouselData.slides.length;

    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="relative w-full h-[90vh] max-w-2xl mx-auto overflow-hidden rounded-lg shadow-xl">
            {/* Contenedor de las imágenes */}
            <div 
                className="flex h-full transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
            >
                {carrouselData.slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex justify-center items-center flex-shrink-0">
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 p-4">
                <button
                    onClick={goToPrevSlide}
                    className="p-3 bg-[var(--colors-01)] bg-opacity-50 text-[var(--colors-07)] text-2xl rounded-full hover:bg-opacity-80 transition border-4 border-[var(--colors-07)] cursor-pointer"
                >
                    <IconSelect iconCode={'FaAngleLeft'} />
                </button>
                <button
                    onClick={goToNextSlide}
                    className="p-3 bg-[var(--colors-01)] bg-opacity-50 text-[var(--colors-07)] text-2xl rounded-full hover:bg-opacity-80 transition border-4 border-[var(--colors-07)] cursor-pointer"
                >
                    <IconSelect iconCode={'FaAngleRight'} />
                </button>
            </div>

            {/* Indicadores de posición */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carrouselData.slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all border-2 border-[var(--colors-07)] ${
                            index === currentSlideIndex ? 'bg-[var(--colors-01)] scale-125' : 'bg-[var(--colors-02)] cursor-pointer'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarrouselUJGH;