// Компонент страницы "О нас"
const About = () => {
  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-green-800 mb-4">ℹ️ О нас</h2>
      <p className="text-gray-700 mb-4">
        Эта страница демонстрирует базовую навигацию без использования react-router-dom.
      </p>
      <div className="bg-white p-4 rounded border-l-4 border-green-400">
        <h3 className="font-semibold text-green-700">Что такое маршрутизация?</h3>
        <p className="text-sm text-gray-600 mt-2">
          Маршрутизация позволяет создавать Single Page Applications (SPA) с множественными 
          "страницами" без перезагрузки браузера, используя History API.
        </p>
      </div>
    </div>
  );
};

export default About