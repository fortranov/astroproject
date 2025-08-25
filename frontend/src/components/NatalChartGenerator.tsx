'use client'

import React, { useState } from 'react'
import NatalChartForm from './NatalChartForm'
import NatalChartVisualization from './NatalChartVisualization'

export interface BirthData {
  date: string
  time: string
  city: string
  latitude?: number
  longitude?: number
}

export interface PlanetPosition {
  name: string
  sign: string
  degree: number
  house: number
  symbol: string
}

const NatalChartGenerator = () => {
  const [birthData, setBirthData] = useState<BirthData | null>(null)
  const [planetPositions, setPlanetPositions] = useState<PlanetPosition[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateChart = async (data: BirthData) => {
    setIsGenerating(true)
    setBirthData(data)
    
    // Имитация расчета астрологических позиций
    // В реальном приложении здесь был бы вызов API или библиотеки астрологических расчетов
    setTimeout(() => {
      const mockPositions: PlanetPosition[] = [
        { name: 'Солнце', sign: 'Лев', degree: 15.5, house: 7, symbol: '☉' },
        { name: 'Луна', sign: 'Рыбы', degree: 28.3, house: 2, symbol: '☽' },
        { name: 'Меркурий', sign: 'Дева', degree: 7.8, house: 8, symbol: '☿' },
        { name: 'Венера', sign: 'Рак', degree: 22.1, house: 6, symbol: '♀' },
        { name: 'Марс', sign: 'Скорпион', degree: 11.7, house: 10, symbol: '♂' },
        { name: 'Юпитер', sign: 'Стрелец', degree: 3.4, house: 11, symbol: '♃' },
        { name: 'Сатурн', sign: 'Козерог', degree: 19.9, house: 12, symbol: '♄' },
        { name: 'Уран', sign: 'Водолей', degree: 14.2, house: 1, symbol: '♅' },
        { name: 'Нептун', sign: 'Рыбы', degree: 25.6, house: 2, symbol: '♆' },
        { name: 'Плутон', sign: 'Козерог', degree: 9.1, house: 12, symbol: '♇' },
      ]
      
      setPlanetPositions(mockPositions)
      setIsGenerating(false)
    }, 2000)
  }

  const handleReset = () => {
    setBirthData(null)
    setPlanetPositions([])
  }

  return (
    <div className="space-y-8">
      {!birthData ? (
        <NatalChartForm onSubmit={handleGenerateChart} />
      ) : (
        <div className="space-y-6">
          {/* Информация о рождении */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-star-gold">
                Данные рождения
              </h3>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
              >
                Новый расчет
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div>
                <span className="text-star-gold">Дата:</span> {birthData.date}
              </div>
              <div>
                <span className="text-star-gold">Время:</span> {birthData.time}
              </div>
              <div>
                <span className="text-star-gold">Место:</span> {birthData.city}
              </div>
            </div>
          </div>

          {/* Генерация или отображение карты */}
          {isGenerating ? (
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-star-gold mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-star-gold mb-2">
                  Рассчитываем вашу натальную карту...
                </h3>
                <p className="text-gray-300">
                  Анализируем положение планет в момент вашего рождения
                </p>
              </div>
            </div>
          ) : planetPositions.length > 0 ? (
            <NatalChartVisualization 
              birthData={birthData}
              planetPositions={planetPositions}
            />
          ) : null}
        </div>
      )}
    </div>
  )
}

export default NatalChartGenerator
