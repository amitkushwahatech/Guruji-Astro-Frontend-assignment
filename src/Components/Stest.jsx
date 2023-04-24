// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";
import UpImagHead from "./UpImagHead";
import imag from "../images/logo/sun.svg"
import { Flex } from "@chakra-ui/react";
const Stest = ({ slides }) => {
  console.log(slides[1].images);
  return (
    <Flex flexDirection='column' bg="#FFEFE3">
      <UpImagHead heading="User Testimonial" image={imag} />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide>
            <img src={slide.images} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Stest;
