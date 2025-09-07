"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Border Link handled our import clearance in record time. Highly recommend!",
    name: "Ahmed K.",
    role: "Logistics Manager",
  },
  {
    quote: "Professional and reliable service every time.",
    name: "Sarah M.",
    role: "Export Coordinator",
  },
  {
    quote: "Their team made our customs process smooth and stress-free.",
    name: "Mohammed R.",
    role: "Business Owner",
  },
  {
    quote: "Excellent support and fast documentation handling!",
    name: "Fatima S.",
    role: "Operations Head",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-card text-foreground">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="custom-swiper pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex">
              <div className="testimonial-card bg-background p-6 rounded-xl shadow-md border border-border h-full flex flex-col">
                <p className="testimonial-quote text-muted italic mb-6">
                  “{t.quote}”
                </p>
                <div className="mt-auto">
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container */}
        <div className="custom-swiper-pagination-wrap flex justify-center mt-6">
          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
}
