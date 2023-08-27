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
import Axios from "../../../shared/services/Axios"
import { LOGOUT } from "../../../shared/constants/resources"
import logout from "../../../shared/helpers/logout"

const MySidebar = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await Axios.post(LOGOUT)

    logout()
    navigate(ROUTE_LOGIN)
  }

  return (
    <HamburgerLayout direction="column" className={mySidebarStyle}>
      {/* Profile */}
      <div className="profile">
        {/* Avatar */}
        <div className="avatar">
          <MyAvatar size={150} value={getInitialLetters('itoga21.it@gmail.com')} className={avatarStyle} />
        </div>
        {/* Links */}
        <div className="links">
          <LinkStyled color={colors.white}>itoga21.it@gmail.com</LinkStyled>
          <LinkStyled color={colors.white}>Connections: 5</LinkStyled>
          <MyLink to={ROUTE_LOGIN} onClick={handleLogout} className={linkStyle}>Logout</MyLink>
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
          <span>Homepage</span>
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
          <span>Settings</span>
        </MyButton>
      </div>
    </HamburgerLayout>
  )
}

export default MySidebar