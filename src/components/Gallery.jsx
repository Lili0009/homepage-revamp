import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../index.css";

import Gallery1 from "../assets/gallery1.jpeg";
import Gallery2 from "../assets/gallery2.jpeg";
import Gallery3 from "../assets/gallery3.jpeg";
import Gallery4 from "../assets/gallery4.jpeg";
import Gallery5 from "../assets/gallery5.jpeg";
import Gallery6 from "../assets/gallery6.jpeg";
import Gallery7 from "../assets/gallery7.jpeg";

export default function Gallery() {
  const images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
  ];

  return (
    <div className="w-full h-full px-4 py-8 bg-cultured shadow-lg space-y-10">
      <h1 className="title">PHOTO GALLERY</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides
        loop
        navigation
        pagination={{ clickable: true }}
        className="w-full h-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden ">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
