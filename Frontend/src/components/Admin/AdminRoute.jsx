import { Navigate } from "react-router-dom";

const AdminRoute = ({ element }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; 

  return isAdmin ? element : <Navigate to="/" />;
};

export default AdminRoute;
