import { useRouter } from "../../hooks/useRouter";

// Компонент детальной информации о пользователе
const UserDetail = () => {
  const { params } = useRouter();
  const userId = params.id;

  const users = {
    1: {
      name: "Алексей Петров",
      role: "Frontend Developer",
      email: "alexey@example.com",
      projects: 15,
    },
    2: {
      name: "Мария Иванова",
      role: "UI/UX Designer",
      email: "maria@example.com",
      projects: 8,
    },
    3: {
      name: "Дмитрий Сидоров",
      role: "Backend Developer",
      email: "dmitry@example.com",
      projects: 12,
    },
  };

  const user = users[userId];

  const handleNavigation = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const handleGoBack = () => {
    window.history.back();
  };

  if (!user) {
    return (
      <div className="bg-red-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-red-800 mb-4">
          ❌ Пользователь не найден
        </h2>
        <p className="text-gray-700 mb-4">
          Пользователь с ID {userId} не существует.
        </p>
        <button
          onClick={() => handleNavigation("/users")}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          ← Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div className="bg-indigo-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">
        👤 Профиль пользователя
      </h2>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {user.name}
        </h3>

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
            onClick={() => handleNavigation("/users")}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            ← Назад к списку
          </button>
          <button
            onClick={handleGoBack}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            ⬅ История назад
          </button>
          <button
            onClick={() => handleNavigation("/")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            🏠 На главную
          </button>
        </div>
      </div>
    </div>
  );
};

  
export default UserDetail