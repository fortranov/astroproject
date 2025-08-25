import Navigation from '@/components/Navigation'
import NatalChartGenerator from '@/components/NatalChartGenerator'

export const metadata = {
  title: 'Натальная карта - NeoAstrology',
  description: 'Создайте персональную натальную карту онлайн. Введите дату рождения, время и место для получения детального астрологического анализа.',
}

export default function NatalChartPage() {
  return (
    <div className="starry-bg min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок страницы */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-star-gold via-yellow-300 to-star-gold bg-clip-text text-transparent mb-4">
              Натальная карта
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Откройте тайны своей судьбы через анализ звёздного неба в момент вашего рождения. 
              Натальная карта раскроет ваши сильные стороны, таланты и жизненный путь.
            </p>
          </div>

          {/* Генератор натальной карты */}
          <NatalChartGenerator />
        </div>
      </main>
    </div>
  )
}
