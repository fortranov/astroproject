'use client'

import React, { useState } from 'react'
import { BirthData } from './NatalChartGenerator'

interface NatalChartFormProps {
  onSubmit: (data: BirthData) => void
}

const NatalChartForm: React.FC<NatalChartFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<BirthData>({
    date: '',
    time: '',
    city: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.date) {
      newErrors.date = 'Дата рождения обязательна'
    }

    if (!formData.time) {
      newErrors.time = 'Время рождения обязательно'
    }

    if (!formData.city) {
      newErrors.city = 'Город рождения обязателен'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleInputChange = (field: keyof BirthData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Убираем ошибку при изменении поля
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-star-gold mb-3">
            Создать натальную карту
          </h2>
          <p className="text-gray-300">
            Введите точные данные вашего рождения для максимально точного расчета
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Дата рождения */}
          <div>
            <label htmlFor="date" className="block text-star-gold font-medium mb-2">
              Дата рождения
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-star-gold focus:outline-none transition-colors"
            />
            {errors.date && (
              <p className="text-red-400 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          {/* Время рождения */}
          <div>
            <label htmlFor="time" className="block text-star-gold font-medium mb-2">
              Время рождения
            </label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-star-gold focus:outline-none transition-colors"
            />
            {errors.time && (
              <p className="text-red-400 text-sm mt-1">{errors.time}</p>
            )}
            <p className="text-gray-400 text-sm mt-1">
              Чем точнее время, тем точнее будет ваша натальная карта
            </p>
          </div>

          {/* Город рождения */}
          <div>
            <label htmlFor="city" className="block text-star-gold font-medium mb-2">
              Город рождения
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="Например: Москва, Россия"
              className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-star-gold focus:outline-none transition-colors"
            />
            {errors.city && (
              <p className="text-red-400 text-sm mt-1">{errors.city}</p>
            )}
            <p className="text-gray-400 text-sm mt-1">
              Укажите город или ближайший крупный населенный пункт
            </p>
          </div>

          {/* Кнопка отправки */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-star-gold to-yellow-500 hover:from-yellow-500 hover:to-star-gold text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Создать натальную карту ✨
            </button>
          </div>
        </form>

        {/* Дополнительная информация */}
        <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <h4 className="text-blue-300 font-medium mb-2">💡 Важная информация</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Время должно быть максимально точным (лучше всего по данным из документов)</li>
            <li>• Если точное время неизвестно, используйте приблизительное</li>
            <li>• Город влияет на координаты для расчета домов гороскопа</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NatalChartForm
