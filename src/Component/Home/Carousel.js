// src/components/Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importing Swiper components
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles

// Importing required Swiper modules directly
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Carousel.css'; // Import a custom CSS file for styling

function Carousel() {
  return (
    <div className="carousel-container">
      <h1 className="carousel-text">Welcome to Daryel Hospital Center</h1> {/* Text overlay */}
      <Swiper
        style={{
          "--swiper-pagination-bullet-size": "14px",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          zIndex: 0, // Add this inline
          textAlign: 'center'
        }}
        modules={[Navigation, Pagination, Autoplay]} // Pass the modules here
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide className='item carousel'>
          <img src='https://www.shannonhealth.com/cms/thumbnails/00/830x415//images/locations/Shannon-Hosp-Exterior-with-Tower_New-Sky.jpg' width={"100%"} height={1000}></img>
        </SwiperSlide>
        <SwiperSlide className='item carousel'>
          <img src='https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </SwiperSlide>
        <SwiperSlide className='item carousel'>
          <img src='https://images.unsplash.com/photo-1578307985189-6f84ae0cf2e0?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
