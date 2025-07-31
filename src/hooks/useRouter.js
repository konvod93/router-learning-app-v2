import { useState, useEffect } from "react";

// Простая реализация маршрутизации без react-router-dom
export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [params, setParams] = useState({});

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      parseParams(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    parseParams(currentPath);

    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPath]);

  const parseParams = (path) => {
    // Парсинг параметров из URL (например, /users/123)
    const userMatch = path.match(/^\/users\/(\d+)$/);
    if (userMatch) {
      setParams({ id: userMatch[1] });
    } else {
      setParams({});
    }
  };

  const navigate = (path, replace = false) => {
    if (replace) {
      window.history.replaceState({}, '', path);
    } else {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    parseParams(path);
  };

  const goBack = () => {
    window.history.back();
  };

  return { currentPath, params, navigate, goBack };
};


