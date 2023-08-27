import { Navigate } from "react-router-dom";
import { ROUTE_LOGIN } from "../../shared/constants/router/routes";
import { AUTH_TOKEN, AUTH_TOKEN_EXP } from "../../shared/constants/localstorage";
import { CheckAuthProps } from "./types/types";
import moment from "moment";
import { useEffect, useState } from "react";
import logout from "../../shared/helpers/logout";
import MyPageLoader from "../../components/molecules/MyPageLoader/MyPageLoader";

const CheckAuth = (props: CheckAuthProps) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = checkAccess();
    setIsAuth(authStatus);

    if (!authStatus) {
      logout();
    }
  }, []);

  const checkAccess = () => {
    const token = localStorage.getItem(AUTH_TOKEN);
    const tokenExp = localStorage.getItem(AUTH_TOKEN_EXP);

    if (!token || !tokenExp) return false;

    return moment().isBefore(moment(+tokenExp * 1000));
  };

  if (isAuth === null) {
    return (
      <MyPageLoader />
    )
  }

  if (isAuth) {
    return props.children
  } else {
    return <Navigate to={ROUTE_LOGIN} />
  }
};

export default CheckAuth;
