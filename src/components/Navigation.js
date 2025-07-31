import { useRouter } from "../hooks/useRouter";
import Link from "./Link";

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

export default Navigation;