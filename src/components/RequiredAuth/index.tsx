import { getJwtPayload } from "../../utils/getJwtPayload";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = (children: any) => {
  const location = useLocation();
  const payload = getJwtPayload();

  if (payload && payload.role === "admin") {
    return children;
  } else {
    return <Navigate to="/unauthed" state={{ from: location }} replace />;
  }
};

// const AdminRoute: React.FC<RouteProps> = ({ ...rest }) => {
//   const payload = getJwtPayload();

//   console.log();

//   return payload && payload.role === "admin" ? (
//     <Route {...rest} />
//   ) : (
//     <Route element={<Navigate to="/unauthed" replace />} />
//   );
//   // <Route {...rest}>
//   //   {payload && payload.role === "admin" ? (
//   //     children
//   //   ) : (
//   //     <Navigate to="/unauthed" replace />
//   //   )}
//   // </Route>
// };

export default RequireAuth;
