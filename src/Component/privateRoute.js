import { Navigate } from "react-router-dom";
export const PrivateRoute = ({children}) => {
const isAuthenticated = window.sessionStorage.getItem("userToken");
    if (isAuthenticated ) {
       return children
    }
  return <Navigate to="/" />;
};