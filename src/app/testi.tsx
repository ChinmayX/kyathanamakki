// components/TestimonialCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Isabelle Laurent",
      title: "Travel Influencer, France",
      quote:
        "A slice of paradise! The private beach, the serene spa, and impeccable service made my stay unforgettable. Will return every year.",
    },
    {
      name: "Rohan Mehta",
      title: "Entrepreneur, India",
      quote:
        "From the sunset dinners to the luxurious villas, every moment here felt like a dream. Absolute world-class hospitality.",
    },
    {
      name: "Sophia Chang",
      title: "Fashion Editor, Singapore",
      quote:
        "This resort redefines luxury. Stunning design, lush surroundings, and an attention to detail that's second to none.",
    },
    {
      name: "James Turner",
      title: "CEO, London",
      quote:
        "The ultimate escape. Peaceful, elegant, and exquisitely curated experiences. It’s my go-to sanctuary now.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Testimoni</h2>
        <p className="text-lg text-gray-500 mb-10">
          Hear from those who’ve experienced our slice of luxury.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-100 p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
                <p className="text-xl italic text-gray-700 mb-6">“{t.quote}”</p>
                <h4 className="text-lg font-semibold text-gray-900">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
