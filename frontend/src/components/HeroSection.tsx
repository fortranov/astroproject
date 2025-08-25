'use client'

import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Основное изображение */}
      <div className="w-full h-[70vh] relative">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url('/astrology.jpg')`
          }}
        >
          {/* Градиентный оверлей для лучшей читаемости */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>
      </div>

      {/* Подпись под картинкой */}
      <div className="relative z-10 text-center py-8 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-star-gold via-yellow-300 to-star-gold bg-clip-text text-transparent mb-4">
          Ваш личный астролог
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Откройте тайны звёзд и познайте древнюю мудрость с современными технологиями. 
          Позвольте небесным светилам направить ваш путь к успеху и гармонии.
        </p>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-star-gold text-6xl opacity-20 animate-pulse">
        ✦
      </div>
      <div className="absolute top-1/3 right-10 text-star-gold text-4xl opacity-30 animate-pulse">
        ★
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-star-gold text-5xl opacity-15 animate-pulse">
        ☽
      </div>
    </section>
  )
}

export default HeroSection
