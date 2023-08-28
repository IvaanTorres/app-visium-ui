import { useNavigate } from "react-router-dom"
import HamburgerLayout from "../../../layouts/HamburgerLayout/HamburgerLayout"
import colors from "../../../shared/constants/design-system/colors"
import { ICON_HOME, ICON_SETTINGS } from "../../../shared/constants/icons/icons"
import { ROUTE_HOMEPAGE, ROUTE_LOGIN, ROUTE_SETTINGS } from "../../../shared/constants/router/routes"
import getInitialLetters from "../../../shared/helpers/getInitialLetters"
import { LinkStyled } from "../../../shared/styles/link"
import MyAvatar from "../../atoms/MyAvatar/MyAvatar"
import MyButton from "../../atoms/MyButton/MyButton"
import MyIcon from "../../atoms/MyIcon/MyIcon"
import MyLink from "../../atoms/MyLink/MyLink"
import { avatarStyle, linkStyle, mySidebarStyle, settingButtonStyle } from "./styles/styles"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { USER } from "../../../shared/constants/localstorage"
import { getConnectionInfos } from "../../../shared/services/infos/general"
import logoutLocale from "../../../shared/helpers/logout"
import { logout } from "../../../shared/services/auth/auth"

const MySidebar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [loginCount, setLoginCount] = useState(0)

  const userEmail = localStorage.getItem(USER) 
    ? JSON.parse(localStorage.getItem(USER) as string).email 
    : ''

  useEffect(() => {
    getLoginCount()
  }, [])

  const getLoginCount = async () => {
    const connectionInfos = await getConnectionInfos()

    if('data' in connectionInfos){
      setLoginCount(connectionInfos.data.nb_logins)
    } else {
      console.error('Failed to get connection infos');
    }
  }

  const handleLogout = async () => {
    const logoutInfos = await logout()

    if('data' in logoutInfos){
      logoutLocale()
      navigate(ROUTE_LOGIN)
    } else {
      console.error('Failed to logout');
    }
  }

  return (
    <HamburgerLayout direction="column" className={mySidebarStyle}>
      {/* Profile */}
      <div className="profile">
        {/* Avatar */}
        <div className="avatar">
          <MyAvatar size={150} value={getInitialLetters(userEmail)} className={avatarStyle} />
        </div>
        {/* Links */}
        <div className="links">
          <LinkStyled color={colors.white}>{userEmail}</LinkStyled>
          <LinkStyled color={colors.white}>{t('general.connections')}: {loginCount}</LinkStyled>
          <MyLink to={ROUTE_LOGIN} onClick={handleLogout} className={linkStyle}>{t('auth.logout')}</MyLink>
        </div>
      </div>
      {/* Future listing */}
      <div className="menu">
        <MyButton
          importance="secondary"
          type="info"
          onClick={() => {navigate(ROUTE_HOMEPAGE)}}
          className={settingButtonStyle}
        >
          <MyIcon icon={ICON_HOME} size={25} />
          <span>{t('homepage.homepage')}</span>
        </MyButton>
        {/* Add items to the menu in future versions */}
      </div>
      {/* Settings */}
      <div className="settings">
        <MyButton
          importance="secondary"
          type="info"
          onClick={() => {navigate(ROUTE_SETTINGS)}}
          className={settingButtonStyle}
        >
          <MyIcon icon={ICON_SETTINGS} size={25} />
          <span>{t('settings.settings')}</span>
        </MyButton>
      </div>
    </HamburgerLayout>
  )
}

export default MySidebar