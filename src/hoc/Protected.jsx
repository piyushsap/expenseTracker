// ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import useLocalStorage from '../Utils/hooks/UseLocalStorage';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useLocalStorage('user')

  if (!user?.userId) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
