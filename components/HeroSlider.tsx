"use client";

import { useEffect, useState } from "react";

const slides = ["/slide-1.jpg", "/slide-2.jpg", "/slide-3.jpg"];

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(40, 24, 14, 0.86), rgba(40, 24, 14, 0.48), rgba(40, 24, 14, 0.22)), url('/hero-mariscos.png')",
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(40, 24, 14, 0.84), rgba(40, 24, 14, 0.5), rgba(40, 24, 14, 0.28)), url('${slide}')`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(245,176,65,0.24),transparent_34rem)]" />

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide
                ? "w-9 bg-gold"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
