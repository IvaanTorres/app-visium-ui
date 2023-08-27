import { useTranslation } from "react-i18next"
import AppLayout from "../../layouts/AppLayout/AppLayout"
import { homepagePageStyle } from "./style/style"
import { USER } from "../../shared/constants/localstorage"

const Homepage = () => {
  const { t } = useTranslation()

  const userEmail = localStorage.getItem(USER) 
    ? JSON.parse(localStorage.getItem(USER) as string).email 
    : ''

  return (
    <AppLayout>
      <div className={homepagePageStyle}>
        <h1 className="title">{t('homepage.welcome')} {userEmail}</h1>
      </div>
    </AppLayout>
  )
}

export default Homepage