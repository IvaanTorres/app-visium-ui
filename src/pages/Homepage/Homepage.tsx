import { useTranslation } from "react-i18next"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { homepagePageStyle } from "./style/style"
import { USER } from "../../shared/constants/localstorage"
import { useState, useEffect } from "react"
import { getGeneralPreferences } from "../../shared/services/preferences/general"
import { isTokenAboutToExpired } from "../../shared/helpers/isTokenAboutToExpired"
import { refreshToken } from "../../shared/services/auth/auth"
import { useNavigate } from "react-router-dom"
import logoutLocale from "../../shared/helpers/logout"
import { ROUTE_LOGIN } from "../../shared/constants/router/routes"
import loginLocale from "../../shared/helpers/login"

const Homepage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [welcomeMessageSize, setWelcomeMessageSize] = useState(0)

  useEffect(() => {
    handleGetMessageSize()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleGetMessageSize = async () => {
    if(isTokenAboutToExpired()) {
      // Request new token and retry with recursive function
      const refreshTokenData = await refreshToken()

      if('data' in refreshTokenData) {
        loginLocale(refreshTokenData.data.refresh_token.token, refreshTokenData.data.refresh_token.expires_in)
        handleGetMessageSize()
      } else {
        console.error('Failed to refresh token');
        logoutLocale()
        navigate(ROUTE_LOGIN)
      }

      handleGetMessageSize()
    } else {
      const generalPromise = await getGeneralPreferences()

      if('data' in generalPromise){
        setWelcomeMessageSize(+generalPromise.data.welcomingMessageSize)
      } else {
        console.error('Failed to get general preferences');
      }
    }
  }

  const userEmail = localStorage.getItem(USER) 
    ? JSON.parse(localStorage.getItem(USER) as string).email 
    : ''

  return (
    <AppLayout>
      <div className={homepagePageStyle(welcomeMessageSize)}>
        <h1 className="title">{t('homepage.welcome')} {userEmail}</h1>
      </div>
    </AppLayout>
  )
}

export default Homepage