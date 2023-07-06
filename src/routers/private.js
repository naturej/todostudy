import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const { pathName } = useLocation();

  useEffect(() => {
    if (!accessToken) {
      navigate("/", {
        state: { from: pathName },
      });
    }
  }, [accessToken]);

  return accessToken ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
