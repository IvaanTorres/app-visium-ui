import { Navigate } from "react-router-dom"
import { ROUTE_LOGIN } from "../../shared/constants/router/routes"
import { AUTH_TOKEN, AUTH_TOKEN_EXP } from "../../shared/constants/localstorage"
import { CheckAuthProps } from "./types/types"
import moment from "moment"
import { useEffect, useState } from "react"
import logout from "../../shared/helpers/logout"

const CheckAuth = (props: CheckAuthProps) => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    setIsAuth(checkAccess())

    if(!checkAccess()) logout()
  }, [isAuth])

  const checkAccess = () => {
    const token = localStorage.getItem(AUTH_TOKEN)
    const tokenExp = localStorage.getItem(AUTH_TOKEN_EXP)

    if (!token || !tokenExp) return false;

    const parsedTokenExp = JSON.parse(tokenExp);
    return moment().isBefore(moment(parsedTokenExp * 1000));
  }

  if(isAuth) {
    return props.children
  } else {
    return <Navigate to={ROUTE_LOGIN} />
  }
}

export default CheckAuth