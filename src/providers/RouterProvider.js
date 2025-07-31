import { createContext, useState, useEffect } from "react";

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [params, setParams] = useState({});

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      parseParams(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    parseParams(window.location.pathname);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const parseParams = (path) => {
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

  const goBack = () => window.history.back();

  return (
    <RouterContext.Provider value={{ currentPath, params, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
};