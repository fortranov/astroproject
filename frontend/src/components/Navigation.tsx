'use client'

import React from 'react'

const Navigation = () => {
  return (
    <nav className="relative z-10 w-full bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-star-gold to-yellow-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              NeoAstrology
            </a>
          </div>

          {/* Навигационное меню */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="nav-link text-white hover:text-star-gold px-3 py-2 text-sm font-medium">
                Главная
              </a>
              <a href="#" className="nav-link text-white hover:text-star-gold px-3 py-2 text-sm font-medium">
                Гороскопы
              </a>
              <a href="/natal-chart" className="nav-link text-white hover:text-star-gold px-3 py-2 text-sm font-medium">
                Натальная карта
              </a>
              <a href="#" className="nav-link text-white hover:text-star-gold px-3 py-2 text-sm font-medium">
                Консультации
              </a>
              <a href="#" className="nav-link text-white hover:text-star-gold px-3 py-2 text-sm font-medium">
                О нас
              </a>
            </div>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <button className="text-white hover:text-star-gold p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

