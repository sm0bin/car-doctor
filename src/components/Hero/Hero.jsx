import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import heroCarousel1 from '../../assets/images/homeCarousel/1.jpg';
import heroCarousel2 from '../../assets/images/homeCarousel/2.jpg';
import heroCarousel3 from '../../assets/images/homeCarousel/3.jpg';
import heroCarousel4 from '../../assets/images/homeCarousel/4.jpg';
import PrimaryButton from '../PrimaryButton';

function Hero() {
    const slides = [
        {
            url: heroCarousel1,
        },
        {
            url: heroCarousel2,
        },
        {
            url: heroCarousel3,
        },
        {
            url: heroCarousel4,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='mt-12 mb-32 hero place-items-start max-w-full h-full w-full m-auto relative group rounded-xl bg-top bg-cover duration-500' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
            {/* <div

                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div> */}
            <div className="h-full rounded-xl w-4/5 justify-self-start bg-gradient-to-r from-black to-black/0"></div>
            <div className='m-8 lg:m-28 text-white max-w-md space-y-8'>
                <h1 className='font-bold  text-2xl md:text-6xl  leading-tight'>Affordable Price For Car Servicing</h1>
                <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <PrimaryButton btnText='Discover More' />
                    <button className='btn btn-outline ml-5 border-white hover:border-brandRed-500 font-semibold text-lg text-white  normal-case rounded-md  hover:bg-brandRed-500 hover:text-white'>Latest Project</button>
                </div>
            </div>
            <div className='absolute bottom-12 right-12 flex gap-5'>

                <div className='rounded-full z-50 p-3 bg-black/20 hover:bg-brandRed-500 text-white cursor-pointer'>
                    <HiArrowLeft className='text-base' onClick={prevSlide} size={24} />
                </div>
                <div className='rounded-full z-50 p-3 bg-brandRed-500 hover:bg-brandRed-600 text-white cursor-pointer'>
                    <HiArrowRight className='text-base' onClick={nextSlide} size={24} />
                </div>
            </div>
            <div className='flex justify-center py-2 absolute inset-x-0 bottom-12 text-white/30'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;