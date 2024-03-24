import Client from '../../Contentful';
import React, { useState, useEffect, useCallback } from 'react';
import CarouselSlide from './CarouselSlide';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';

// Initialize Swiper components
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCube]);

const Carousel = () => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);

    const cleanUpCarouselSlides = useCallback((rawData) => {
        const cleanSlides = rawData.map((slide) => {
            const { sys, fields } = slide;
            const { id } = sys;
            const slideTitle = fields.title;
            const slideDescription = fields.description;
            const slideBG = fields.images.fields.file.url;
            const slideBTN = fields.boutton;
            const updatedSlide = { id, slideTitle, slideDescription, slideBG, slideBTN };
            return updatedSlide;
        });
        setCarouselSlides(cleanSlides);
    }, []);

    const getCarouselSlides = useCallback(async () => {
        setIsCarouselLoading(true);
        try {
            const response = await Client.getEntries({ content_type: 'slider' });
            const responseData = response.items;
            console.log(responseData);
            
            if (responseData) {
                cleanUpCarouselSlides(responseData);
            } else {
                setCarouselSlides([]);
            }
            setIsCarouselLoading(false);
        } catch (error) {
            console.log(error);
            setIsCarouselLoading(false);
        }
    }, [cleanUpCarouselSlides]);

    useEffect(() => {
        getCarouselSlides();
    }, [getCarouselSlides]);

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop  // Permet de revenir au premier slide après avoir atteint le dernier
            autoplay={{ delay: 7000 }}  // Active l'autoplay avec un délai de 2000ms entre chaque slide
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            centeredSlides 
            onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
                    >
            {carouselSlides.map((item) => {
                const { id, slideBG, slideBTN, slideDescription, slideTitle } = item;
                return (
                    <SwiperSlide key={id}>
                        <CarouselSlide  
                            slideTitle={slideTitle}
                            slideDescription={slideDescription}
                            slideBG={slideBG}
                            slideBTN={slideBTN}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Carousel;
