// Компонент ссылки - исправленная версия
const Link = ({ to, children, className = '', activeClassName = '' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // Используем прямое обновление URL и состояния
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // Проверяем активность ссылки
  const isActive = window.location.pathname === to;

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

export default Link