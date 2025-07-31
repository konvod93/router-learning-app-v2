import { useRouter } from "../../hooks/useRouter";

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

export default NotFound;