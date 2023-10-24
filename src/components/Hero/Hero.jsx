// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';
import { Pagination, Navigation } from 'swiper/modules';
import homeCarousel1 from "../../assets/images/homeCarousel/1.jpg"
import homeCarousel2 from "../../assets/images/homeCarousel/2.jpg"
import homeCarousel3 from "../../assets/images/homeCarousel/3.jpg"
import homeCarousel4 from "../../assets/images/homeCarousel/4.jpg"
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import { useSwiper } from 'swiper/react';

const Hero = () => {
    const swiper = useSwiper();
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="hero min-h-screen rounded-lg overflow-hidden" style={{ backgroundImage: `url(${homeCarousel1})` }}>
                    <div className="hero-overlay bg-gradient-to-r from-black/60 to-black/0"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <PrimaryButton btnText="Discover More"></PrimaryButton>
                            <SecondaryButton btnText="Latest Project"></SecondaryButton>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide className='res-slide'><img src={homeCarousel2} alt="" /></SwiperSlide>
            <SwiperSlide className='res-slide'><img src={homeCarousel3} alt="" /></SwiperSlide>
            <SwiperSlide className='res-slide'><img src={homeCarousel4} alt="" /></SwiperSlide>
            <div className="swiper-nav-btns absolute bottom-2">
                <button className='btn' onClick={() => swiper.slidePrev()}>Prev</button>
                <button className='btn' onClick={() => swiper.slideNext()}>Next</button>
            </div>
        </Swiper>
    );
};

export default Hero;