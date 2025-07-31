import { RouterProvider } from './providers/RouterProvider';
import Router from './components/Router';


// Главный компонент приложения
const App = () => {
  // Инициализируем RouterProvider для управления маршрутизацией
  return (
    <RouterProvider>
      <Router />
    </RouterProvider>
  );
};

export default App;