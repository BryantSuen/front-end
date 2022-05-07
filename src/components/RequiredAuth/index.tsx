import { getJwtPayload } from "../../utils/getJwtPayload";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: any) => {
  const location = useLocation();
  const payload = getJwtPayload();
  console.log(children);
  if (payload && payload.role === "admin") {
    return children;
  } else {
    return <Navigate to="/unauthed" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
