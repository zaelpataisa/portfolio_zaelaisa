// CarrouselProjects.tsx

import { useState } from 'react';
import IconSelect from './Icons';

interface CarrouselProps {
    projects_images: string[];
}

const CarrouselProjects = ({ projects_images }: CarrouselProps) => {
    const totalSlides = projects_images.length;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    
    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="relative flex justify-center items-center w-full h-auto max-w-2xl mx-auto overflow-hidden rounded-lg shadow-xl border-2 border-[var(--colors-06)]">
            <div 
                className="flex h-full transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
            >
                {projects_images.map((imagePath, index) => (
                    <div key={index} className="w-full h-full flex justify-center items-center flex-shrink-0">
                        <img
                            src={imagePath}
                            alt={`Slide ${index + 1}`}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                ))}
            </div>

						{totalSlides > 1 && (
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
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {projects_images.map((_, index) => (
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

export default CarrouselProjects;