import React, { useState, useEffect } from 'react';
import { useRouter } from './hooks/useRouter'

// Компонент ссылки
const Link = ({ to, children, className = '', activeClassName = '' }) => {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to;
  
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a 
      href={to} 
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
    >
      {children}
    </a>
  );
};

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

// Компонент списка пользователей
const Users = () => {
  const { navigate } = useRouter();
  
  const users = [
    { id: 1, name: 'Алексей Петров', role: 'Frontend Developer' },
    { id: 2, name: 'Мария Иванова', role: 'UI/UX Designer' },
    { id: 3, name: 'Дмитрий Сидоров', role: 'Backend Developer' }
  ];

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className="bg-purple-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">👥 Пользователи</h2>
      <p className="text-gray-700 mb-4">
        Список пользователей с динамическими ссылками. Кликните на любого пользователя для просмотра деталей.
      </p>
      <div className="grid gap-3">
        {users.map(user => (
          <div
            key={user.id}
            onClick={() => handleUserClick(user.id)}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-purple-400 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.role}</p>
              </div>
              <span className="text-purple-600">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Компонент детальной информации о пользователе
const UserDetail = () => {
  const { params, navigate, goBack } = useRouter();
  const userId = params.id;
  
  const users = {
    '1': { name: 'Алексей Петров', role: 'Frontend Developer', email: 'alexey@example.com', projects: 15 },
    '2': { name: 'Мария Иванова', role: 'UI/UX Designer', email: 'maria@example.com', projects: 8 },
    '3': { name: 'Дмитрий Сидоров', role: 'Backend Developer', email: 'dmitry@example.com', projects: 12 }
  };

  const user = users[userId];

  if (!user) {
    return (
      <div className="bg-red-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-red-800 mb-4">❌ Пользователь не найден</h2>
        <p className="text-gray-700 mb-4">
          Пользователь с ID {userId} не существует.
        </p>
        <button
          onClick={() => navigate('/users')}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          ← Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div className="bg-indigo-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">👤 Профиль пользователя</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{user.name}</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Должность:</p>
            <p className="font-medium">{user.role}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Email:</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">ID пользователя:</p>
            <p className="font-medium">#{userId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Проектов:</p>
            <p className="font-medium">{user.projects}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate('/users')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            ← Назад к списку
          </button>
          <button
            onClick={goBack}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            ⬅ История назад
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            🏠 На главную
          </button>
        </div>
      </div>
    </div>
  );
};

// Компонент контактов с программной навигацией
const Contact = () => {
  const { navigate, currentPath } = useRouter();
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      alert('Сообщение отправлено! Перенаправляем на главную...');
      navigate('/');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-orange-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">📞 Контакты</h2>
      
      <div className="bg-white p-6 rounded-lg shadow mb-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ваше имя:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Введите ваше имя"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Сообщение:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Введите ваше сообщение"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.message}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Отправить сообщение
          </button>
        </div>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">🔧 Информация о маршруте:</h3>
        <p className="text-sm text-blue-700">
          <strong>Текущий путь:</strong> {currentPath}
        </p>
        <p className="text-sm text-blue-700">
          <strong>Search параметры:</strong> {window.location.search || 'отсутствуют'}
        </p>
      </div>
    </div>
  );
};

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