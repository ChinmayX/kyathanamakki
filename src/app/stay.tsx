// components/StaySection.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const images = ["/stay_1.jpeg", "/stay_2.jpeg"];

export default function StaySection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-amber-50">
      {/* Left Side */}
      <div className="w-full p-20 md:w-1/2 mb-10 md:mb-0">
        <h2
          className={`text-4xl md:text-5xl font-semibold text-amber-800 mb-4 `}
        >
          <i>STAYS</i>
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Experience unmatched comfort and elegance. Our luxury homestays are
          curated to offer you the finest escape.
        </p>
      </div>

      {/* Right Side - Auto Carousel */}
      <div className="w-full md:w-1/2">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Stay image ${idx + 1}`}
                className="w-full h-[600px] object-cover shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
