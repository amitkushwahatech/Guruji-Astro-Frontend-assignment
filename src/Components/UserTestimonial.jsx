import React,{useState} from 'react'
import "./testimonial.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "../utestmon.json";

// import "./styles.css";
import tr from "../images/trust_banner-2_1.svg";
// import required modules
import { Autoplay, Pagination} from "swiper";
import StarRating from './StarRating';
const UserTestimonial = () => {
  return (
    <div class="testimonial-content">
     <Swiper
     spaceBetween={10}
     centeredSlides={true}
    slidesPerView={3}
     autoplay={{
       delay: 2500,
       disableOnInteraction: false,
     }}
     modules={[Autoplay]}
         className='testimonial-thumbs'
         >
  {/* <div class="swiper-container testimonial-thumbs"> */}
    {/* <div class="swiper-wrapper"> */}
    {data.map((i)=>(
      <SwiperSlide key={i.id}>
      <div class="testimonial-pic">
        <img src={i.avtar} alt={i.avtar}/>
        <div class="shape-bx"></div>
      </div>

    </SwiperSlide>
    ))}
      
      {/* <SwiperSlide>
        <div class="testimonial-pic">
          <img src="https://samar.dexignzone.com/xhtml/images/testimonials/pic1.jpg" alt=""/>
          <div class="shape-bx"></div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-pic">
          <img src="https://samar.dexignzone.com/xhtml/images/testimonials/pic2.jpg" alt=""/>
          <div class="shape-bx"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-pic">
          <img src="https://samar.dexignzone.com/xhtml/images/testimonials/pic3.jpg" alt=""/>
          <div class="shape-bx"></div>
        </div>
      </SwiperSlide> */}

  </Swiper>
  <Swiper  
  spaceBetween={10}
   centeredSlides={true}
   autoplay={{
     delay: 2500,
     disableOnInteraction: false,
   }}
  
   
   modules={[Autoplay]}
   className="testimonial-comment"
 >
  {/* <div class="swiper-container testimonial-comment"> */}
   
    {data.map((i)=> (
    <SwiperSlide>
        <div class="testimonial-text">
        <StarRating value={i.value} className="starR"/>

          <strong class="testimonial-name">{i.name}</strong>
          <span class="testimonial-position text-primary m-b20">{i.status} </span>
          <p>{i.message} </p>
        </div>

      </SwiperSlide>
      ))}
      {/* <SwiperSlide>
        <div class="testimonial-text">
          <strong class="testimonial-name">Cak Dikin 2</strong>
          <span class="testimonial-position text-primary m-b20">CEO &amp; Founder </span>
          <p>Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with </p>
        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-text">
          <h3 class="testimonial-name">Cak Dikin 3</h3>
          <span class="testimonial-position text-primary m-b20">CEO &amp; Founder </span>
          <p>Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with </p>
        </div>

      </SwiperSlide>  */}
   
    {/* <div class="swiper-pagination"></div> */}
  
  </Swiper>
</div>
  )
}











export default UserTestimonial;