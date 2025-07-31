// Компонент главной страницы
const Home = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">🏠 Главная страница</h2>
      <p className="text-gray-700 mb-4">
        Добро пожаловать в демо маршрутизации! Это главная страница нашего приложения.
      </p>
      <div className="space-y-2">
        <p>✨ Основные возможности навигации:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Переходы между страницами</li>
          <li>Динамические маршруты</li>
          <li>Программная навигация</li>
          <li>История браузера</li>
        </ul>
      </div>
    </div>
  );
};

export default Home