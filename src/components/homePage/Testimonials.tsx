"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Border Link handled our import clearance in record time. Highly recommend!",
    name: "Ahmed K.",
    role: "Logistics Manager",
  },
  {
    quote: "Professional and reliable service every time. They never let us down.",
    name: "Sarah M.",
    role: "Export Coordinator",
  },
  {
    quote: "Their team made our customs process smooth and completely stress-free.",
    name: "Mohammed R.",
    role: "Business Owner",
  },
  {
    quote: "Excellent support and fast documentation handling. Best in Dubai!",
    name: "Fatima S.",
    role: "Operations Head",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm">
            Trusted by businesses across Dubai and the UAE.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="custom-swiper pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex">
              <motion.div
                className="testimonial-card bg-primary/30 border border-border p-6 rounded-2xl shadow-sm h-full flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true, amount: 0 }}
              >
                {/* Quote icon */}
                <Quote className="w-7 h-7 text-accent/50 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="testimonial-quote text-muted text-sm leading-relaxed flex-1">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-swiper-pagination-wrap flex justify-center mt-4">
          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
}
