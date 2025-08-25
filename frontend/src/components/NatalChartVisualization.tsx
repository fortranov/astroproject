'use client'

import React from 'react'
import { BirthData, PlanetPosition } from './NatalChartGenerator'

interface NatalChartVisualizationProps {
  birthData: BirthData
  planetPositions: PlanetPosition[]
}

const zodiacSigns = [
  { name: 'Овен', symbol: '♈', color: '#FF6B6B' },
  { name: 'Телец', symbol: '♉', color: '#4ECDC4' },
  { name: 'Близнецы', symbol: '♊', color: '#45B7D1' },
  { name: 'Рак', symbol: '♋', color: '#96CEB4' },
  { name: 'Лев', symbol: '♌', color: '#FFEAA7' },
  { name: 'Дева', symbol: '♍', color: '#DDA0DD' },
  { name: 'Весы', symbol: '♎', color: '#98D8C8' },
  { name: 'Скорпион', symbol: '♏', color: '#FF7675' },
  { name: 'Стрелец', symbol: '♐', color: '#74B9FF' },
  { name: 'Козерог', symbol: '♑', color: '#81ECEC' },
  { name: 'Водолей', symbol: '♒', color: '#A29BFE' },
  { name: 'Рыбы', symbol: '♓', color: '#FD79A8' }
]

const NatalChartVisualization: React.FC<NatalChartVisualizationProps> = ({ 
  birthData, 
  planetPositions 
}) => {
  // Функция для расчета позиции планеты на круге
  const getPlanetPosition = (degree: number, radius: number) => {
    const angle = (degree - 90) * (Math.PI / 180) // -90 чтобы начать с 12 часов
    const x = 200 + radius * Math.cos(angle)
    const y = 200 + radius * Math.sin(angle)
    return { x, y }
  }

  return (
    <div className="space-y-8">
      {/* Натальная карта - круг */}
      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-star-gold text-center mb-6">
          Ваша натальная карта
        </h3>
        
        <div className="flex justify-center">
          <svg width="400" height="400" viewBox="0 0 400 400" className="bg-black/50 rounded-full">
            {/* Внешний круг - знаки зодиака */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#FFD700"
              strokeWidth="2"
            />
            
            {/* Средний круг - дома */}
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="#B8860B"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            
            {/* Внутренний круг */}
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="#4A4A4A"
              strokeWidth="1"
            />

            {/* Разделители для знаков зодиака */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 30) * (Math.PI / 180)
              const x1 = 200 + 150 * Math.cos(angle)
              const y1 = 200 + 150 * Math.sin(angle)
              const x2 = 200 + 180 * Math.cos(angle)
              const y2 = 200 + 180 * Math.sin(angle)
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#FFD700"
                  strokeWidth="1"
                />
              )
            })}

            {/* Знаки зодиака */}
            {zodiacSigns.map((sign, index) => {
              const angle = (index * 30 + 15) * (Math.PI / 180) // +15 для центрирования
              const x = 200 + 165 * Math.cos(angle)
              const y = 200 + 165 * Math.sin(angle)
              
              return (
                <text
                  key={sign.name}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={sign.color}
                  fontSize="20"
                  fontWeight="bold"
                >
                  {sign.symbol}
                </text>
              )
            })}

            {/* Планеты */}
            {planetPositions.map((planet, index) => {
              const signIndex = zodiacSigns.findIndex(s => s.name === planet.sign)
              const signStartDegree = signIndex * 30
              const totalDegree = signStartDegree + planet.degree
              const position = getPlanetPosition(totalDegree, 135)
              
              return (
                <g key={planet.name}>
                  {/* Планета */}
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="8"
                    fill="#000"
                    stroke="#FFD700"
                    strokeWidth="2"
                  />
                  <text
                    x={position.x}
                    y={position.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#FFD700"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {planet.symbol}
                  </text>
                </g>
              )
            })}

            {/* Центральный текст */}
            <text
              x="200"
              y="195"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFD700"
              fontSize="14"
              fontWeight="bold"
            >
              Натальная
            </text>
            <text
              x="200"
              y="210"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFD700"
              fontSize="14"
              fontWeight="bold"
            >
              карта
            </text>
          </svg>
        </div>
      </div>

      {/* Таблица позиций планет */}
      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-star-gold mb-4">
          Позиции планет
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-gray-300">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-2 text-star-gold">Планета</th>
                <th className="text-left py-2 text-star-gold">Знак</th>
                <th className="text-left py-2 text-star-gold">Градус</th>
                <th className="text-left py-2 text-star-gold">Дом</th>
              </tr>
            </thead>
            <tbody>
              {planetPositions.map((planet) => (
                <tr key={planet.name} className="border-b border-white/10">
                  <td className="py-3">
                    <span className="text-lg mr-2">{planet.symbol}</span>
                    {planet.name}
                  </td>
                  <td className="py-3">{planet.sign}</td>
                  <td className="py-3">{planet.degree.toFixed(1)}°</td>
                  <td className="py-3">{planet.house}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Краткая интерпретация */}
      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-star-gold mb-4">
          Краткая интерпретация
        </h3>
        
        <div className="space-y-4 text-gray-300">
          {planetPositions.slice(0, 3).map((planet) => (
            <div key={planet.name} className="p-4 bg-black/40 rounded-lg">
              <h4 className="text-star-gold font-medium mb-2">
                {planet.symbol} {planet.name} в {planet.sign}
              </h4>
              <p className="text-sm">
                {planet.name === 'Солнце' && 'Ваша основная энергия и жизненная сила проявляется через качества знака ' + planet.sign + '. Это ваша суть и то, как вы светите в мире.'}
                {planet.name === 'Луна' && 'Ваш эмоциональный мир и подсознание окрашены энергией знака ' + planet.sign + '. Это влияет на ваши потребности и реакции.'}
                {planet.name === 'Меркурий' && 'Ваш стиль мышления и общения характеризуется качествами знака ' + planet.sign + '. Это влияет на то, как вы обрабатываете информацию.'}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-star-gold/20 to-yellow-500/20 rounded-lg border border-star-gold/30">
          <p className="text-star-gold font-medium text-center">
            ✨ Это базовая интерпретация. Для полного анализа рекомендуем консультацию с астрологом ✨
          </p>
        </div>
      </div>
    </div>
  )
}

export default NatalChartVisualization
