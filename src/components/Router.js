import { useRouter } from '../hooks/useRouter';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Contact from './Contact';
import NotFound from './pages/NotFound';
import Navigation from './Navigation';

// Основной роутер компонент
const Router = () => {
  const { currentPath } = useRouter();

  const renderPage = () => {
    if (currentPath === '/') return <Home />;
    if (currentPath === '/about') return <About />;
    if (currentPath === '/users') return <Users />;
    if (currentPath.startsWith('/users/')) return <UserDetail />;
    if (currentPath === '/contact') return <Contact />;
    return <NotFound />;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 pb-8">
        {renderPage()}
      </div>

      {/* Информационная панель */}
      <div className="bg-gray-800 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-semibold mb-3">📚 Что мы изучили:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-300">Основы маршрутизации:</h4>
              <ul className="mt-1 space-y-1 text-gray-300">
                <li>• History API</li>
                <li>• Программная навигация</li>
                <li>• Обработка событий</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-300">Продвинутые возможности:</h4>
              <ul className="mt-1 space-y-1 text-gray-300">
                <li>• Динамические параметры</li>
                <li>• Состояние навигации</li>
                <li>• Обработка 404</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-300">Custom хуки:</h4>
              <ul className="mt-1 space-y-1 text-gray-300">
                <li>• useRouter</li>
                <li>• Парсинг параметров</li>
                <li>• История браузера</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <p className="text-sm text-yellow-300">
              💡 <strong>Примечание:</strong> Это упрощенная реализация маршрутизации для демонстрации принципов. 
              В реальных проектах рекомендуется использовать React Router для полной функциональности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Router;