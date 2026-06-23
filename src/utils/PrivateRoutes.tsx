import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const dataStore = useSelector((state: any) => state);
  return dataStore.tokens.currentToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
