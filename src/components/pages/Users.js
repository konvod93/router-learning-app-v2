import { useRouter } from "../../hooks/useRouter";

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

export default Users