import { useState } from 'react';
import { useRouter } from './hooks/useRouter';
import Link from './components/Link';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from './components/pages/Users';
import UserDetail from './components/pages/UserDetail';
import Contact from './components/Contact';

// Компонент страницы 404
const NotFound = () => {
  const { navigate, goBack, currentPath } = useRouter();
  
  return (
    <div className="bg-red-50 p-6 rounded-lg text-center">
      <h2 className="text-6xl font-bold text-red-600 mb-4">404</h2>
      <h3 className="text-2xl font-bold text-red-800 mb-4">Страница не найдена</h3>
      <p className="text-gray-700 mb-2">
        К сожалению, страница <code className="bg-gray-200 px-2 py-1 rounded">{currentPath}</code> не существует.
      </p>
      <p className="text-gray-600 mb-6 text-sm">
        Возможно, вы перешли по неверной ссылке или страница была перемещена.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          🏠 На главную
        </button>
        <button
          onClick={goBack}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          ← Назад
        </button>
      </div>
    </div>
  );
};

// Главный компонент навигации
const Navigation = () => {
  const { currentPath } = useRouter();
  
  const isActive = (path) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: '/', label: 'Главная', icon: '🏠' },
    { path: '/about', label: 'О нас', icon: 'ℹ️' },
    { path: '/users', label: 'Пользователи', icon: '👥' },
    { path: '/contact', label: 'Контакты', icon: '📞' }
  ];

  return (
    <nav className="bg-white shadow-lg mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            onClick={() => window.location.href = '/'}
            className="text-xl font-bold text-blue-800 cursor-pointer"
          >
            🚀 Router Demo (Custom)
          </div>
          
          <div className="flex space-x-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg transition-colors text-blue-600 hover:bg-blue-50"
                activeClassName="bg-blue-600 text-white hover:bg-blue-700"
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

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

// Главный компонент приложения
const App = () => {
  return <Router />;
};

export default App;