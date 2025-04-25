'use client'

import { useState, useEffect, SetStateAction } from 'react'
import { servicesData } from '../lib/data'

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex(prevIndex => (prevIndex + 1) % servicesData.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + servicesData.length) % servicesData.length
    )

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToSlide = (index: SetStateAction<number>) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const service = servicesData[currentIndex]

  return (
    <div className="relative max-w-4xl w-full">
      <div className="card overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 h-[250px] md:h-[300px] relative overflow-hidden rounded-lg">
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-500 ${
                isAnimating ? 'scale-105' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url(${service.image || '/placeholder.svg'})`
              }}
              aria-label={service.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-60"></div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {service.title}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              {service.description}
            </p>
            <a href="#contact" className="btn btn-primary self-start mt-auto">
              Solicitar Serviço
            </a>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md text-primary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md text-primary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {servicesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? 'bg-accent w-6'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
