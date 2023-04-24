
import React, { useRef, useState ,useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import tr from "../images/trust_banner-2_1.svg";
// import required modules
import { Autoplay, Pagination } from "swiper";
import flashImage from "../flashImage.json";
import Header from "./Header";
export default function Hslide() {
  useEffect(()=>{})
  return (
    <>
      <Swiper
        spaceBetween={30}

        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        // className="mySwiper"
        style={{width:"100%","height":"100%"}}
      >

        {flashImage.map((i)=>(
          <SwiperSlide ><Header/></SwiperSlide>
          // <SwiperSlide ><img src="images/trust_banner-2_1.svg"/></SwiperSlide>
          
        ))}
        {/* <SwiperSlide><img src={tr}/></SwiperSlide>
        <SwiperSlide><img src={tr}/></SwiperSlide>
        <SwiperSlide><img src={tr}/></SwiperSlide>
        <SwiperSlide><img src={tr}/></SwiperSlide> */}
      </Swiper>
    </>
  );
}
